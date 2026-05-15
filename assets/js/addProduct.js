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

        ["images/kimtien.jpg", "images/kimtien2.jpg"],

        "Cây mang ý nghĩa tài lộc",
        "Cây Kim Tiền tượng trưng cho sự giàu có và thịnh vượng...",

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
        }
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

    "Cây trang trí phong cách tropical",

    "Monstera là loại cây nội thất nổi tiếng với lá xẻ độc đáo, phù hợp trang trí phòng khách và quán cafe.",

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
    }
));

manager.addProduct(new Product(
    3,
    "Cây Lưỡi Hổ",
    320000,
    "images/luoiho.jpg",
    "Phong thủy",
    "Cây thanh lọc không khí",
    12,
    false,

    [
        "images/luoiho.jpg",
        "images/luoiho2.jpg"
    ],

    "Mang ý nghĩa bảo vệ và may mắn",

    "Cây Lưỡi Hổ rất dễ chăm sóc, phù hợp đặt trong phòng ngủ hoặc văn phòng.",

    {
        height: "30-60cm",
        type: "Cây phong thủy",
        difficulty: "Dễ"
    },

    {
        light: "Ánh sáng nhẹ",
        water: "1 lần/tuần",
        soil: "Thoát nước tốt",
        note: "Không tưới quá nhiều"
    }
));

manager.addProduct(new Product(
    4,
    "Cây Trầu Bà",
    180000,
    "images/trauba.jpg",
    "Để bàn",
    "Cây dây leo dễ sống",
    15,
    false,

    [
        "images/trauba.jpg",
        "images/trauba2.jpg"
    ],

    "Trang trí bàn làm việc đẹp mắt",

    "Trầu Bà là cây nội thất phổ biến, giúp thanh lọc không khí và tạo cảm giác thư giãn.",

    {
        height: "20-40cm",
        type: "Cây để bàn",
        difficulty: "Dễ"
    },

    {
        light: "Ánh sáng nhẹ",
        water: "2 lần/tuần",
        soil: "Giữ ẩm tốt",
        note: "Có thể trồng thủy sinh"
    }
));

manager.addProduct(new Product(
    5,
    "Cây Xương Rồng",
    150000,
    "images/xuongrong.jpg",
    "Ngoài trời",
    "Cây chịu hạn tốt",
    20,
    false,

    [
        "images/xuongrong.jpg",
        "images/xuongrong2.jpg"
    ],

    "Cây mini decor cực đẹp",

    "Xương Rồng phù hợp cho người bận rộn vì cần rất ít nước và dễ chăm sóc.",

    {
        height: "10-25cm",
        type: "Cây mini",
        difficulty: "Rất dễ"
    },

    {
        light: "Nắng trực tiếp",
        water: "1 lần/2 tuần",
        soil: "Khô thoáng",
        note: "Không tưới quá nhiều"
    }
));

manager.addProduct(new Product(
    6,
    "Cây Phát Tài",
    550000,
    "images/phattai.jpg",
    "Phong thủy",
    "Mang ý nghĩa tài lộc",
    6,
    false,

    [
        "images/phattai.jpg",
        "images/phattai2.jpg"
    ],

    "Phù hợp khai trương, văn phòng",

    "Cây Phát Tài được nhiều người chọn làm quà tặng phong thủy trong kinh doanh.",

    {
        height: "60-120cm",
        type: "Cây phong thủy",
        difficulty: "Dễ"
    },

    {
        light: "Ánh sáng nhẹ",
        water: "1-2 lần/tuần",
        soil: "Đất dinh dưỡng",
        note: "Không để úng nước"
    }
));

    manager.saveToLocalStorage();
}

manager.renderProducts();

// FILTER EVENTS
document.getElementById("categoryFilter")
    ?.addEventListener("change", e => manager.filterByCategory(e.target.value));

document.getElementById("priceFilter")
    ?.addEventListener("change", e => manager.filterByPrice(e.target.value));

document.getElementById("sortPrice")
    ?.addEventListener("change", e => manager.sortByPrice(e.target.value));