class UIRender{
    static renderProductList(products, containerSelector) {

        const container = document.querySelector(containerSelector);

        if (!container) return;

        container.innerHTML = products.map(p => `

            <div class="product-card">

                <div class="product-image">
                    <img src="${p.image}" alt="${p.name}">
                </div>

                <div class="product-info">
                    <h3 class="product-title">${p.name}</h3>

                    <p class="product-price">
                        ${p.price.toLocaleString("vi-VN")} đ
                    </p>

                    <button class="product-btn"
                        onclick="manager.addToCart(${p.id})">
                        Add to cart
                    </button>

                    <a class="view-link"
                        href="pages/products/ProductDetail.html?id=${p.id}">
                        View
                    </a>
                </div>

            </div>

        `).join("");
    }
    static renderProductDetail(product, related = []) {

    const detail = document.querySelector(".detail");

    if (!detail) return;

    detail.innerHTML = `

    <!-- BREADCRUMB -->
    <section class="breadcrumb">

        <a href="../../index.html">Trang chủ</a>
        <span>/</span>
        <a href="pages/products/ProductList.html">Sản phẩm</a>

        <span>/</span>

        <span>${product.name}</span>

    </section>



    <!-- DETAIL MAIN -->
    <section class="detail-main">

        <!-- LEFT -->
        <div class="detail-left">

            <!-- MAIN IMAGE -->
            <div class="main-image">

                <img src="${product.image}" class="main-img">

            </div>


            <!-- THUMBNAILS -->
            <div class="thumbnail-list">

                ${(product.images || []).map(img => `

                    <img src="${img}" class="thumb">

                `).join("")}

            </div>

        </div>



        <!-- RIGHT -->
        <div class="detail-right">
            ${product.category ? `<span class="product-tag-cat">${product.category}</span>` : ''}
            <!-- PRODUCT NAME -->
            <h1 class="product-name">

                ${product.name}

            </h1>


            <!-- RATING -->
            <div class="rating-box">

                <h3>Đánh giá</h3>

                <p>

                    ${"⭐".repeat(product.rating || 0)}

                </p>

            </div>

            
            <!-- PRICE -->
            <p class="product-price">

                ${product.price.toLocaleString("vi-VN")}đ

            </p>


            <!-- STOCK -->
            <p class="product-stock">

                ${product.stock > 0
                    ? "🟢 Còn hàng"
                    : "🔴 Hết hàng"}

            </p>


            <!-- SHORT DESCRIPTION -->
            <p class="short-description">

                ${product.shortDescription || ""}

            </p>



            <!-- ATTRIBUTES -->
            <div class="attributes">

                <h3>Thông tin</h3>

                <ul>

                    <li>
                        Chiều cao:
                        ${product.attributes?.height || ""}
                    </li>

                    <li>
                        Loại:
                        ${product.attributes?.type || ""}
                    </li>

                    <li>
                        Độ khó:
                        ${product.attributes?.difficulty || ""}
                    </li>

                </ul>

            </div>



            



            <!-- QUANTITY -->
            <div class="quantity-box">

                <h3>Số lượng</h3>

                <div class="quantity-control">

                    <button id="minusQty">-</button>

                    <span id="quantityValue">1</span>

                    <button id="plusQty">+</button>

                </div>

            </div>



            <!-- ACTION BUTTONS -->
            <div class="action-buttons">

                <button
                    id="cartBtn"
                    ${product.stock <= 0 ? "disabled" : ""}
                >
                    🛒 Thêm vào giỏ
                </button>


                <button id="favoriteBtn">

                    ${product.isFavorite
                        ? "❤️ "
                        : "🤍 "}

                </button>

            </div>

        </div>

    </section>



    <!-- DESCRIPTION -->
    <section class="tabs-section">

        <div class="description-box">

            <h2>📄 Mô tả chi tiết</h2>

            <p>

                ${product.fullDescription || ""}

            </p>

        </div>



        <div class="care-guide">

            <h2>🌱 Chăm sóc</h2>

            <ul>

                <li>
                    Ánh sáng:
                    ${product.careGuide?.light || ""}
                </li>

                <li>
                    Nước:
                    ${product.careGuide?.water || ""}
                </li>

                <li>
                    Đất:
                    ${product.careGuide?.soil || ""}
                </li>

                <li>
                    Lưu ý:
                    ${product.careGuide?.note || ""}
                </li>

            </ul>

        </div>

    </section>



    <!-- RELATED -->
    <section class="related-products">

        <h2>Sản phẩm liên quan</h2>

        <div class="related-list">

            ${related.map(p => `

                <div class="related-item">

                    <img src="${p.image}">

                    <h4>${p.name}</h4>

                    <p>
                        ${p.price.toLocaleString("vi-VN")}đ
                    </p>

                    <a
                        href="../../pages/products/ProductDetail.html?id=${p.id}"
                    >
                        Xem
                    </a>

                </div>

            `).join("")}

        </div>

    </section>



    <!-- COMMENTS -->
    <section class="comments-section">

        <h2>💬 Bình luận</h2>

        <div id="commentList"></div>

        <textarea
            id="commentInput"
            placeholder="Viết bình luận..."
        ></textarea>

        <button id="sendCommentBtn">

            Gửi

        </button>

    </section>

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
                    <a href="../../pages/products/ProductDetail.html?id=${p.id}">Xem chi tiết</a>
                </div>
            `).join("");
    }
}