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
    manager.addProduct(new Product(
    4,
    "Cây Bàng Singapore",
    1200000,
    "images/bangsingapore.jpg",
    "Trong nhà",
    "Cây nội thất sang trọng",
    4,
    false,
    [
        "images/bangsingapore.jpg",
        "images/bangsingapore2.jpg"
    ],
    "Cây trang trí cao cấp",
    "Bàng Singapore mang lại vẻ hiện đại và sang trọng cho không gian.",
    {
        height: "100-200cm",
        type: "Cây nội thất",
        difficulty: "Trung bình"
    },
    {
        light: "Ánh sáng mạnh gián tiếp",
        water: "1 lần/tuần",
        soil: "Thoát nước tốt",
        note: "Lau lá thường xuyên"
    },
    4
));

manager.addProduct(new Product(
    5,
    "Cây Trầu Bà",
    180000,
    "images/trauba.jpg",
    "Trong nhà",
    "Cây leo dễ sống",
    15,
    false,
    [
        "images/trauba.jpg",
        "images/trauba2.jpg"
    ],
    "Cây lọc không khí tốt",
    "Trầu Bà rất dễ chăm sóc và phát triển nhanh.",
    {
        height: "20-100cm",
        type: "Cây leo",
        difficulty: "Dễ"
    },
    {
        light: "Ánh sáng yếu đến trung bình",
        water: "2 lần/tuần",
        soil: "Đất ẩm",
        note: "Có thể trồng thủy sinh"
    },
    5
));

manager.addProduct(new Product(
    6,
    "Cây Cau Tiểu Trâm",
    250000,
    "images/cautieutram.jpg",
    "Văn phòng",
    "Cây mini để bàn",
    20,
    false,
    [
        "images/cautieutram.jpg",
        "images/cautieutram2.jpg"
    ],
    "Cây trang trí bàn làm việc",
    "Cau Tiểu Trâm giúp thanh lọc không khí và giảm stress.",
    {
        height: "20-50cm",
        type: "Cây văn phòng",
        difficulty: "Dễ"
    },
    {
        light: "Ánh sáng nhẹ",
        water: "2–3 lần/tuần",
        soil: "Đất ẩm vừa",
        note: "Phù hợp bàn làm việc"
    },
    5
));

manager.addProduct(new Product(
    7,
    "Cây Xương Rồng",
    90000,
    "images/xuongrong.jpg",
    "Phong thủy",
    "Cây chịu hạn tốt",
    30,
    false,
    [
        "images/xuongrong.jpg",
        "images/xuongrong2.jpg"
    ],
    "Cây dễ sống nhất",
    "Xương Rồng không cần chăm sóc nhiều, phù hợp người bận rộn.",
    {
        height: "10-40cm",
        type: "Cây sa mạc",
        difficulty: "Rất dễ"
    },
    {
        light: "Ánh sáng mạnh",
        water: "1–2 lần/tháng",
        soil: "Cát + thoát nước tốt",
        note: "Không tưới nhiều"
    },
    4
));

manager.addProduct(new Product(
    8,
    "Cây Phát Tài",
    500000,
    "images/phattai.jpg",
    "Phong thủy",
    "Cây mang may mắn",
    10,
    false,
    [
        "images/phattai.jpg",
        "images/phattai2.jpg"
    ],
    "Cây tài lộc",
    "Phát Tài được xem là cây mang lại may mắn và tiền tài.",
    {
        height: "60-150cm",
        type: "Cây nội thất",
        difficulty: "Dễ"
    },
    {
        light: "Ánh sáng gián tiếp",
        water: "1–2 lần/tuần",
        soil: "Đất giàu dinh dưỡng",
        note: "Tránh úng nước"
    },
    5
));

manager.addProduct(new Product(
    9,
    "Cây Sen Đá",
    120000,
    "images/senda.jpg",
    "Trang trí",
    "Cây mini dễ thương",
    25,
    false,
    [
        "images/senda.jpg",
        "images/senda2.jpg"
    ],
    "Cây nhỏ để bàn",
    "Sen Đá tượng trưng cho tình yêu bền vững.",
    {
        height: "5-15cm",
        type: "Cây mọng nước",
        difficulty: "Rất dễ"
    },
    {
        light: "Ánh sáng mạnh",
        water: "1 lần/tuần",
        soil: "Đất khô thoát nước tốt",
        note: "Không tưới nhiều"
    },
    5
));

    manager.saveToLocalStorage();

}



const pagination = new Pagination(manager, 9);
window.manager = manager;

// ================= FILTER EVENTS =================
document.getElementById("categoryFilter")?.addEventListener("change", e => {
    manager.setCategory(e.target.value);
    pagination.currentPage = 1;
    pagination.update();
});

document.getElementById("priceFilter")?.addEventListener("change", e => {
    manager.setPrice(e.target.value);
    pagination.currentPage = 1;
    pagination.update();
});

document.getElementById("sortPrice")?.addEventListener("change", e => {
    manager.setSort(e.target.value);
    pagination.currentPage = 1;
    pagination.update();
});

// ================= FIRST RENDER =================
pagination.update();

