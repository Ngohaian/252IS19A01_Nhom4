import { Cart } from './cart.js';

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

document.addEventListener("DOMContentLoaded", async () => {
    await loadComponent('header-placeholder', '/includes/header.html');
    await loadComponent('footer-placeholder', '/includes/footer.html');

    const myCart = new Cart();

    const products = window.manager?.products;
    if (products && products.length > 0) {
        myCart.addItem(products[0], 2);
        myCart.addItem(products[1], 1); 
    }
    myCart.updateCartBadge();
    const savedCount = parseInt(localStorage.getItem('cartCount') || '0');
    const badge = document.getElementById('cart-badge-bg');
    const text = document.getElementById('cart-badge-text');
    if (badge && text && savedCount > 0) {
        badge.style.display = 'flex';
        text.textContent = savedCount > 99 ? '99+' : savedCount;
    }
    
});