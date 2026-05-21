window.addEventListener('DOMContentLoaded', () => {
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

    renderOrderAndCalculateTotal();
});

function renderOrderAndCalculateTotal() {
    const orderItems = JSON.parse(localStorage.getItem('orderItems')) || [];
    const orderItemsContainer = document.getElementById('render-order-items');
    const orderTotalContainer = document.getElementById('render-order-total');

    orderItemsContainer.innerHTML = '';
    let totalAmount = 0;

    if (orderItems.length === 0) {
        orderItemsContainer.innerHTML = '<p>Giỏ hàng trống rỗng 🌱</p>';
        orderTotalContainer.innerHTML = '<div class="total-row"><span>Tổng cộng:</span><span>0đ</span></div>';
        return;
    }

    orderItems.forEach(item => {
        const itemTotal = item.product.price * item.quantity;
        totalAmount += itemTotal;
        const itemRow = document.createElement('div');
        itemRow.className = 'order-item-row';
        itemRow.innerHTML = `
            <div class="order-item-img-wrap">
                <img src="${item.product.image}" alt="${item.product.name}" class="order-item-img">
            </div>
            <div class="order-item-info">
                <span class="order-item-name">${item.product.name}</span>
                <span class="order-item-qty">x${item.quantity}</span>
            </div>
            <span class="order-item-price">${itemTotal.toLocaleString('vi-VN')}đ</span>
        `;
        orderItemsContainer.appendChild(itemRow);
    });

    orderTotalContainer.innerHTML = `
        <hr class="order-divider">
        <div class="total-row">
            <span class="total-label">Tổng cộng</span>
            <span class="total-value">${totalAmount.toLocaleString('vi-VN')}đ</span>
        </div>
    `;
}



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
    if (isNaN(phone) && phone.length!=10 ) {
        alert("Số điện thoại không hợp lệ");
        return;
    }
    if (paymentMethod === 'transfer') {
        alert('Mộc Miên đã ghi nhận đơn hàng Chuyển Khoản của bạn. Vui lòng thanh toán theo thông tin trên màn hình để mầm sớm được đi đường nhé! 🌱');
    } else {
        alert('Đặt mầm thành công! Cảm ơn bạn đã tin tưởng Mộc Miên 🌱. Đơn hàng sẽ được thanh toán khi giao (COD).');
    }

    localStorage.removeItem('orderItems');
}