document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. KIỂM TRA ĐĂNG NHẬP & LẤY THÔNG TIN
    // ==========================================
    const user = JSON.parse(sessionStorage.getItem('currentUser'));

    // Nếu chưa có phiên đăng nhập, bắt buộc quay về trang Login
    if (!user) {
        alert("Vui lòng đăng nhập để xem không gian cá nhân!");
        window.location.href = 'pages/auth/Login.html';
        return;
    }

    // Xử lý nút Đăng xuất (Có ở cả 3 trang cá nhân)
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            sessionStorage.removeItem('currentUser'); 
            window.location.href = 'pages/auth/Login.html'; 
        });
    }

    // ==========================================
    // 2. RENDER TRANG THÔNG TIN TÀI KHOẢN (Profile.html)
    // ==========================================
    const nameEl = document.getElementById('display-name');
    if (nameEl) {
        nameEl.textContent = user.name;
        document.getElementById('display-email').textContent = user.email;
        document.getElementById('display-phone').textContent = user.phone;
    }

    // ==========================================
    // 3. RENDER TRANG LỊCH SỬ ĐƠN HÀNG (OrderHistory.html)
    // ==========================================
    const orderList = document.getElementById('order-history-body');
    if (orderList) {
        const allOrders = JSON.parse(localStorage.getItem('orders')) || [];
        const myOrders = allOrders.filter(o => o.customer.email === user.email);

        // HÀM VẼ GIAO DIỆN CHUNG
        const renderOrders = (ordersToRender) => {
            if (ordersToRender.length === 0) {
                orderList.innerHTML = `<div class="empty-state"><p>Không có đơn hàng nào.</p></div>`;
                return;
            }

            orderList.innerHTML = ordersToRender.map(order => {
                const firstItem = order.items && order.items.length > 0 ? order.items[0] : null;
                const productName = firstItem ? firstItem.product.name : 'Sản phẩm Mộc Miên';
                let rawImg = firstItem ? firstItem.product.image : 'assets/images/product-default.jpg';
                let productImg = rawImg.startsWith('assets/') ? rawImg : 'assets/' + rawImg;
                const productPrice = firstItem ? firstItem.price : 0;

                return `
                <div class="order-card">
                    <div class="order-header">
                        <span class="shop-name">Mộc Miên Garden</span>
                        <span class="order-status">${order.status}</span>
                    </div>
                    <div class="order-body">
                        <img src="${productImg}" alt="Sản phẩm" class="product-img">
                        <div class="product-info">
                            <p class="product-name">${productName}</p>
                            <p class="product-details">Phân loại hàng: Mặc định</p>
                            <p class="product-details">x${firstItem ? firstItem.quantity : 0}</p>
                        </div>
                        <div class="product-price">${productPrice.toLocaleString('vi-VN')}đ</div>
                    </div>
                    <div class="order-footer">
                        <div class="total-wrapper">
                            <span class="total-label">Thành tiền: </span>
                            <span class="total-price">${order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString('vi-VN')}đ</span>
                        </div>
                        <div class="order-actions">
                            <button class="btn-again">Mua lại</button>
                            <button class="btn-contact">Liên hệ Người bán</button>
                        </div>
                    </div>
                </div>
                `;
            }).join('');
        };

        // Khởi chạy lần đầu
        renderOrders(myOrders);

        // BẮT SỰ KIỆN THANH TABS
        const tabs = document.querySelectorAll('.tab-item');
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                tabs.forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');

                const status = e.target.getAttribute('data-status');
                if (status === 'all') {
                    renderOrders(myOrders);
                } else {
                    const filtered = myOrders.filter(o => o.status === status);
                    renderOrders(filtered);
                }
            });
        });
    }

    // ==========================================
    // 4. RENDER TRANG SẢN PHẨM YÊU THÍCH (Wishlist.html)
    // ==========================================
    const wishlistContainer = document.getElementById('wishlist-container');
    if (wishlistContainer) {
        
        // Đọc từ kho 'products' 
        const allProducts = JSON.parse(localStorage.getItem('products')) || [];
        
        // Lọc cây được thả tim
        const myWishlist = allProducts.filter(product => product.isFavorite === true);

        if (myWishlist.length === 0) {
            wishlistContainer.innerHTML = `
                <div class="empty-state">
                    <p>Vườn yêu thích của bạn đang trống...</p>
                    <a href="pages/products/ProductList.html" class="btn-shop-now">Dạo vườn ngay</a>
                </div>
            `;
        } else {
            wishlistContainer.style.display = 'grid';
            wishlistContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
            wishlistContainer.style.gap = '24px';
            wishlistContainer.classList.remove('empty-state');
            
            // ĐOẠN CODE VẼ GIAO DIỆN BỊ THIẾU ĐÃ ĐƯỢC PHỤC HỒI
            wishlistContainer.innerHTML = myWishlist.map(product => {
                let rawImg = product.image || 'assets/images/product-default.jpg';
                let productImg = rawImg.startsWith('assets/') ? rawImg : 'assets/' + rawImg;

                return `
                <div style="position: relative; border: 1.5px solid var(--border, #ddd5c4); border-radius: 16px; padding: 16px; text-align: center; background-color: #ffffff; box-shadow: 0 4px 15px rgba(62, 59, 57, 0.03); transition: transform 0.2s;">
                    
                    <button onclick="removeFromWishlist('${product.id}', event)" style="position: absolute; top: 12px; right: 12px; width: 28px; height: 28px; border-radius: 50%; background: #ffffff; border: 1px solid #ddd; color: #888; font-size: 14px; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 10; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                    ✕
                    </button>

                    <div onclick="window.location.href='pages/products/ProductDetail.html?id=${product.id}'" style="cursor: pointer;">
                        <img src="${productImg}" alt="${product.name}" style="width: 100%; border-radius: 12px; aspect-ratio: 1; object-fit: cover; margin-bottom: 12px;">
                        <h4 style="font-size: 15px; color: var(--text-main, #2c2c2c); margin-bottom: 8px; font-weight: 600;">${product.name}</h4>
                    </div>
                    
                    <p style="color: var(--price-color, #c8860b); font-weight: bold; font-size: 16px; margin-bottom: 16px;">${product.price.toLocaleString('vi-VN')}đ</p>
                    
                    <button onclick="addToCartFromWishlist(event, '${product.id}')" style="padding: 10px; width: 100%; border-radius: 8px; border: none; background-color: var(--green-btn, #7a9a3c); color: #ffffff; cursor: pointer; font-size: 13px; font-weight: 700; letter-spacing: 0.5px; z-index: 10; position: relative;">
                    🛒 THÊM VÀO GIỎ
                    </button>
                </div>
                `;
            }).join('');
        }
    }
}); 
// <-- HẾT DOMContentLoaded -->


// ==========================================
// HÀM TOÀN CỤC: XÓA SẢN PHẨM KHỎI YÊU THÍCH
// ==========================================
window.removeFromWishlist = function(productId) {
    let allProducts = JSON.parse(localStorage.getItem('products')) || [];
    const productIndex = allProducts.findIndex(p => p.id === productId);
    
    if (productIndex !== -1) {
        allProducts[productIndex].isFavorite = false;
        localStorage.setItem('products', JSON.stringify(allProducts));
        window.location.reload(); 
    }
};

// ==========================================
// HÀM TOÀN CỤC: THÊM TỪ WISHLIST VÀO GIỎ HÀNG (CHUẨN 100% THEO CART.JS)
// ==========================================
// ==========================================
// HÀM TOÀN CỤC: THÊM TỪ WISHLIST VÀO GIỎ HÀNG 
// (Sử dụng trực tiếp API của cart.js)
// ==========================================
window.addToCartFromWishlist = function(event, productId) {
    // 1. Chặn click xuyên thấu
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }

    // 2. Kéo dữ liệu cây gốc ra
    let allProducts = JSON.parse(localStorage.getItem('products')) || [];
    const product = allProducts.find(p => String(p.id) === String(productId));
    
    if (!product) {
        alert("Lỗi: Không tìm thấy dữ liệu mầm xanh này!");
        return;
    }

    // 3. ĐIỂM CHÍ MẠNG: Gọi thẳng hệ thống giỏ hàng của Hải An
    if (window.cart) {
        // Hàm này sẽ tự động lo việc cộng dồn số lượng thành 2, 3... nếu cây đã có trong giỏ
        window.cart.addItem(product, 1); 
        alert("Đã thêm mầm xanh vào giỏ hàng! 🌱");
    } else {
        alert("Lỗi: Hệ thống giỏ hàng chưa được tải!");
    }
};
// ==========================================
// HÀM TOÀN CỤC: XÓA SẢN PHẨM KHỎI YÊU THÍCH
// ==========================================
window.removeFromWishlist = function(productId, event) {
    // 1. Chặn tình trạng click xuyên thấu xuống trang chi tiết
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }

    let allProducts = JSON.parse(localStorage.getItem('products')) || [];
    
    // 2. ÉP KIỂU DỮ LIỆU (Tuyệt chiêu): Biến tất cả thành chuỗi chữ (String) để đối chiếu
    const productIndex = allProducts.findIndex(p => String(p.id) === String(productId));
    
    if (productIndex !== -1) {
        // Tắt trái tim đi (isFavorite = false)
        allProducts[productIndex].isFavorite = false;
        
        // Lưu trả lại vào kho
        localStorage.setItem('products', JSON.stringify(allProducts));
        
        // F5 lại trang để cập nhật giao diện
        window.location.reload(); 
    } else {
        alert("Lỗi: Không tìm thấy sản phẩm này trong kho dữ liệu!");
    }
};