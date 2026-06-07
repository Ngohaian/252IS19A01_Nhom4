//detail.js
const detailManager = new ProductManager();
const cart = new Cart();
detailManager.loadFromLocalStorage();

const detail = document.querySelector(".detail");

if (!detail) {
    throw new Error("Không tìm thấy .detail");
}

// ================= GET PRODUCT =================
const id = Number(new URLSearchParams(window.location.search).get("id"));
const product = detailManager.products.find(p => p.id === id);

if (!product) {
    detail.innerHTML = `<h2>Không tìm thấy sản phẩm</h2>`;
    throw new Error("Product not found");
} else {

    // ================= RELATED =================
    const related = detailManager.products
        .filter(p =>
            p.category === product.category &&
            p.id !== product.id
        )
        .slice(0, 4);

    UIRender.renderProductDetail(product, related);


    // ================= THUMB CLICK =================
    document.querySelectorAll(".thumb").forEach(img => {
        img.onclick = () => {
            document.querySelector(".main-img").src = img.src;
        };
    });

    // ================= FAVORITE =================
    document.getElementById("favoriteBtn").onclick = () => { 
        detailManager.toggleFavorite(product.id);
        location.reload();
    };

    // ================= QUANTITY =================
    let quantity = 1;

    const quantityValue = document.getElementById("quantityValue");

    document.getElementById("plusQty").onclick = () => {
        if (quantity < product.stock) {
            quantity++;
            quantityValue.innerText = quantity;
        }
    };

    document.getElementById("minusQty").onclick = () => {
        if (quantity > 1) {
            quantity--;
            quantityValue.innerText = quantity;
        }
    };

    // ================= CART =================
    document.getElementById("cartBtn").onclick = () => {
        cart.addItem(product, quantity);
        location.reload();
    };

    // ================= COMMENTS =================
    let comments = JSON.parse(
        localStorage.getItem(`comments_${product.id}`)
    ) || [];

    const renderComments = () => {
        const el = document.getElementById("commentList");

        el.innerHTML = comments.map(c => `
            <div class="comment-item">
                <b>${c.name}</b>
                <p>${c.text}</p>
            </div>
        `).join("");
    };

    renderComments();

    document.getElementById("sendCommentBtn").onclick = () => {

        const input = document.getElementById("commentInput");
        const text = input.value.trim();

        if (!text) return;

        comments.push({
            name: "Khách",
            text
        });

        localStorage.setItem(
            `comments_${product.id}`,
            JSON.stringify(comments)
        );

        input.value = "";
        renderComments();
    };
}
