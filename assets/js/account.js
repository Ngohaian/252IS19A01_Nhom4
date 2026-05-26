document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. KIỂM TRA ĐĂNG NHẬP & LẤY THÔNG TIN
    // ==========================================
    const user = JSON.parse(sessionStorage.getItem('currentUser'));

    // Nếu chưa có phiên đăng nhập, bắt buộc quay về trang Login
    if (!user) {
        window.location.href = 'pages/auth/Login.html';
        return;
    }

    // Xử lý nút Đăng xuất (Có ở cả 3 trang cá nhân)
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            sessionStorage.removeItem('currentUser'); // Xóa phiên làm việc
            window.location.href = 'pages/auth/Login.html'; // Chuyển hướng
        });
    }

    // ==========================================
    // 2. RENDER TRANG THÔNG TIN TÀI KHOẢN (Profile.html)
    // ==========================================
    const nameEl = document.getElementById('display-name');
    if (nameEl) {
        // Gán dữ liệu vào thẻ HTML
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

    // Khởi chạy lần đầu: Hiển thị tất cả
    renderOrders(myOrders);

    // BẮT SỰ KIỆN KHI BẤM VÀO THANH TABS
    const tabs = document.querySelectorAll('.tab-item');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            // 1. Xóa class 'active' ở tất cả các tab và thêm vào tab vừa bấm
            tabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');

            // 2. Lấy trạng thái cần lọc
            const status = e.target.getAttribute('data-status');

            // 3. Lọc và render lại
            if (status === 'all') {
                renderOrders(myOrders); // Hiện tất cả
            } else {
                const filtered = myOrders.filter(o => o.status === status);
                renderOrders(filtered); // Chỉ hiện đơn theo trạng thái
            }
        });
    });
}
    // ==========================================
    // 4. RENDER TRANG SẢN PHẨM YÊU THÍCH (Wishlist.html)
    // ==========================================
    const wishlistContainer = document.getElementById('wishlist-container');
    if (wishlistContainer) {
        // Lấy mảng Wishlist riêng của user này
        const wishlistKey = `mocmien_wishlist_${user.email}`;
        const myWishlist = JSON.parse(localStorage.getItem(wishlistKey)) || [];

        if (myWishlist.length === 0) {
            // Nếu trống, giữ nguyên HTML empty-state ban đầu
            wishlistContainer.innerHTML = `
                <div class="empty-state">
                    <p>Vườn yêu thích của bạn đang trống...</p>
                    <a href="pages/products/ProductList.html" class="btn-shop-now">Dạo vườn ngay</a>
                </div>
            `;
        } else {
            // Nếu có sản phẩm, dùng Grid để dàn trang (Inline CSS đảm bảo tính tối giản trắng)
            wishlistContainer.style.display = 'grid';
            wishlistContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
            wishlistContainer.style.gap = '24px';
            wishlistContainer.classList.remove('empty-state'); // Xóa class căn giữa đi
            
            wishlistContainer.innerHTML = myWishlist.map(product => `
                <div style="border: 1px solid #e5e7eb; border-radius: 16px; padding: 16px; text-align: center; background-color: #ffffff;">
                    <img src="${product.img}" alt="${product.name}" style="width: 100%; border-radius: 12px; aspect-ratio: 1; object-fit: cover; margin-bottom: 12px;">
                    <h4 style="font-size: 14px; color: #3E3B39; margin-bottom: 8px;">${product.name}</h4>
                    <p style="color: var(--primary, #808000); font-weight: bold; margin-bottom: 16px;">${product.price.toLocaleString()}đ</p>
                    <button onclick="removeFromWishlist('${product.id}')" style="padding: 10px; width: 100%; border-radius: 8px; border: 1px solid #e5e7eb; background: #ffffff; cursor: pointer; font-size: 12px; font-weight: bold; transition: 0.2s;">Xóa khỏi danh sách</button>
                </div>
            `).join('');
        }
    }
});

// Hàm toàn cục (Global) để xử lý nút "Xóa" bên trong Wishlist
window.removeFromWishlist = function(productId) {
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    if (!user) return;

    const wishlistKey = `mocmien_wishlist_${user.email}`;
    let myWishlist = JSON.parse(localStorage.getItem(wishlistKey)) || [];
    
    // Lọc bỏ sản phẩm có ID trùng với ID bị xóa
    myWishlist = myWishlist.filter(item => item.id !== productId);
    
    // Lưu lại bộ nhớ và tải lại trang để cập nhật giao diện
    localStorage.setItem(wishlistKey, JSON.stringify(myWishlist));
    window.location.reload();
};