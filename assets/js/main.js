import { Cart } from './cart.js';
import {order, orderDetailUI} from './order.js';
function loadComponent(id, file) {
    return fetch(file)
        .then(res => res.text())
        .then(html => {
            const el = document.getElementById(id);
            if (!el) return;
            el.innerHTML = html;
            el.querySelectorAll('script').forEach(old => {
                const s = document.createElement('script');
                [...old.attributes].forEach(a => s.setAttribute(a.name, a.value));
                s.textContent = old.textContent;
                document.body.appendChild(s);
                old.remove();
            });
        })
        .catch(err => console.error('Lỗi tải:', file, err));
}
// RENDER SẢN PHẨM TIÊU BIỂU TRANG CHỦ (HIỆU ỨNG SINH ĐỘNG)
function renderFeaturedProducts() {
    const featuredProducts = [
        { id: 1, category: "BAN CÔNG", name: "Combo Cây Ban Công", price: 429000, img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
        { id: 2, category: "VĂN PHÒNG", name: "Combo Cây Văn Phòng", price: 150000, img: "https://images.unsplash.com/photo-1416879598555-220b8f0475fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
        { id: 3, category: "VĂN PHÒNG", name: "Combo Cây Văn Công", price: 350000, img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
        { id: 4, category: "VĂN PHÒNG", name: "Cây Lưỡi Hổ Thủy Sinh", price: 230000, img: "https://images.unsplash.com/photo-1593482892290-f54927eba703?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }
    ];

    const productsContainer = document.getElementById("featured-products-section");
    if (productsContainer) {
        productsContainer.innerHTML = featuredProducts.map((p, index) => `
            <div class="home-product-card fade-in-up" style="animation-delay: ${index * 0.2}s">
                <div class="product-img-wrapper">
                    <img src="${p.img}" alt="${p.name}">
                    <div class="heart-icon heart-bounce">♡</div>
                    <div class="hover-overlay">
                        <button class="btn-buy" onclick="window.location.href='products.html'">CHỌN MUA</button>
                    </div>
                </div>
                <div class="product-info">
                    <span class="product-category">${p.category}</span>
                    <h3 class="product-name">${p.name}</h3>
                    <p class="product-price">${p.price.toLocaleString("vi-VN")}đ</p>
                </div>
            </div>
        `).join("");
    }
}
document.addEventListener("DOMContentLoaded", async () => {
    await loadComponent('header-placeholder', 'includes/header.html');
    await loadComponent('footer-placeholder', 'includes/footer.html');

    const myCart = new Cart();

    const products = window.manager?.products;
    if (products && products.length > 0) {
        myCart.addItem(products[0], 2);
        myCart.addItem(products[1], 1); 
    }
    myCart.render();
    myCart.updateCartBadge();
    renderFeaturedProducts();
    const orders = order.loadFromStorage();

    document.addEventListener('click', function (e) {
    const target = e.target.closest('a');
    if (!target || !target.href) return;

    const href = target.getAttribute('href');
    if (!href || href === '#' || href.startsWith('#')) return;

    const url = target.href;
    if (!url.startsWith(window.location.origin)) return;

    e.preventDefault();

    const testFrame = document.createElement('iframe');
    testFrame.style.display = 'none';
    testFrame.src = url;
    document.body.appendChild(testFrame);

    testFrame.onload = function() {
        try {
            const frameDoc = testFrame.contentDocument || testFrame.contentWindow.document;
            if (frameDoc.body.innerText.includes('Cannot GET')) {
                window.location.href = '/NotFound.html';
            } else {
                window.location.href = url;
            }
        } catch {
            window.location.href = url;
        } finally {
            document.body.removeChild(testFrame);
        }
    };

    testFrame.onerror = function() {
        window.location.href = '/NotFound.html';
        document.body.removeChild(testFrame);
    };
});
    
});

