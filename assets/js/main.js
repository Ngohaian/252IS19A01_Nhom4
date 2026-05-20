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
    const products = window.manager.products;
    fetch('/includes/header.html')
    .then(r => r.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
        myCart.updateCartBadge(); 
    });
    myCart.addItem(products[0], 2);
    myCart.addItem(products[1], 1);
    myCart.addItem(products[2], 3);
    myCart.addItem(products[0], 1);
    myCart.addItem(products[3], 1);
    myCart.addItem(products[4], 1);
    myCart.addItem(products[2], 1);
    myCart.addItem(products[5], 1);
    
    myCart.render();
    document.querySelector('.add-to-cart-btn').addEventListener('click', () => {
        myCart.addItem(product[0], 1);
        myCart.updateCartBadge();
        this.saveToLocalStorage();
    });
});