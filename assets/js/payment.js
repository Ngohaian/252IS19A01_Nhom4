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

    const phoneInput = document.querySelector('#sdtdathang');
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
        orderTotalContainer.innerHTML = `
            <div class="shipping-row"><span>Phí vận chuyển:</span><span>Miễn phí</span></div>
            <div class="total-row"><span>Tổng cộng:</span><span>0đ</span></div>
        `;
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
    let shipping = 20000;
        if(totalAmount>=300000) shipping = 0;
        totalAmount +=  shipping;
    orderTotalContainer.innerHTML = `
        <hr class="order-divider">
        <div class="shipping-row">
            <span class="shipping-label">Phí vận chuyển</span>
            <span class="shipping-value">${shipping === 0 ? 'MIỄN PHÍ': shipping.toLocaleString('vi-VN')}đ</span>
        </div>
        <div class="total-row">
            <span class="total-label">Tổng cộng</span>
            <span class="total-value">${totalAmount.toLocaleString('vi-VN')}đ</span>
        </div>
    `;
}

function loadThongTin(){
    const name = document.getElementById('tendathang');
    const phone = document.getElementById('sdtdathang');
    const email = document.getElementById('emaildathang');
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    name.value = user.name;   
    phone.value = user.phone;
    email.value = user.email;
    document.getElementById('transfer-content').innerHTML = `MOCMIEN ${phone.value}`;
}

function datHang() {
    const name = document.getElementById('tendathang').value.trim();
    const phone = document.getElementById('sdtdathang').value.trim();
    const email = document.getElementById('emaildathang').value.trim();
    const addr = document.getElementById('diachidathang').value.trim();
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    const note = document.getElementById('notedathang').value.trim();
    const orderItems = JSON.parse(localStorage.getItem('orderItems')) || [];
    const order1= new order(
        order.generateOrderId(),  
        {
            name: name,
            phone: phone,
            email: email,
            address: addr,
        },
        Date.now(),
        "Đã đặt hàng",
        paymentMethod,
        note
     );
    orderItems.forEach(item =>{
        order1.addItem(item.product, item.quantity, item.product.price);
     })
    order1.saveToStorage();
     if (paymentMethod === 'transfer') {
        alert('Mộc Miên đã ghi nhận đơn hàng Chuyển Khoản của bạn. Vui lòng thanh toán theo thông tin trên màn hình để mầm sớm được đi đường nhé! 🌱');
    } else {
        alert('Đặt mầm thành công! Cảm ơn bạn đã tin tưởng Mộc Miên 🌱. Đơn hàng sẽ được thanh toán khi giao (COD).');
    }

    orderItems.forEach(item => {
        window.cart.removeItem(item.product.id);
    });

    localStorage.removeItem('orderItems');
    window.location.href = 'index.html';
}
