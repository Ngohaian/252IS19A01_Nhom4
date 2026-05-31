// addBlog.js

const blogManager = new BlogManager();

blogManager.loadFromLocalStorage();

if (blogManager.blogs.length === 0) {

    blogManager.addBlog(

    new Blog(

        1,

        "Cách chăm sóc cây Kim Tiền",

        "Phong thủy",

        "../../assets/images/kimtien2.jpg",

        "Hướng dẫn chăm sóc cây Kim Tiền đúng cách giúp cây luôn xanh tốt và phát triển khỏe mạnh.",

        // 1. Giới thiệu chung
        "Cây Kim Tiền",
        "Zamioculcas zamiifolia",
        "Lá xanh bóng, thân mọng nước, dễ chăm sóc.",
        "Mang ý nghĩa tài lộc và may mắn.",
        "Dễ",

        // 2. Ánh sáng
        "Ánh sáng gián tiếp nhẹ.",
        "Đặt gần cửa sổ hoặc phòng khách.",
        "Nắng gắt dễ cháy lá.",

        // 3. Tưới nước
        "1 lần/tuần.",
        "Kiểm tra đất khô trước khi tưới.",
        "Không tưới quá nhiều.",
        "Úng nước làm vàng lá.",

        // 4. Đất & chậu
        "Đất tơi xốp thoát nước tốt.",
        "Trộn xơ dừa và tro trấu.",
        "Chậu cần có lỗ thoát nước.",

        // 5. Nhiệt độ & độ ẩm
        "18-30°C",
        "Độ ẩm trung bình.",
        "Có thể phun sương nhẹ.",

        // 6. Phân bón
        "Phân hữu cơ hoặc NPK.",
        "1-2 tháng/lần.",
        "Không bón quá nhiều.",

        // 7. Cắt tỉa & vệ sinh
        "Cắt lá vàng và cành hư.",
        "Lau lá định kỳ.",
        "Thay chậu mỗi 1-2 năm.",

        // 8. Sâu bệnh
        "Rệp sáp và nấm.",
        "Lá vàng hoặc thân mềm.",
        "Cắt bỏ phần hư và dùng thuốc sinh học.",

        // 9. Lưu ý quan trọng
        "Tưới quá nhiều nước.",
        "Có độc nhẹ với thú cưng.",
        "Không đặt nơi quá ẩm thấp.",

        // 10. Vấn đề thường gặp
        "Vàng lá và chậm phát triển.",
        "Giảm tưới và tăng ánh sáng nhẹ.",

        // 11. Mẹo chăm sóc nâng cao
        "Mùa mưa giảm lượng nước.",
        "Thay chậu đầu mùa xuân.",
        "Bón phân khi cây phát triển mạnh.",
        "Nhân giống bằng tách bụi.",

        // 12. Không gian sống & phong cách
        "Phù hợp phòng khách và văn phòng.",
        "Kết hợp chậu trắng hoặc gỗ.",
        "Hợp mệnh Mộc và Hỏa.",
        "Phong cách decor xanh hiện đại.",

        "Admin",

        "2026-05-19"
    )
);

blogManager.addBlog(

    new Blog(

        2,

        "Bí quyết chăm sóc cây Monstera",

        "Trong nhà",

        "./assets/images/blog-monstera.jpg",

        "Hướng dẫn chăm sóc Monstera để lá luôn xanh và xẻ đẹp tự nhiên.",

        // 1. Giới thiệu chung
        "Cây Monstera",
        "Monstera deliciosa",
        "Lá xẻ lớn độc đáo, phong cách tropical.",
        "Mang lại cảm giác hiện đại và thư giãn.",
        "Trung bình",

        // 2. Ánh sáng
        "Ánh sáng gián tiếp mạnh.",
        "Đặt gần cửa sổ có rèm che.",
        "Thiếu sáng cây khó ra lá xẻ.",

        // 3. Tưới nước
        "2 lần/tuần.",
        "Kiểm tra đất khô mặt trên.",
        "Giữ đất hơi ẩm.",
        "Úng nước dễ thối rễ.",

        // 4. Đất & chậu
        "Đất tơi xốp thoát nước tốt.",
        "Có thể trộn vỏ thông và perlite.",
        "Dùng chậu lớn có lỗ thoát nước.",

        // 5. Nhiệt độ & độ ẩm
        "20-32°C",
        "Độ ẩm cao.",
        "Phun sương nhẹ vào ngày nóng.",

        // 6. Phân bón
        "Phân hữu cơ hoặc NPK.",
        "1 tháng/lần.",
        "Không bón quá nhiều.",

        // 7. Cắt tỉa & vệ sinh
        "Cắt lá già hoặc lá hư.",
        "Lau lá thường xuyên.",
        "Thay chậu khi rễ phát triển mạnh.",

        // 8. Sâu bệnh
        "Rệp và nấm lá.",
        "Lá xuất hiện đốm nâu.",
        "Dùng thuốc sinh học.",

        // 9. Lưu ý quan trọng
        "Tránh nắng gắt.",
        "Không để cây nơi quá lạnh.",
        "Không tưới quá nhiều.",

        // 10. Vấn đề thường gặp
        "Lá vàng hoặc không xẻ.",
        "Tăng ánh sáng và giảm nước.",

        // 11. Mẹo chăm sóc nâng cao
        "Dùng cọc rêu cho cây leo.",
        "Xoay cây định kỳ.",
        "Bón phân mùa phát triển.",
        "Nhân giống bằng giâm cành.",

        // 12. Không gian sống & phong cách
        "Phù hợp phòng khách và studio.",
        "Kết hợp nội thất trắng và gỗ.",
        "Hợp mệnh Mộc.",
        "Phong cách tropical hiện đại.",

        "Admin",

        "2026-05-21"
    )
);

blogManager.addBlog(

    new Blog(

        3,

        "Cách chăm sóc cây Lưỡi Hổ cho người bận rộn",

        "Phong thủy",

        "./assets/images/blog-luoiho.jpg",

        "Cây Lưỡi Hổ cực dễ chăm sóc và phù hợp nhiều không gian sống.",

        // 1. Giới thiệu chung
        "Cây Lưỡi Hổ",
        "Sansevieria trifasciata",
        "Lá cứng mọc thẳng và chịu hạn tốt.",
        "Mang ý nghĩa bảo vệ và may mắn.",
        "Dễ",

        // 2. Ánh sáng
        "Ánh sáng nhẹ hoặc gián tiếp.",
        "Đặt trong phòng ngủ hoặc văn phòng.",
        "Nắng gắt dễ cháy lá.",

        // 3. Tưới nước
        "1 lần/tuần.",
        "Đợi đất khô hoàn toàn.",
        "Không tưới quá nhiều.",
        "Úng nước dễ thối rễ.",

        // 4. Đất & chậu
        "Đất thoát nước tốt.",
        "Trộn thêm cát hoặc pumice.",
        "Chậu có lỗ thoát nước.",

        // 5. Nhiệt độ & độ ẩm
        "18-35°C",
        "Độ ẩm trung bình.",
        "Không cần phun sương.",

        // 6. Phân bón
        "Phân tan chậm.",
        "2 tháng/lần.",
        "Không bón quá nhiều.",

        // 7. Cắt tỉa & vệ sinh
        "Cắt lá vàng.",
        "Lau bụi trên lá.",
        "Thay đất định kỳ.",

        // 8. Sâu bệnh
        "Rệp sáp và nấm.",
        "Lá mềm hoặc vàng.",
        "Cắt bỏ phần hư.",

        // 9. Lưu ý quan trọng
        "Không tưới mỗi ngày.",
        "Tránh nơi quá tối.",
        "Không để úng nước.",

        // 10. Vấn đề thường gặp
        "Lá mềm và úng.",
        "Giảm lượng nước tưới.",

        // 11. Mẹo chăm sóc nâng cao
        "Đặt nơi thông thoáng.",
        "Xoay cây định kỳ.",
        "Bón phân mùa xuân.",
        "Nhân giống bằng tách bụi.",

        // 12. Không gian sống & phong cách
        "Phù hợp phòng ngủ và văn phòng.",
        "Decor tối giản hiện đại.",
        "Hợp mệnh Kim và Thổ.",
        "Phong cách minimal.",

        "Admin",

        "2026-05-21"
    )
);

    blogManager.saveToLocalStorage();
}

// ================= FILTER =================
const categoryFilter = document.querySelector("#categoryFilter");
const sortFilter = document.querySelector("#sortFilter");
const searchInput = document.querySelector("#searchInput");

// ================= RENDER =================
function renderBlogs() {
    if (!document.querySelector(".blog-list")) return;

    let blogs = [...blogManager.blogs];

    // CATEGORY
    if (categoryFilter) {
        const category = categoryFilter.value;
        if (category !== "all") {
            blogs = blogs.filter(blog => blog.category === category);
        }
    }

    // SEARCH
    if (searchInput) {
        const keyword = searchInput.value.toLowerCase();
        if (keyword) {
            blogs = blogs.filter(blog =>
                blog.title.toLowerCase().includes(keyword) ||
                blog.shortDesc.toLowerCase().includes(keyword) ||
                blog.category.toLowerCase().includes(keyword)
            );
        }
    }

    // SORT
    if (sortFilter) {
        const sortValue = sortFilter.value;
        if (sortValue === "newest") {
            blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }
        if (sortValue === "oldest") {
            blogs.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        }
        if (sortValue === "a-z") {
            blogs.sort((a, b) => a.title.localeCompare(b.title));
        }
        if (sortValue === "z-a") {
            blogs.sort((a, b) => b.title.localeCompare(a.title));
        }
    }

    // RENDER
    BlogRender.renderBlogList(blogs, ".blog-list");
}

// ================= EVENT =================

if (categoryFilter) categoryFilter.addEventListener("change", renderBlogs);
if (sortFilter) sortFilter.addEventListener("change", renderBlogs);
if (searchInput) searchInput.addEventListener("input", renderBlogs);

// ================= FIRST RENDER =================
if (document.querySelector(".blog-list")) {
    renderBlogs();
}