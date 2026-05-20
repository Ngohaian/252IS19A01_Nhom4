const paymentOptions = document.querySelectorAll('input[name="payment"]');
const transferDetails = document.getElementById('transfer-details');
paymentOptions.forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'transfer') {
            transferDetails.classList.add('active');
        } else {
            transferDetails.classList.remove('active');
        }
    });
});

const phoneInput = document.querySelector('input[placeholder="Số điện thoại"]');
phoneInput.addEventListener('input', (e) => {
    const phone = e.target.value.trim() || '[Số điện thoại]';
    document.getElementById('transfer-content').innerText = `MOCMIEN ${phone}`;
});


function renderOrderAndCalculateTotal() {
    const cart = JSON.parse(localStorage.getItem('cart'));

    const orderItemsContainer = document.getElementById('render-order-items');
    const orderTotalContainer = document.getElementById('render-order-total');

    // Xóa sạch dữ liệu cũ trước khi render
    orderItemsContainer.innerHTML = '';
    let totalAmount = 0;

    if (cart.length === 0) {
        orderItemsContainer.innerHTML = '<p>Giỏ hàng trống rỗng 🌱</p>';
        orderTotalContainer.innerHTML = '<div class="total-row"><span>Tổng cộng:</span><span>0đ</span></div>';
        return;
    }

    // Duyệt qua từng sản phẩm để tính tổng và tạo HTML
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;

        // Tạo dòng thông tin sản phẩm
        const itemRow = document.createElement('div');
        itemRow.className = 'order-item-row';
        itemRow.innerHTML = `
            <span>${item.name} <strong>x${item.quantity}</strong></span>
            <span>${itemTotal.toLocaleString('vi-VN')}đ</span>
        `;
        orderItemsContainer.appendChild(itemRow);
    });

    // Hiển thị tổng tiền sau khi tính xong
    orderTotalContainer.innerHTML = `
        <div class="total-row">
            <span>Tổng cộng:</span>
            <span>${totalAmount.toLocaleString('vi-VN')}đ</span>
        </div>
    `;
}

// Chạy hàm tính tiền ngay khi trang load xong
window.addEventListener('DOMContentLoaded', renderOrderAndCalculateTotal);


// --- 3. XỬ LÝ HOÀN TẤT ĐẶT MẦM ---
function handleCheckout() {
    const name  = document.querySelector('input[placeholder="Họ và tên"]').value.trim();
    const phone = document.querySelector('input[placeholder="Số điện thoại"]').value.trim();
    const email = document.querySelector('input[placeholder="Email nhận thông báo"]').value.trim();
    const addr  = document.querySelector('input[placeholder="Địa chỉ chi tiết (Số nhà, đường...)"]').value.trim();
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;

    if (!name || !phone || !addr) {
        alert('Vui lòng điền đầy đủ họ tên, số điện thoại và địa chỉ nhận mầm nhé.');
        return;
    }

    if (paymentMethod === 'transfer') {
        alert('Mộc Miên đã ghi nhận đơn hàng Chuyển Khoản của bạn. Vui lòng thanh toán theo thông tin trên màn hình để mầm sớm được đi đường nhé! 🌱');
    } else {
        alert('Đặt mầm thành công! Cảm ơn bạn đã tin tưởng Mộc Miên 🌱. Đơn hàng sẽ được thanh toán khi giao (COD).');
    }
    
    // Xóa giỏ hàng sau khi đặt thành công (tùy chọn)
    // localStorage.removeItem('cart');
}