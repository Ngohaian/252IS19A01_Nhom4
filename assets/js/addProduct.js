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
    )
]
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


const urlParams = new URLSearchParams(window.location.search);
const searchKeyword = urlParams.get("search");

if (searchKeyword) {
    manager.setSearch(searchKeyword);

    // Hiển thị thông báo đang tìm kiếm
    const toolbar = document.querySelector(".toolbar");
    if (toolbar) {
        const notice = document.createElement("p");
        notice.id = "search-notice";
        notice.style.cssText = "margin: 12px 0 16px 0; font-size: 14px; color: #666;";
        notice.innerHTML = `Kết quả tìm kiếm cho: <strong style="color: var(--color-nau-dat, #7a5c3a);">"${searchKeyword}"</strong>
            &nbsp;—&nbsp;<a href="pages/products/ProductList.html" style="color: #888; font-size: 13px;">Xóa tìm kiếm ✕</a>`;
        toolbar.insertAdjacentElement("afterend", notice);
    }

    // Đồng bộ input ô tìm kiếm trên header (nếu đã load)
    const searchInput = document.getElementById("searchInput");
    if (searchInput) searchInput.value = searchKeyword;
}

pagination.update();
