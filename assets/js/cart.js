export class CartItem {
    constructor(product, quantity) {
        this.product = product;   
        this.quantity = quantity; 
    }
    get subTotal() {
        return this.product.price * this.quantity;
    }
}

export class Cart {
    constructor() {
        this.items = this.loadFromStorage();
    }

    saveToStorage() {
        localStorage.setItem('cartItems', JSON.stringify(
            this.items.map(item => ({
                product: item.product,
                quantity: item.quantity
            }))
        ));
        localStorage.setItem('cartCount', this.items.length);
    }

    loadFromStorage() {
        try {
            const saved = localStorage.getItem('cartItems');
            if (!saved) return [];
            return JSON.parse(saved).map(i => new CartItem(i.product, i.quantity));
        } catch {
            return [];
        }
    }
    get totalAmount() {
        return this.items.reduce((total, item) => total + item.subTotal, 0);
    }

    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new CartItem(product, quantity));
        }
        this.saveToStorage();
        this.updateCartBadge(); 
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.product.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = quantity;
            }
        }
        this.saveToStorage();
        this.updateCartBadge();
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
        this.saveToStorage();
        this.updateCartBadge();
    }
    getSelectedItems() {
        return this.items.filter(item => item.selected !== false);
    }

    get selectedTotal() {
        return this.getSelectedItems().reduce((total, item) => total + item.subTotal, 0);
    }
    updateSummary() {
        const summaryContainer = document.getElementById('cart-summary');
        if (!summaryContainer) return;

        const subtotal = this.selectedTotal;

        const valueEls = summaryContainer.querySelectorAll('.summary-value');
        if (valueEls.length > 0) {
            valueEls[0].textContent = subtotal.toLocaleString('vi-VN') + 'đ'; // tạm tính
        }

        const totalEls = summaryContainer.querySelectorAll('.total-price.summary-value');
        if (totalEls.length > 0) {
            totalEls[0].textContent = subtotal.toLocaleString('vi-VN') + 'đ'; // tổng cộng
        }
    }
    createItemRow(item) {
        const row = document.createElement('div');
        row.className = 'cart-item-row';
        row.dataset.id = item.product.id;

        row.innerHTML = `
        <div class="cart-item-container">
            <input type="checkbox" class="item-checkbox" checked>
            <div class="item-visuals">
                <img src="${item.product.image}" alt="${item.product.name}" class="item-cart-image">
                <div class="item-info">
                    <span class="item-category">${item.product.category}</span>
                    <span class="item-name">${item.product.name}</span>
                    <span class="item-price">${item.product.price.toLocaleString('vi-VN')}đ</span>
                </div>
            </div>
            <div class="item-actions">
                <div class="quantity-controls">
                    <button class="qty-btn qty-decrease">-</button>
                    <input type="number"  class="item-quantity-input" value="${item.quantity}" >
                    <button class="qty-btn qty-increase">+</button>
                </div>
                <button class="remove-item-btn">
                    <img src="/assets/images/icon/delete_gray.png" alt ="delete_icon" class="remove-item-icon">
                </button>
            </div>
        </div>
        `;

        row.querySelector('.qty-decrease').addEventListener('click', () => {
            this.updateQuantity(item.product.id, item.quantity - 1);
            this.render();
        });
        row.querySelector('.qty-increase').addEventListener('click', () => {
            if(item.quantity >= item.product.stock){return;}
            this.updateQuantity(item.product.id, item.quantity + 1);
            this.render();
        });
        row.querySelector('.remove-item-btn').addEventListener('click', () => {
            this.removeItem(item.product.id);
            this.render();
        });
        row.querySelector('.item-quantity-input').addEventListener('change', (e) => {
            const newQty = parseInt(e.target.value);
            if (isNaN(newQty) || newQty < 1) {
                e.target.value = item.quantity; 
                return;
            }
            if(newQty > item.product.stock){
                e.target.value = item.quantity; 
                return;
            }
            this.updateQuantity(item.product.id, newQty);
            this.render();
        });
        row.querySelector('.item-checkbox').addEventListener('change', (e) => {
            item.selected = e.target.checked;
            this.updateSummary();
        });
        return row;
    }
    validateStock() {
        this.items.forEach(item => {
            if(item.product.stock == 0){
                this.removeItem(item.productId);
            }
            if (item.quantity > item.product.stock) {
                item.quantity = item.product.stock; 
            }
        });
        this.saveToStorage();
    }
    render() {
        this.validateStock();
        const cartItemsList = document.getElementById('cart-items-list'); 
        const summaryContainer = document.getElementById('cart-summary'); 

        if (!cartItemsList || !summaryContainer) return; 

        cartItemsList.innerHTML = '';
        summaryContainer.innerHTML = '';

        if (this.items.length === 0) {
            cartItemsList.innerHTML = `
            <div class="empty-cart-wrapper">
                <svg width="90" height="80" viewBox="0 0 90 80" fill="none" >
                    <path d="M5 5H18L28 54H68L78 18H22" stroke="#c9bba0" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="36" cy="68" r="6" fill="#c9bba0"/>
                    <circle cx="62" cy="68" r="6" fill="#c9bba0"/>
                </svg>
                <p class="empty-cart-text">GIỎ HÀNG ĐANG TRỐNG...</p>
                <a href="/shop" class="find-plant-btn">TÌM CÂY MỚI</a>
            </div>`;
            summaryContainer.style.display = 'none';
            return;
        }
        this.items.forEach(item => {
            cartItemsList.appendChild(this.createItemRow(item));
        });
        const subtotal = this.selectedTotal;
        summaryContainer.style.display = 'block';
        summaryContainer.innerHTML = `
            <div class="order-summary-box">
                <h2>TÓM TẮT ĐƠN</h2>
                <div class="summary-line">
                    <span class="summary-label">Tạm tính </span>
                    <span class="summary-value">${subtotal.toLocaleString('vi-VN')}đ</span>
                </div>
                <div class="summary-line">
                    <span class="summary-label">Vận chuyển </span>
                    <span class="summary-value shipping-free">MIỄN PHÍ</span>
                </div>
                <hr class="summary-hr">
                <div class="summary-line total-line">
                    <span class="summary-label total-price">TỔNG CỘNG </span>
                    <span class="summary-value total-price">${subtotal.toLocaleString('vi-VN')}đ</span>
                </div>
                <a class="checkout-submit-btn" href="/pages/checkout/Payment.html">THANH TOÁN MỘC</a>
            </div>
        `;
        summaryContainer.querySelector(".checkout-submit-btn").addEventListener('click', ()=>{
            let orderItems = this.getSelectedItems();
            if (orderItems.length === 0) {
                e.preventDefault();
                alert('Vui lòng chọn ít nhất 1 sản phẩm!');
                return;
            }
            localStorage.setItem("orderItems", JSON.stringify(
                orderItems.map(item => ({
                product: item.product,
                quantity: item.quantity
            }))
        ));
        });
    }
    updateCartBadge() {
        const total = this.items.length; 
        localStorage.setItem('cartCount', total);

        const badge = document.getElementById('cart-badge-bg');
        const text = document.getElementById('cart-badge-text');
        if (!badge || !text) return;

        if (total > 0) {
            badge.style.display = 'flex';
            text.textContent = total > 99 ? '99+' : total;
        } else {
            badge.style.display = 'none';
        }
    }
}
