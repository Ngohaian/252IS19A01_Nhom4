//add product.js

const manager = new ProductManager();

manager.loadFromLocalStorage();


const productsData = [
    new Product(

        1,

        "Cây Kim Tiền",

        450000,

        "../../assets/images/kimtien.jpg",

        "Phong thủy",

        "Cây phong thủy dễ chăm sóc",

        8,

        false,

        [
           "../../assets/images/kimtien2.jpg",
           "../../assets/images/kimtien.jpg"
        ],

        "Cây mang ý nghĩa tài lộc và may mắn trong phong thủy, thường được đặt trong nhà hoặc văn phòng để thu hút năng lượng tích cực. Với màu xanh tươi và sức sống bền bỉ, cây còn tượng trưng cho sự phát triển, thành công và thịnh vượng lâu dài.",

        "Cây Kim Tiền tượng trưng cho sự giàu có, thịnh vượng và phát đạt trong cuộc sống. Theo quan niệm phong thủy, loại cây này có khả năng thu hút tài lộc, mang lại may mắn về tài chính và giúp công việc làm ăn trở nên thuận lợi hơn. Với những chiếc lá xanh bóng, mọc đối xứng và đầy sức sống, cây còn đại diện cho sự sinh sôi, phát triển bền vững và nguồn năng lượng tích cực. Vì vậy, cây Kim Tiền thường được đặt trong phòng khách, văn phòng làm việc hoặc quầy lễ tân để tạo cảm giác tươi mới và tăng tính thẩm mỹ cho không gian. Ngoài ra, đây cũng là một trong những loại cây được lựa chọn phổ biến làm quà tặng trong các dịp khai trương, tân gia hay chúc mừng thành công với ý nghĩa cầu mong tài lộc và may mắn cho người nhận.",

        {
            height: "40-80cm",
            type: "Cây nội thất",
            difficulty: "Dễ"
        },

        {
            light: "Cây thích hợp với ánh sáng nhẹ hoặc ánh sáng gián tiếp, có thể phát triển tốt trong môi trường trong nhà, văn phòng hoặc nơi có bóng râm nhẹ. Tránh để cây tiếp xúc trực tiếp với ánh nắng gắt trong thời gian dài vì có thể làm cháy lá.",
            water: "Chỉ cần tưới khoảng 1 lần mỗi tuần để giữ độ ẩm vừa phải cho đất. Vào mùa mưa hoặc thời tiết ẩm, có thể giảm lượng nước tưới để tránh cây bị úng.",
            soil: "Đất trồng nên tơi xốp, giàu dinh dưỡng và có khả năng thoát nước tốt để giúp rễ cây phát triển khỏe mạnh. Có thể trộn thêm xơ dừa, tro trấu hoặc đá perlite để tăng độ thông thoáng cho đất.",
            note: "Không nên tưới quá nhiều nước vì cây dễ bị úng rễ và vàng lá. Chỉ cần giữ đất hơi ẩm, đảm bảo chậu có lỗ thoát nước tốt và thường xuyên lau sạch lá để cây luôn xanh khỏe, bóng đẹp."
        },

        4
    ),

    new Product(

        2,

        "Cây Monstera",

        700000,

       "../../assets/images/monstera.jpg",

        "Trong nhà",

        "Cây lá xẻ hiện đại",

        5,

        false,

        [
            "./assets/images/tenanh.jpg",
            "./assets/images/tenanh.jpg"
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

        "../../assets/images/luoiho.jpg",

        "Phong thủy",

        "Thanh lọc không khí",

        12,

        false,

        [
            "./assets/images/tenanh.jpg",
            "./assets/images/tenanh.jpg"
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
    "./assets/images/tenanh.jpg",
    "Trong nhà",
    "Cây nội thất sang trọng",
    4,
    false,
    [
        "./assets/images/tenanh.jpg",
        "./assets/images/tenanh.jpg"
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
    "./assets/images/tenanh.jpg",
    "Trong nhà",
    "Cây leo dễ sống",
    15,
    false,
    [
        "./assets/images/tenanh.jpg",
        "./assets/images/tenanh.jpg"
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
    "./assets/images/tenanh.jpg",
    "Văn phòng",
    "Cây mini để bàn",
    20,
    false,
    [
        "./assets/images/tenanh.jpg",
        "./assets/images/tenanh.jpg"
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
    "./assets/images/tenanh.jpg",
    "Phong thủy",
    "Cây chịu hạn tốt",
    30,
    false,
    [
        "./assets/images/tenanh.jpg",
        "./assets/images/tenanh.jpg"
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
    "./assets/images/tenanh.jpg",
    "Phong thủy",
    "Cây mang may mắn",
    10,
    false,
    [
        "./assets/images/tenanh.jpg",
        "./assets/images/tenanh.jpg"
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
    "./assets/images/tenanh.jpg",
    "Trang trí",
    "Cây mini dễ thương",
    25,
    false,
    [
        "./assets/images/tenanh.jpg",
        "./assets/images/tenanh.jpg"
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
    "./assets/images/tenanh.jpg",
    "Trong nhà",
    "Cây phong thủy đẹp mắt",
    9,
    false,
    [
        "./assets/images/tenanh.jpg",
        "./assets/images/tenanh.jpg"
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

