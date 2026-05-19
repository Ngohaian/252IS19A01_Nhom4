// File: assets/js/cart.js

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
        this.items = []; 
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
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    createItemRow(item) {
        const row = document.createElement('div');
        row.className = 'cart-item-row';
        row.dataset.id = item.product.id;

        row.innerHTML = `
        <div class="cart-item-container">
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
                    <input type="number" class="item-quantity-input" value="${item.quantity}" readonly>
                    <button class="qty-btn qty-increase">+</button>
                </div>
                <button class="remove-item-btn">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
        `;

        row.querySelector('.qty-decrease').addEventListener('click', () => {
            this.updateQuantity(item.product.id, item.quantity - 1);
            this.render();
        });
        row.querySelector('.qty-increase').addEventListener('click', () => {
            this.updateQuantity(item.product.id, item.quantity + 1);
            this.render();
        });
        row.querySelector('.remove-item-btn').addEventListener('click', () => {
            this.removeItem(item.product.id);
            this.render();
        });

        return row;
    }

    render() {
        const cartItemsList = document.getElementById('cart-items-list'); 
        const summaryContainer = document.getElementById('cart-summary'); 

        if (!cartItemsList || !summaryContainer) return; 

        cartItemsList.innerHTML = '';
        summaryContainer.innerHTML = '';

        if (this.items.length === 0) {
            cartItemsList.innerHTML = '<div class="empty-cart">Giỏ hàng của bạn đang trống rỗng.</div>';
        } else {
            this.items.forEach(item => {
                const cardElement = this.createItemRow(item); 
                cartItemsList.appendChild(cardElement);     
            });
        }

        const subtotal = this.totalAmount;
        summaryContainer.style.display = 'block';
        summaryContainer.innerHTML = `
            <div class="order-summary-box">
                <h2>TÓM TẮT ĐƠN</h2>
                <div class="summary-line">
                    <span class="summary-label">Tạm tính: </span>
                    <span class="summary-value">${subtotal.toLocaleString('vi-VN')}đ</span>
                </div>
                <div class="summary-line">
                    <span class="summary-label">Vận chuyển: </span>
                    <span class="summary-value shipping-free">MIỄN PHÍ</span>
                </div>
                <hr class="summary-hr">
                <div class="summary-line total-line">
                    <span class="summary-label total-price">TỔNG CỘNG: </span>
                    <span class="summary-value total-price">${subtotal.toLocaleString('vi-VN')}đ</span>
                </div>
                <button class="checkout-submit-btn">THANH TOÁN MỘC</button>
            </div>
        `;
    }
}