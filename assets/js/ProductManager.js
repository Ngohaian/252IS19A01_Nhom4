// productmanager.js

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

        localStorage.setItem(
            "products",
            JSON.stringify(this.products)
        );

    }

    loadFromLocalStorage() {

        const data = JSON.parse(
            localStorage.getItem("products")
        );

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

    renderProducts(list = this.products) {

        const el = document.querySelector(".product-list");

        if (!el) return;

        let html = "";

        list.forEach(p => {

            html += `
                <div class="product-card">

                    <img src="${p.image}" alt="${p.name}">

                    <h3>${p.name}</h3>

                    <p>${p.category}</p>

                    <p>
                        ${p.price.toLocaleString("vi-VN")}đ
                    </p>

                    <p>
                        ${p.stock > 0
                            ? `Còn ${p.stock} sản phẩm`
                            : "Hết hàng"}
                    </p>

                    <p>
                        ${"⭐".repeat(p.rating || 0)}
                    </p>

                    <button onclick="manager.toggleFavorite(${p.id})">

                        ${p.isFavorite
                            ? "💖 Đã thích"
                            : "🤍 Yêu thích"}

                    </button>

                    <button
                        onclick="manager.addToCart(${p.id})"
                        ${p.stock <= 0 ? "disabled" : ""}
                    >
                        🛒 Thêm vào giỏ
                    </button>

                    <a href="detail.html?id=${p.id}">
                        Xem chi tiết
                    </a>

                </div>
            `;

        });

        el.innerHTML = html;

    }

    applyFilters() {

        let result = [...this.products];

        if (this.currentCategory !== "all") {

            result = result.filter(
                p => p.category === this.currentCategory
            );

        }

        if (this.currentPrice === "low") {

            result = result.filter(
                p => p.price < 100000
            );

        } else if (this.currentPrice === "medium") {

            result = result.filter(
                p =>
                    p.price >= 100000 &&
                    p.price <= 300000
            );

        } else if (this.currentPrice === "high") {

            result = result.filter(
                p => p.price > 300000
            );

        }

        if (this.currentSort === "asc") {

            result.sort((a, b) => a.price - b.price);

        } else if (this.currentSort === "desc") {

            result.sort((a, b) => b.price - a.price);

        }

        this.renderProducts(result);

    }

    filterByCategory(value) {

        this.currentCategory = value;

        this.applyFilters();

    }

    filterByPrice(value) {

        this.currentPrice = value;

        this.applyFilters();

    }

    sortByPrice(value) {

        this.currentSort = value;

        this.applyFilters();

    }

    toggleFavorite(id) {

        const product = this.products.find(
            p => p.id === id
        );

        if (!product) return;

        product.isFavorite = !product.isFavorite;

        this.saveToLocalStorage();

        this.applyFilters();

    }

    // UPDATED
    addToCart(id, quantity = 1) {

        const product = this.products.find(
            p => p.id === id
        );

        if (!product) return;

        if (product.stock <= 0) {

            alert("Sản phẩm đã hết hàng!");

            return;
        }

        if (quantity > product.stock) {

            alert("Không đủ số lượng sản phẩm!");

            return;
        }

        let cart = JSON.parse(
            localStorage.getItem("cart")
        ) || [];

        const exist = cart.find(
            p => p.id === id
        );

        if (exist) {

            exist.quantity += quantity;

        } else {

            cart.push({

                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,

                quantity: quantity

            });

        }

        // UPDATED
        product.stock -= quantity;

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        this.saveToLocalStorage();

        if (document.querySelector(".product-list")) {

            this.applyFilters();

        }

        alert("Đã thêm vào giỏ!");

    }

}
