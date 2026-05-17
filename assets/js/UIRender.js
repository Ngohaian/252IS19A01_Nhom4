class UIRender{
    static renderProductList(products, containerSelector) {
        const container = document.querySelector(containerSelector);
        if (!container) return;

        container.innerHTML = products.map(p => `
            <div class="product-card">
                <img src="${p.image}" />
                <h3>${p.name}</h3>
                <p>${p.price.toLocaleString("vi-VN")} đ</p>
                <button onclick="manager.addToCart(${p.id})">Add to cart</button>
                <a href="detail.html?id=${p.id}">View</a>
            </div>
        `).join("");
    }
    static renderProductDetail(product, related = []) {
    const detail = document.querySelector(".detail");
    if (!detail) return;

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
}
    static renderSearchResults(products, containerSelector) {
        const container = document.querySelector(containerSelector);
        if (!container) return;

        container.innerHTML = products.length === 0
            ? `<p>Không tìm thấy sản phẩm</p>`
            : products.map(p => `
                <div class="product-card">
                    <img src="${p.image}">
                    <h3>${p.name}</h3>
                    <p>${p.price.toLocaleString("vi-VN")}đ</p>
                    <a href="detail.html?id=${p.id}">Xem chi tiết</a>
                </div>
            `).join("");
    }
}