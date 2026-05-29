
class order{
    constructor(orderId, customer, date,status,payment,note, items = []){
        this.orderId=orderId;
        this.customer=customer;
        this.date=date;
        this.status = status;
        this.payment = payment;
        this.note=note;
        this.items = items;
    }
    static generateOrderId() {
        const orders = order.loadFromStorage();

        if (orders.length === 0) return "INV001";
        const maxNum = orders.reduce((max, o) => {
            const match = o.orderId.match(/^INV(\d+)$/);
            if (!match) return max;
            return Math.max(max, parseInt(match[1]));
        }, 0);

        const next = String(maxNum + 1).padStart(3, "0");
        return `INV${next}`;
    }
    static getStatusByDate(orderDate) {
        const steps = ["Đã đặt hàng", "Đã đóng gói", "Đang giao hàng", "Đã nhận hàng"];
        const daysPassed = Math.floor((Date.now() - new Date(orderDate)) / (1000 * 60 * 60 * 24));
        const index = Math.min(Math.floor(daysPassed / 2), steps.length - 1);
        return steps[index];
    }
    addItem( product, quantity, price){
        this.items.push(new orderDetail(product, quantity, price));
    }
    saveToStorage(){
        let orders = [];
        try{
            const saved = localStorage.getItem("orders");
            if(saved){
                orders = JSON.parse(saved);
            }
        }catch{
            orders = [];
        }

        const index = orders.findIndex(o => o.orderId === this.orderId);
        if (index !== -1) {
            orders[index] = this;
        } else {
            orders.push(this);
        }

        localStorage.setItem("orders", JSON.stringify(orders));
    }
    static loadFromStorage(){
        try{
            const saved = localStorage.getItem("orders");
            if(!saved) return [];
            const data = JSON.parse(saved);
            return data.map(i => {
                const o = new order(
                    i.orderId,
                    i.customer,
                    i.date,
                    i.status,
                    i.payment,
                    i.note,
                    i.items
                );
                return o;
            });
        }catch{
            return [];
        }
    }
}
class orderDetail{
    constructor( product, quantity, price){
        this.product=product;
        this.quantity=quantity;
        this.price=price;
    }
    
}
class orderDetailUI{
    renderTimeline(status) {
        const steps = [
            { key: "Đã đặt hàng", icon: "shopping_bag" },
            { key: "Đã đóng gói", icon: "inventory_2" },
            { key: "Đang giao hàng", icon: "local_shipping" },
            { key: "Đã nhận hàng", icon: "home" }
        ];

        const currentIndex = steps.findIndex(s => s.key === status);

        const container = document.querySelector(".TrangThaiDonHangContent");
        if (!container) return;

        container.innerHTML = `
            <div class="timeline">
                ${steps.map((step, i) => {
                    const done = i < currentIndex;
                    const active = i === currentIndex;
                    return `
                        <div class="timeline-step ${done ? 'done' : ''} ${active ? 'active' : ''}">
                            <div class="timeline-icon">
                                <span class="material-symbols-outlined">${step.icon}</span>
                            </div>
                            <div class="timeline-label">${step.key}</div>
                        </div>
                        ${i < steps.length - 1 ? `<div class="timeline-line ${done || active ? 'filled' : ''}"></div>` : ''}
                    `;
                }).join('')}
            </div>
        `;
    }
    createOrderDetailRow(item){
        const row = document.createElement('div');
        row.className = 'orderDetailRow';

        row.innerHTML = `
         <div class="orderDetailContainer">
            <div class="item-visuals">
                <img src="${item.product.image}" alt="${item.product.name}" class="orderDetailImg">
                <div class="item-info">
                    <span class="item-name">${item.product.name}</span>
                    <span class="item-category">${item.product.category}</span>
                    <span class="item-quantity">${item.quantity}</span>
                </div>
                <div class="item-price">
                    <span class="item-price">${item.price.toLocaleString('vi-VN')}đ</span>
                </div>
            </div>
        </div>
        `;
        return row;
    }
    renderTongQuan(Order){
        const TongQuanSP = document.querySelector(".TongQuanContent");
        if(!TongQuanSP) return;
        
        const tongTien = Order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const tongThanhToan = tongTien;
        TongQuanSP.innerHTML=`
            <div class="tq-row">
                <span>Tổng tiền hàng</span>
                <span>${tongTien.toLocaleString('vi-VN')}đ</span>
            </div>
            <div class="tq-row">
                <span>Phí vận chuyển</span>
                <span style="color: var(--green-btn); font-weight: 600;">MIỄN PHÍ</span>
            </div>
            <div class="tq-divider"></div>
            <div class="tq-row tq-total">
                <span>Tổng thanh toán</span>
                <span>${tongThanhToan.toLocaleString('vi-VN')}đ</span>
            </div>
        `;
    }
    renderTTGiaoHang(Order) {
        const TTNguoiNhan = document.querySelector(".TTNguoiNhanContent");
        if (!TTNguoiNhan) return;

        TTNguoiNhan.innerHTML = `
            <div class="gh-section">
                <span class="gh-label">NGƯỜI NHẬN</span>
                <span class="gh-name">${Order.customer.name}</span>
                <span class="gh-phone">
                    <span class="material-symbols-outlined" style="font-size:16px;">call</span>
                    ${Order.customer.phone}
                </span>
            </div>
            <div class="gh-divider"></div>
            <div class="gh-section">
                <span class="gh-label">ĐỊA CHỈ</span>
                <span class="gh-value">
                    <span class="material-symbols-outlined" style="font-size:16px;">location_on</span>
                    ${Order.customer.address}
                </span>
            </div>
            ${Order.note ? `
            <div class="gh-divider"></div>
            <div class="gh-section">
                <span class="gh-label">GHI CHÚ CHO SHIPPER</span>
                <span class="gh-note">"${Order.note}"</span>
            </div>` : ''}
        `;
    }
    renderThanhToan(Order) {
        const TTThanhToan = document.querySelector(".TTThanhToanContent");
        if (!TTThanhToan) return;

        const isBanking = Order.payment === "transfer";
        TTThanhToan.innerHTML = `
            <div class="tt-method">
                <div class="tt-icon ${isBanking ? 'banking' : 'cod'}">
                    <span class="material-symbols-outlined">
                        ${isBanking ? 'account_balance' : 'payments'}
                    </span>
                </div>
                <div class="tt-info">
                    <span class="tt-name">${isBanking ? 'Chuyển khoản' : 'Thanh toán khi nhận hàng (COD)'}</span>
                    <span class="tt-status">✓ Đã thanh toán</span>
                </div>
            </div>
        `;
    }
    render(Order){
        const TTDon = document.getElementById("TTDon");
        const date = new Date(Order.date);
        Order.status = order.getStatusByDate(Order.date);
        Order.saveToStorage();
        TTDon.innerHTML =`
            <div class="TTChung">
                <div id="orderId">Đơn hàng ${Order.orderId}</div>
                <div id="ngayorder">Ngày đặt: ${date.getDate()} tháng ${date.getMonth()+1}, ${date.getFullYear()}</div>
            </div>
            <a class="btnTTDonHang" style="text-decoration: none">${Order.status}</a>
        `;
        this.renderTimeline(Order.status);
        const TTSanPham = document.querySelector(".TTSanPhamContent");
        TTSanPham.innerHTML ='';
        Order.items.forEach(item => {
            TTSanPham.appendChild(this.createOrderDetailRow(item));
        });
        this.renderTongQuan(Order);
        this.renderTTGiaoHang(Order);
        this.renderThanhToan(Order);
    }
}
window.Order = order;
window.OrderDetail = orderDetail;
window.OrderDetailUI = orderDetailUI;
document.addEventListener("DOMContentLoaded", () => {
    if (!window.location.pathname.includes("OrderDetail")) return; 

    const params = new URLSearchParams(window.location.search);
    const orderId = params.get("id");

    if (!orderId) return;

    const allOrders = Order.loadFromStorage();
    const found = allOrders.find(o => o.orderId === orderId);

    if (!found) return;

    const ui = new OrderDetailUI();
    ui.render(found);
});