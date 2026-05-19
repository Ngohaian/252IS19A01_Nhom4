import { Cart } from './cart.js';
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = data;
            }
        })
        .catch(error => console.error('Lỗi khi tải file:', file, error));
}
document.addEventListener("DOMContentLoaded", () => {
    const myCart = new Cart();
    const products = window.manager.products;
    
    myCart.addItem(products[0], 2);
    myCart.addItem(products[1], 1);
    myCart.addItem(products[2], 3);
    myCart.addItem(products[0], 1);

    myCart.render();
});