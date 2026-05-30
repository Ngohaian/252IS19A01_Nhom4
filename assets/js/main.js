localStorage.clear();
sessionStorage.clear();
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
            <a href="/pages/products/ProductDetail.html?id=${p.id}"
                style="text-decoration:none; color:inherit; display:contents;">
            <div class="home-product-card fade-in-up" style="animation-delay: ${index * 0.2}s">
                <div class="product-img-wrapper">
                    <img src="${p.img}" alt="${p.name}">
                </div>
                <div class="product-info">
                    <span class="product-category">${p.category}</span>
                    <h3 class="product-name">${p.name}</h3>
                    <p class="product-price">${p.price.toLocaleString("vi-VN")}đ</p>
                </div>
            </div>
        </a>
        `).join("");
    }
}
document.addEventListener("DOMContentLoaded", async () => {
    const BASE = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost'
    ? '/'
    : '/252IS19A01_Nhom4/';

    await loadComponent('header-placeholder', `${BASE}includes/header.html`);
    await loadComponent('footer-placeholder', `${BASE}includes/footer.html`);
    
    const myCart = new Cart();
    window.cart = myCart;

    myCart.render();
    myCart.updateCartBadge();
    const orders = new order();
    window.Order = orders;

    renderFeaturedProducts();
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

// HIỆU ỨNG ACTIVE HEADER (IN ĐẬM & GẠCH CHÂN)
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const currentPath = window.location.pathname;
        const currentUrl = window.location.href;
        const navLinks = document.querySelectorAll('.nav-links a');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            
            link.style.borderBottom = '2.5px solid transparent';
            link.style.webkitTextStroke = '0';
            link.style.fontWeight = 'normal';
            if (href && href !== '#' && (currentUrl.includes(href) || 
               (href === 'index.html' && (currentPath.endsWith('/') || currentPath.includes('index.html'))))) {
                
                link.style.borderBottom = '2.5px solid #967451';
                link.style.webkitTextStroke = '0.8px #967451'; 
                link.style.fontWeight = 'bold';
            }
        });
    }, 500); 
});

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const searchInput = document.getElementById('searchInput');
        const productsContainer = document.getElementById('featured-products-section');

        if (searchInput && productsContainer) {
            
            // --- 1. KHÓA CHẶT FORM VÀ ICON TÌM KIẾM ĐỂ KHÔNG BỊ NHẢY TRANG ---
            const searchForm = searchInput.closest('form');
            if (searchForm) {
                searchForm.addEventListener('submit', function(e) {
                    e.preventDefault(); 
                });
            }

            const searchIcon = searchInput.nextElementSibling || searchInput.parentElement.querySelector('a, button, i');
            if (searchIcon) {
                searchIcon.addEventListener('click', function(e) {
                    e.preventDefault(); 
                });
            }

            // --- 3. LỌC VÀ HIỂN THỊ SẢN PHẨM NGAY TẠI CHỖ KHI GÕ CHỮ ---
            searchInput.addEventListener('input', function() {
                const keyword = this.value.trim().toLowerCase();
                
                // Lấy dữ liệu từ localStorage
                let allProducts = JSON.parse(localStorage.getItem('products')) || [];
                
                // Dự phòng nếu lưu ở biến toàn cục
                if (allProducts.length === 0 && window.productList) {
                    allProducts = window.productList;
                }

                // Lọc sản phẩm theo tên hoặc danh mục
                const filteredProducts = allProducts.filter(p => 
                    (p.name && p.name.toLowerCase().includes(keyword)) || 
                    (p.category && p.category.toLowerCase().includes(keyword))
                );

                if (filteredProducts.length > 0) {
                    productsContainer.innerHTML = featuredProducts.map((p, index) => `
                        <a href="/pages/products/ProductDetail.html?id=${p.id}" 
                        style="text-decoration:none; color:inherit; display:contents;">
                            <div class="home-product-card fade-in-up" style="animation-delay: ${index * 0.2}s; cursor: pointer;">
                                <div class="product-img-wrapper">
                                    <img src="${p.img}" alt="${p.name}">
                                    <div class="heart-icon heart-bounce" onclick="event.stopPropagation(); this.classList.toggle('liked')">♡</div>
                                </div>
                                <div class="product-info">
                                    <span class="product-category">${p.category}</span>
                                    <h3 class="product-name">${p.name}</h3>
                                    <p class="product-price">${p.price.toLocaleString("vi-VN")}đ</p>
                                </div>
                            </div>
                        </a>
                    `).join("");
                } else {
                    // Trạng thái không tìm thấy
                    productsContainer.innerHTML = `
                        <div style="width:100%; text-align:center; padding: 50px 20px;">
                            <h3 style="color:#967451; font-size:1.5rem;">Không tìm thấy cây cảnh nào phù hợp với từ khóa "${keyword}".</h3>
                            <p style="color:#555; margin-top:10px;">Vui lòng thử lại bằng một từ khóa khác.</p>
                        </div>
                    `;
                }
            });
        }
    }, 500); 
});