//add product.js

const manager = new ProductManager();

manager.loadFromLocalStorage();

if (manager.products.length === 0) {
const productsData = [
    new Product(

        1,

        "Cây Kim Tiền",

        450000,

        "assets/images/kimtien.jpg",

        "Phong thủy",

        "Cây phong thủy dễ chăm sóc",

        8,

        false,

        [
           "assets/images/kimtien2.jpg",
           "assets/images/kimtien.jpg"
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

       "assets/images/monstera.jpg",

        "Trong nhà",

        "Cây lá xẻ hiện đại",

        5,

        false,

        [
            "assets/images/monstera2.jpg",
            "assets/images/monstera.jpg"
        ],

       "Cây Monstera (Trầu Bà Lá Xẻ) là một trong những loại cây nội thất được ưa chuộng nhất trong thiết kế hiện đại nhờ hình dáng lá xẻ độc đáo, mang phong cách tropical sang trọng và nghệ thuật.",

    "Monstera, hay còn gọi là Trầu Bà Lá Xẻ, là một trong những loại cây nội thất mang tính biểu tượng trong thiết kế không gian hiện đại. Điểm đặc trưng của cây là những chiếc lá lớn có hình dạng xẻ tự nhiên độc đáo, tạo nên vẻ đẹp nhiệt đới (tropical) đầy nghệ thuật và thu hút ánh nhìn. Nhờ vẻ ngoài ấn tượng, Monstera thường xuất hiện trong các quán cà phê, khách sạn, văn phòng sáng tạo và các không gian mang phong cách tối giản hoặc Scandinavian. Ngoài giá trị thẩm mỹ, Monstera còn giúp cải thiện chất lượng không khí bằng cách hấp thụ một số chất độc hại nhẹ trong môi trường sống. Cây có khả năng sinh trưởng tốt trong điều kiện trong nhà, phù hợp với người yêu cây nhưng không có nhiều thời gian chăm sóc. Khi trưởng thành, cây có thể phát triển rất mạnh, tạo điểm nhấn xanh nổi bật cho không gian.",


        {
            height: "50-100cm",
            type: "Cây nội thất",
            difficulty: "Trung bình"
        },

        {
             light: "Ưa ánh sáng gián tiếp, sáng vừa. Tránh ánh nắng trực tiếp vì dễ làm cháy lá hoặc mất màu xanh tự nhiên. Có thể đặt gần cửa sổ có rèm hoặc nơi có ánh sáng khuếch tán.",
        water: "Tưới khoảng 2 lần/tuần tùy vào độ ẩm môi trường. Giữ đất hơi ẩm nhưng không bị sũng nước. Nên để đất khô nhẹ giữa các lần tưới để tránh thối rễ.",
        soil: "Cần đất giàu dinh dưỡng, thoát nước tốt và có độ tơi xốp cao. Có thể bổ sung than bùn, xơ dừa hoặc vỏ thông để tăng khả năng thoáng khí cho rễ.",
        note: "Nên thường xuyên lau bụi trên lá để tăng khả năng quang hợp. Tránh đặt cây gần điều hòa thổi trực tiếp hoặc nơi có gió lạnh mạnh."
        },

        5
    ),

    new Product(

        3,

        "Cây Lưỡi Hổ",

        320000,

        "assets/images/luoiho.jpg",

        "Phong thủy",

        "Thanh lọc không khí",

        12,

        false,

        [
            "assets/images/luoiho2.jpg",
            "assets/images/luoiho.jpg"
        ],

        "Cây Lưỡi Hổ là loại cây cảnh phổ biến với khả năng sống bền bỉ trong nhiều điều kiện khác nhau, đồng thời mang ý nghĩa phong thủy xua đuổi tà khí và bảo vệ không gian sống.",

    "Cây Lưỡi Hổ là một trong những loại cây cảnh được ưa chuộng nhất nhờ khả năng sinh tồn mạnh mẽ và ý nghĩa phong thủy tích cực. Với hình dáng lá dài, cứng cáp và vươn thẳng, cây tượng trưng cho sự mạnh mẽ, kiên định và khả năng bảo vệ gia chủ khỏi những nguồn năng lượng xấu. Ngoài ý nghĩa phong thủy, Lưỡi Hổ còn nổi tiếng với khả năng thanh lọc không khí, đặc biệt là hấp thụ các chất độc hại và nhả oxy vào ban đêm, rất phù hợp để đặt trong phòng ngủ. Đây là loại cây cực kỳ dễ chăm sóc, gần như không yêu cầu kỹ thuật cao, phù hợp với người mới bắt đầu chơi cây hoặc những người bận rộn.",

        {
            height: "30-60cm",
            type: "Cây phong thủy",
            difficulty: "Dễ"
        },

        {
            light: "Cây chịu được nhiều điều kiện ánh sáng, từ ánh sáng mạnh đến ánh sáng yếu. Tuy nhiên, phát triển tốt nhất trong ánh sáng gián tiếp hoặc bóng râm nhẹ.",
        water: "Chỉ cần tưới 1 lần/tuần hoặc ít hơn. Cây chịu hạn tốt, không nên tưới quá nhiều vì rất dễ gây thối rễ.",
        soil: "Ưu tiên đất khô thoáng, thoát nước cực tốt. Có thể trộn đất với cát hoặc perlite để giảm độ ẩm dư thừa.",
        note: "Không nên tưới theo lịch cố định mà cần kiểm tra đất trước khi tưới. Đây là loại cây càng ít chăm càng dễ sống."
        },

        3
    )
];
productsData.forEach(product => {
        manager.addProduct(product);
    });

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

// Đọc ?search= từ URL và áp dụng filter
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
