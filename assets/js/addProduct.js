//add product.js

const manager = new ProductManager();

manager.loadFromLocalStorage();


const productsData = [
    new Product(

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
    ),

    new Product(

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
    ),

    new Product(

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
    ),
    new Product(
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
),

new Product(
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
),
new Product(
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
),

new Product(
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
),

new Product(
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
),

new Product(
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
),
new Product(
    10,
    "Cây Ngọc Ngân",
    350000,
    "images/ngocngan.jpg",
    "Trong nhà",
    "Cây phong thủy đẹp mắt",
    9,
    false,
    [
        "images/ngocngan.jpg",
        "images/ngocngan2.jpg"
    ],
    "Cây mang ý nghĩa may mắn",
    "Ngọc Ngân nổi bật với lá xanh trắng độc đáo.",
    {
        height: "30-70cm",
        type: "Cây nội thất",
        difficulty: "Dễ"
    },
    {
        light: "Ánh sáng nhẹ",
        water: "2 lần/tuần",
        soil: "Đất tơi xốp",
        note: "Tránh nắng gắt"
    },
    4
),

new Product(
    11,
    "Cây Hạnh Phúc",
    850000,
    "images/hanhphuc.jpg",
    "Trong nhà",
    "Cây tượng trưng hạnh phúc",
    6,
    false,
    [
        "images/hanhphuc.jpg",
        "images/hanhphuc2.jpg"
    ],
    "Cây trang trí sang trọng",
    "Cây Hạnh Phúc phù hợp phòng khách và văn phòng.",
    {
        height: "80-150cm",
        type: "Cây nội thất",
        difficulty: "Trung bình"
    },
    {
        light: "Ánh sáng gián tiếp",
        water: "1 lần/tuần",
        soil: "Đất thoát nước tốt",
        note: "Giữ độ ẩm vừa phải"
    },
    5
),

new Product(
    12,
    "Cây Trúc Nhật",
    280000,
    "images/trucnhat.jpg",
    "Phong thủy",
    "Cây thanh lọc không khí",
    11,
    false,
    [
        "images/trucnhat.jpg",
        "images/trucnhat2.jpg"
    ],
    "Cây phong thủy văn phòng",
    "Trúc Nhật mang vẻ đẹp thanh lịch và nhẹ nhàng.",
    {
        height: "40-100cm",
        type: "Cây phong thủy",
        difficulty: "Dễ"
    },
    {
        light: "Ánh sáng nhẹ",
        water: "2 lần/tuần",
        soil: "Đất giữ ẩm tốt",
        note: "Không để đất quá khô"
    },
    4
),

new Product(
    13,
    "Cây Thiết Mộc Lan",
    650000,
    "images/thietmoclan.jpg",
    "Phong thủy",
    "Cây mang tài lộc",
    7,
    false,
    [
        "images/thietmoclan.jpg",
        "images/thietmoclan2.jpg"
    ],
    "Cây phong thủy phổ biến",
    "Thiết Mộc Lan thường được đặt ở văn phòng và cửa hàng.",
    {
        height: "80-180cm",
        type: "Cây nội thất",
        difficulty: "Dễ"
    },
    {
        light: "Ánh sáng gián tiếp",
        water: "1 lần/tuần",
        soil: "Thoát nước tốt",
        note: "Không tưới quá nhiều"
    },
    5
),

new Product(
    14,
    "Cây Lan Ý",
    300000,
    "images/lany.jpg",
    "Trong nhà",
    "Cây lọc không khí tốt",
    13,
    false,
    [
        "images/lany.jpg",
        "images/lany2.jpg"
    ],
    "Cây nội thất thanh lịch",
    "Lan Ý có hoa trắng đẹp và dễ chăm sóc.",
    {
        height: "30-60cm",
        type: "Cây nội thất",
        difficulty: "Dễ"
    },
    {
        light: "Ánh sáng nhẹ",
        water: "2–3 lần/tuần",
        soil: "Đất ẩm",
        note: "Giữ đất luôn hơi ẩm"
    },
    5
),

new Product(
    15,
    "Cây Đa Búp Đỏ",
    950000,
    "images/dabupdo.jpg",
    "Trong nhà",
    "Cây nội thất cao cấp",
    5,
    false,
    [
        "images/dabupdo.jpg",
        "images/dabupdo2.jpg"
    ],
    "Cây tạo điểm nhấn không gian",
    "Đa Búp Đỏ có lá lớn và màu sắc sang trọng.",
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
),

new Product(
    16,
    "Cây Cẩm Nhung",
    150000,
    "images/camnhung.jpg",
    "Trang trí",
    "Cây mini nhiều màu sắc",
    18,
    false,
    [
        "images/camnhung.jpg",
        "images/camnhung2.jpg"
    ],
    "Cây để bàn dễ thương",
    "Cẩm Nhung phù hợp trang trí góc học tập và làm việc.",
    {
        height: "10-20cm",
        type: "Cây mini",
        difficulty: "Dễ"
    },
    {
        light: "Ánh sáng nhẹ",
        water: "3 lần/tuần",
        soil: "Đất giữ ẩm",
        note: "Không để thiếu nước"
    },
    5
),

new Product(
    17,
    "Cây Vạn Niên Thanh",
    420000,
    "images/vannienthanh.jpg",
    "Phong thủy",
    "Cây tượng trưng trường thọ",
    9,
    false,
    [
        "images/vannienthanh.jpg",
        "images/vannienthanh2.jpg"
    ],
    "Cây phong thủy đẹp",
    "Vạn Niên Thanh giúp không gian xanh mát hơn.",
    {
        height: "40-90cm",
        type: "Cây nội thất",
        difficulty: "Dễ"
    },
    {
        light: "Ánh sáng nhẹ",
        water: "2 lần/tuần",
        soil: "Đất ẩm vừa",
        note: "Tránh ánh nắng trực tiếp"
    },
    4
),

new Product(
    18,
    "Cây Chuối Cảnh",
    1400000,
    "images/chuoicanh.jpg",
    "Trong nhà",
    "Cây tropical nổi bật",
    3,
    false,
    [
        "images/chuoicanh.jpg",
        "images/chuoicanh2.jpg"
    ],
    "Cây tạo cảm giác nhiệt đới",
    "Chuối Cảnh phù hợp không gian rộng và hiện đại.",
    {
        height: "150-250cm",
        type: "Cây tropical",
        difficulty: "Trung bình"
    },
    {
        light: "Ánh sáng mạnh",
        water: "2–3 lần/tuần",
        soil: "Đất giàu dinh dưỡng",
        note: "Cần không gian rộng"
    },
    5
),
new Product(
    19,
    "Cây Dương Xỉ",
    220000,
    "images/duongxi.jpg",
    "Trong nhà",
    "Cây xanh mát tự nhiên",
    14,
    false,
    [
        "images/duongxi.jpg",
        "images/duongxi2.jpg"
    ],
    "Cây tạo độ ẩm tốt",
    "Dương Xỉ giúp không gian tươi mát và dễ chịu.",
    {
        height: "30-80cm",
        type: "Cây treo",
        difficulty: "Dễ"
    },
    {
        light: "Ánh sáng nhẹ",
        water: "3 lần/tuần",
        soil: "Đất ẩm",
        note: "Ưa môi trường mát"
    },
    4
),

new Product(
    20,
    "Cây Kim Ngân",
    780000,
    "images/kimngan.jpg",
    "Phong thủy",
    "Cây mang tài lộc",
    8,
    false,
    [
        "images/kimngan.jpg",
        "images/kimngan2.jpg"
    ],
    "Cây phong thủy phổ biến",
    "Kim Ngân tượng trưng cho sự giàu sang và thịnh vượng.",
    {
        height: "70-150cm",
        type: "Cây nội thất",
        difficulty: "Dễ"
    },
    {
        light: "Ánh sáng gián tiếp",
        water: "1 lần/tuần",
        soil: "Thoát nước tốt",
        note: "Không để úng nước"
    },
    5
),

new Product(
    21,
    "Cây Cọ Nhật",
    950000,
    "images/conhat.jpg",
    "Trong nhà",
    "Cây nội thất cao cấp",
    5,
    false,
    [
        "images/conhat.jpg",
        "images/conhat2.jpg"
    ],
    "Cây sang trọng hiện đại",
    "Cọ Nhật thường được dùng trang trí resort và biệt thự.",
    {
        height: "120-220cm",
        type: "Cây nội thất",
        difficulty: "Trung bình"
    },
    {
        light: "Ánh sáng mạnh gián tiếp",
        water: "2 lần/tuần",
        soil: "Đất tơi xốp",
        note: "Lau lá định kỳ"
    },
    5
),

new Product(
    22,
    "Cây Cỏ Đồng Tiền",
    110000,
    "images/codongtien.jpg",
    "Trang trí",
    "Cây mini phong thủy",
    20,
    false,
    [
        "images/codongtien.jpg",
        "images/codongtien2.jpg"
    ],
    "Cây nhỏ dễ thương",
    "Cỏ Đồng Tiền tượng trưng cho tài lộc và may mắn.",
    {
        height: "5-15cm",
        type: "Cây mini",
        difficulty: "Dễ"
    },
    {
        light: "Ánh sáng nhẹ",
        water: "2 lần/tuần",
        soil: "Đất ẩm",
        note: "Không để đất khô"
    },
    4
),

new Product(
    23,
    "Cây Trầu Bà Sữa",
    260000,
    "images/traubasua.jpg",
    "Trong nhà",
    "Cây lá màu độc đáo",
    10,
    false,
    [
        "images/traubasua.jpg",
        "images/traubasua2.jpg"
    ],
    "Cây trang trí hiện đại",
    "Trầu Bà Sữa nổi bật với màu lá trắng xanh đẹp mắt.",
    {
        height: "20-80cm",
        type: "Cây leo",
        difficulty: "Dễ"
    },
    {
        light: "Ánh sáng gián tiếp",
        water: "2 lần/tuần",
        soil: "Đất giữ ẩm",
        note: "Tránh nắng mạnh"
    },
    5
),

new Product(
    24,
    "Cây Phú Quý",
    390000,
    "images/phuquy.jpg",
    "Phong thủy",
    "Cây mang ý nghĩa giàu sang",
    11,
    false,
    [
        "images/phuquy.jpg",
        "images/phuquy2.jpg"
    ],
    "Cây phong thủy đẹp",
    "Phú Quý có viền lá đỏ nổi bật và rất được ưa chuộng.",
    {
        height: "30-70cm",
        type: "Cây nội thất",
        difficulty: "Dễ"
    },
    {
        light: "Ánh sáng nhẹ",
        water: "2 lần/tuần",
        soil: "Đất tơi xốp",
        note: "Giữ ẩm vừa phải"
    },
    5
),

new Product(
    25,
    "Cây Tùng Thơm",
    170000,
    "images/tungthom.jpg",
    "Trang trí",
    "Cây có hương thơm nhẹ",
    16,
    false,
    [
        "images/tungthom.jpg",
        "images/tungthom2.jpg"
    ],
    "Cây mini Noel",
    "Tùng Thơm thường được dùng trang trí bàn học và Noel.",
    {
        height: "15-40cm",
        type: "Cây mini",
        difficulty: "Dễ"
    },
    {
        light: "Ánh sáng mạnh",
        water: "2 lần/tuần",
        soil: "Đất thoát nước",
        note: "Ưa nơi thoáng mát"
    },
    4
),

new Product(
    26,
    "Cây Hồng Môn",
    430000,
    "images/hongmon.jpg",
    "Trong nhà",
    "Cây có hoa đỏ nổi bật",
    7,
    false,
    [
        "images/hongmon.jpg",
        "images/hongmon2.jpg"
    ],
    "Cây nội thất có hoa",
    "Hồng Môn giúp không gian thêm nổi bật và sang trọng.",
    {
        height: "30-60cm",
        type: "Cây hoa nội thất",
        difficulty: "Trung bình"
    },
    {
        light: "Ánh sáng gián tiếp",
        water: "2–3 lần/tuần",
        soil: "Đất giữ ẩm",
        note: "Không để nắng gắt"
    },
    5
),

new Product(
    27,
    "Cây Ngũ Gia Bì",
    520000,
    "images/ngugiabi.jpg",
    "Phong thủy",
    "Cây xua đuổi côn trùng",
    8,
    false,
    [
        "images/ngugiabi.jpg",
        "images/ngugiabi2.jpg"
    ],
    "Cây phong thủy văn phòng",
    "Ngũ Gia Bì giúp thanh lọc không khí và mang may mắn.",
    {
        height: "50-120cm",
        type: "Cây nội thất",
        difficulty: "Dễ"
    },
    {
        light: "Ánh sáng nhẹ",
        water: "1–2 lần/tuần",
        soil: "Đất tơi xốp",
        note: "Cắt tỉa định kỳ"
    },
    5
),

];


    productsData.forEach(product => {

    const exists = manager.products.some(p => p.id === product.id);

    if (!exists) {
        manager.addProduct(product);
    }

});

manager.saveToLocalStorage();





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

