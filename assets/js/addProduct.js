//add product.js

const manager = new ProductManager();

manager.loadFromLocalStorage();

if (manager.products.length === 0) {

    manager.addProduct(new Product(

        1,

        "Cây Kim Tiền",

        450000,

        "images/kimtien.jpg",

        "Trong nhà",

        "Cây phong thủy dễ chăm sóc",

        8,

        false,

        [
            "images/kimtien.jpg",
            "images/kimtien2.jpg"
        ],

        "Cây mang ý nghĩa tài lộc",

        "Cây Kim Tiền tượng trưng cho sự giàu có và thịnh vượng.",

        {
            height: "40-80cm",
            type: "Cây nội thất",
            difficulty: "Dễ"
        },

        {
            light: "Ánh sáng nhẹ",
            water: "1 lần/tuần",
            soil: "Thoát nước tốt",
            note: "Không tưới quá nhiều"
        },

        4
    ));

    manager.addProduct(new Product(

        2,

        "Cây Monstera",

        700000,

        "images/monstera.jpg",

        "Trong nhà",

        "Cây lá xẻ hiện đại",

        5,

        false,

        [
            "images/monstera.jpg",
            "images/monstera2.jpg"
        ],

        "Cây tropical hiện đại",

        "Monstera nổi tiếng với phần lá xẻ độc đáo.",

        {
            height: "50-100cm",
            type: "Cây nội thất",
            difficulty: "Trung bình"
        },

        {
            light: "Ánh sáng gián tiếp",
            water: "2 lần/tuần",
            soil: "Đất tơi xốp",
            note: "Tránh nắng gắt"
        },

        5
    ));

    manager.addProduct(new Product(

        3,

        "Cây Lưỡi Hổ",

        320000,

        "images/luoiho.jpg",

        "Phong thủy",

        "Thanh lọc không khí",

        12,

        false,

        [
            "images/luoiho.jpg",
            "images/luoiho2.jpg"
        ],

        "Cây phong thủy dễ chăm",

        "Lưỡi Hổ phù hợp cho văn phòng và phòng ngủ.",

        {
            height: "30-60cm",
            type: "Cây phong thủy",
            difficulty: "Dễ"
        },

        {
            light: "Ánh sáng nhẹ",
            water: "1 lần/tuần",
            soil: "Thoát nước tốt",
            note: "Không tưới nhiều"
        },

        3
    ));

    manager.saveToLocalStorage();

}

manager.renderProducts();

document.getElementById("categoryFilter")
?.addEventListener("change", e => {

    manager.filterByCategory(e.target.value);

});

document.getElementById("priceFilter")
?.addEventListener("change", e => {

    manager.filterByPrice(e.target.value);

});

document.getElementById("sortPrice")
?.addEventListener("change", e => {

    manager.sortByPrice(e.target.value);

});
