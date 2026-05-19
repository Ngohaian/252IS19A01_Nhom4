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
 const myCart = new Cart();

// 2. Thêm vài sản phẩm mẫu để test thử
myCart.addItem({ id: 1, name: "Cây sen đá mầm", price: 45000 , imageUrl: "../../assets/images/image.png"}, 3);
myCart.addItem({ id: 2, name: "Chậu đất nung size M", price: 15000 ,imageUrl: "../../assets/images/image.png"}, 2);

// 3. Ra lệnh cho giỏ hàng tự vẽ lên HTML
myCart.render();