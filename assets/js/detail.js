const manager = new ProductManager();
manager.loadFromLocalStorage();

const detail = document.querySelector(".detail");

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const product = manager.products.find(p => p.id === id);

if (!product) {
    detail.innerHTML = "<h2>Không tìm thấy sản phẩm</h2>";
} else {

    const related = manager.products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

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
                    ${(product.images || []).map(img =>
                        `<img src="${img}" class="thumb">`
                    ).join("")}
                </div>
            </div>

            <div class="right">
                <h1>${product.name}</h1>
                <p>${product.price.toLocaleString("vi-VN")}đ</p>

                <p>${product.stock > 0 ? "🟢 Còn hàng" : "🔴 Hết hàng"}</p>

                <p>${product.shortDescription || ""}</p>

                <ul>
                    <li>Chiều cao: ${product.attributes?.height || ""}</li>
                    <li>Loại: ${product.attributes?.type || ""}</li>
                    <li>Độ khó: ${product.attributes?.difficulty || ""}</li>
                </ul>

                <button onclick="manager.addToCart(${product.id})">
                    🛒 Thêm vào giỏ
                </button>

                <button onclick="manager.toggleFavorite(${product.id})">
                    ❤️ Yêu thích
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

            ${related.map(p => `
                <div class="related-item">
                    <img src="${p.image}">
                    <p>${p.name}</p>
                    <p>${p.price.toLocaleString("vi-VN")}đ</p>
                </div>
            `).join("")}
        </div>
    `;

    
    document.querySelectorAll(".thumb").forEach(t => {
        t.onclick = () => {
            document.querySelector(".main-img").src = t.src;
        };
    });
}