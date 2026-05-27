
const statusClass = {
    "Đã đặt hàng":  "status-placed",
    "Đã đóng gói":  "status-placed",
    "Đang giao hàng": "status-shipping",
    "Đã nhận hàng": "status-done",
    "Đã hủy":       "status-cancel"
};
function createOrderCard(o) {
    const total = o.items.reduce((s, i) => s + i.price * i.quantity, 0);
    const d = new Date(o.date);
    const dateStr = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

    const itemsHTML = o.items.slice(0, 2).map(item => `
        <div class="order-item-row">
            <img src="${item.product.image}" alt="${item.product.name}" class="order-item-img"
                 onerror="this.style.display='none'">
            <div class="order-item-name">
                ${item.product.name}
                <span class="order-item-qty">x${item.quantity}</span>
            </div>
            <div class="order-item-price">
                ${(item.price * item.quantity).toLocaleString('vi-VN')}đ
            </div>
        </div>
    `).join('');

    const moreHTML = o.items.length > 2
        ? `<div class="order-more">+${o.items.length - 2} sản phẩm khác</div>`
        : '';

    const card = document.createElement('div');
    card.className = 'order-card';
    card.innerHTML = `
        <div class="order-card-header">
            <div>
                <div class="order-id">Hóa đơn ${o.orderId}</div>
                <div class="order-date">Ngày lập: ${dateStr}</div>
            </div>
            <span class="order-status ${statusClass[o.status] || ''}">
                ${o.status}
            </span>
        </div>
        <hr class="inline-order">
        <div class="order-items">${itemsHTML}${moreHTML}</div>
        <hr class="inline-order">
        <div class="order-card-footer">
            <div class="order-total">
                Tổng: <span>${total.toLocaleString('vi-VN')}đ</span>
            </div>
            <a href="pages/account/OrderDetail.html?id=${o.orderId}"
               class="btn-detail">Xem chi tiết</a>
        </div>
    `;
    return card;
}

function renderOrders(filter = 'all') {
    const body = document.getElementById('order-history-body');
    if (!body) return;

    const allOrders = order.loadFromStorage();
    const filtered = filter === 'all'
        ? allOrders
        : allOrders.filter(o => o.status === filter);

    body.innerHTML = '';

    if (!filtered.length) {
        body.innerHTML = `
            <div class="order-empty">
                <span>Không có đơn hàng nào</span>
            </div>`;
        return;
    }

    
    filtered
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .forEach(o => body.appendChild(createOrderCard(o)));
}

document.querySelectorAll('.tab-item').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab-item')
            .forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderOrders(tab.dataset.status);
    });
});

renderOrders();