//detail.js
const manager = new ProductManager();
manager.loadFromLocalStorage();

const detail = document.querySelector(".detail");

if (!detail) {
    throw new Error("Không tìm thấy .detail");
}

// ================= GET PRODUCT =================
const id = Number(new URLSearchParams(window.location.search).get("id"));
const product = manager.products.find(p => p.id === id);

if (!product) {
    detail.innerHTML = `<h2>Không tìm thấy sản phẩm</h2>`;
} else {

    // ================= RELATED =================
    const related = manager.products
        .filter(p =>
            p.category === product.category &&
            p.id !== product.id
        )
        .slice(0, 4);

    // ================= RENDER HTML =================
    detail.innerHTML = `
        <div class="breadcrumb">
            <a href="index.html">Trang chủ</a> /
            <span>${product.category}</span> /
            <span>${product.name}</span>
        </div>

        <div class="detail-main">

            <div class="left">

                <img src="${product.image}" class="main-img">

                <div class="thumbs">
                    ${(product.images || []).map(img => `
                        <img src="${img}" class="thumb">
                    `).join("")}
                </div>

            </div>

            <div class="right">

                <h1>${product.name}</h1>

                <p class="price">
                    ${product.price.toLocaleString("vi-VN")}đ
                </p>

                <p>
                    ${product.stock > 0 ? "🟢 Còn hàng" : "🔴 Hết hàng"}
                </p>

                <p>${product.shortDescription || ""}</p>

                <ul>
                    <li>Chiều cao: ${product.attributes?.height || ""}</li>
                    <li>Loại: ${product.attributes?.type || ""}</li>
                    <li>Độ khó: ${product.attributes?.difficulty || ""}</li>
                </ul>

                <div class="rating-box">
                    <h3>Đánh giá</h3>
                    <p>${"⭐".repeat(product.rating || 0)}</p>
                </div>

                <div class="quantity-box">

                    <h3>Số lượng</h3>

                    <div class="quantity-control">

                        <button id="minusQty">➖</button>
                        <span id="quantityValue">1</span>
                        <button id="plusQty">➕</button>

                    </div>

                </div>

                <button id="cartBtn" ${product.stock <= 0 ? "disabled" : ""}>
                    🛒 Thêm vào giỏ
                </button>

                <button id="favoriteBtn">
                    ${product.isFavorite ? "💖 Đã thích" : "🤍 Yêu thích"}
                </button>

            </div>
        </div>

        <div class="tabs">
            <h3>Mô tả chi tiết</h3>
            <p>${product.fullDescription || ""}</p>

            <h3>Chăm sóc</h3>
            <p>Ánh sáng: ${product.careGuide?.light || ""}</p>
            <p>Nước: ${product.careGuide?.water || ""}</p>
            <p>Đất: ${product.careGuide?.soil || ""}</p>
            <p>Lưu ý: ${product.careGuide?.note || ""}</p>
        </div>

        <div class="related">
            <h3>Sản phẩm liên quan</h3>

            <div class="related-list">
                ${related.map(p => `
                    <div class="related-item">
                        <img src="${p.image}">
                        <p>${p.name}</p>
                        <p>${p.price.toLocaleString("vi-VN")}đ</p>
                        <a href="detail.html?id=${p.id}">Xem</a>
                    </div>
                `).join("")}
            </div>
        </div>

        <div class="comments">
            <h3>Bình luận</h3>

            <div id="commentList"></div>

            <textarea id="commentInput" placeholder="Viết bình luận..."></textarea>

            <button id="sendCommentBtn">Gửi</button>
        </div>
    `;

    // ================= THUMB CLICK =================
    document.querySelectorAll(".thumb").forEach(img => {
        img.onclick = () => {
            document.querySelector(".main-img").src = img.src;
        };
    });

    // ================= FAVORITE =================
    document.getElementById("favoriteBtn").onclick = () => {
        product.isFavorite = !product.isFavorite;
        manager.saveToLocalStorage();
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
        manager.addToCart(product.id, quantity);
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
