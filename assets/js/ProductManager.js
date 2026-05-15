//productmanager.js
class ProductManager {

    constructor() {
        this.products = [];

        this.currentCategory = "all";
        this.currentPrice = "all";
        this.currentSort = "none";
    }

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

    findProduct(id) {
        return this.products.find(p => p.id === id);
    }

    saveCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    getCart() {
        return JSON.parse(localStorage.getItem("cart")) || [];
    }

    addToCart(id, quantity = 1) {

    const product = this.findProduct(id);
    if (!product) return;

    if (product.stock <= 0) {
        alert("Sản phẩm đã hết hàng!");
        return;
    }

    if (quantity > product.stock) {
        alert("Không đủ số lượng!");
        return;
    }

    let cart = this.getCart();

    const exist = cart.find(p => p.id === id);

    if (exist) {
        exist.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity
        });
    }

    this.saveCart(cart);
    this.saveToLocalStorage();

    alert("Đã thêm vào giỏ!");
}

    toggleFavorite(id) {

        const product = this.findProduct(id);
        if (!product) return;

        product.isFavorite = !product.isFavorite;

        this.saveToLocalStorage();
    }
}
