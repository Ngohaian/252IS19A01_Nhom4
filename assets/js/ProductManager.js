class ProductManager {

    constructor() {
        this.products = [];

        this.currentCategory = "all";
        this.currentPrice = "all";
        this.currentSort = "none";
    }

    // ================= LOAD / SAVE =================
    addProduct(product) {
        this.products.push(product);
    }

    saveToLocalStorage() {
        localStorage.setItem("products", JSON.stringify(this.products));
    }

    loadFromLocalStorage() {
        const data = JSON.parse(localStorage.getItem("products"));
        if (!data) return;

        this.products = data.map(p => new Product(
            p.id,
            p.name,
            p.price,
            p.image,
            p.category,
            p.description,
            p.stock,
            p.isFavorite,
            p.images || [],
            p.shortDescription || "",
            p.fullDescription || "",
            p.attributes || {},
            p.careGuide || {},
            p.rating || 0,
            p.reviews || []
        ));
    }

    // ================= FIND =================
    findProduct(id) {
        return this.products.find(p => p.id === id);
    }

    // ================= FILTER STATE =================
    setCategory(value) {
        this.currentCategory = value;
    }

    setPrice(value) {
        this.currentPrice = value;
    }

    setSort(value) {
        this.currentSort = value;
    }

    resetFilters() {
        this.currentCategory = "all";
        this.currentPrice = "all";
        this.currentSort = "none";
    }

    // ================= FILTER LOGIC =================
    getFilteredProducts() {
        let result = [...this.products];

        // category
        if (this.currentCategory !== "all") {
            result = result.filter(p => p.category === this.currentCategory);
        }

        // price
        if (this.currentPrice === "low") {
            result = result.filter(p => p.price < 100000);

        } else if (this.currentPrice === "medium") {
            result = result.filter(p =>
                p.price >= 100000 && p.price <= 300000
            );

        } else if (this.currentPrice === "high") {
            result = result.filter(p => p.price > 300000);
        }

        // sort
        if (this.currentSort === "asc") {
            result.sort((a, b) => a.price - b.price);

        } else if (this.currentSort === "desc") {
            result.sort((a, b) => b.price - a.price);
        }

        return result;
    }

    // ================= PUBLIC API =================
    getVisibleProducts() {
        return this.getFilteredProducts();
    }

    getProductById(id) {
        return this.findProduct(id);
    }

    // ================= FAVORITE =================
    toggleFavorite(id) {
        const product = this.findProduct(id);
        if (!product) return;

        product.isFavorite = !product.isFavorite;
        this.saveToLocalStorage();
    }

    // ================= CART =================
    addToCart(id, quantity = 1) {
        const product = this.findProduct(id);
        if (!product) {
            return { success: false, message: "Không tìm thấy sản phẩm!" };
        }

        if (product.stock < quantity) {
            return { success: false, message: "Không đủ hàng!" };
        }

         let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

        const exist = cart.find(p => p.id === id);

        if (exist) {
            exist.quantity += quantity;
        } else {
            cartItems.push({ product, quantity })
        }

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        localStorage.setItem("cartCount", cartItems.length);

        return { success: true, message: "Đã thêm vào giỏ!" };
    }
}
