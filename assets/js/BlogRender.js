// uiRender.js

class BlogRender {

    // ================= BLOG LIST =================

    static renderBlogList(blogs, containerSelector) {

        const container =
            document.querySelector(containerSelector);

        if (!container) return;

        container.innerHTML = blogs.map(blog => `

            <div class="blog-card">

                <div class="blog-image">
                    <a href="pages/blog/BlogDetail.html?id=${blog.id}">

                    <img src="${blog.image}" alt="${blog.title}">
                    </a>

                </div>

                <div class="blog-content">

                    <span class="blog-category">
                        ${blog.category}
                    </span>

                    <p class="blog-title">
                        ${blog.title}
                    </p>

                    <p class="blog-desc">
                        ${blog.shortDesc}
                    </p>

                    <div class="blog-meta">

                        <span>
                            ${blog.author}
                        </span>

                        <span>
                            ${blog.createdAt}
                        </span>

                    </div>

                    

                </div>

            </div>

        `).join("");
    }



    // ================= BLOG DETAIL =================

    static renderBlogDetail(blog, containerSelector) {

        const container =
            document.querySelector(containerSelector);

        if (!container || !blog) return;

        container.innerHTML = `

            <div class="blog-detail">


                <div class="detail-hero">
                <img 
                    src="${blog.image}" 
                    alt="${blog.title}"
                    class="detail-image"
                >

                <div class="detail-header">
                    <span class="detail-category">
                        ${blog.category}
                    </span>

                    <h1>
                        ${blog.title}
                    </h1>

                    <div class="detail-meta">
                        <span>${blog.author}</span>
                        <span>${blog.createdAt}</span>
                    </div>
                </div>
            </div>

                <div class="detail-shortdesc-wrapper">
                    <p class="detail-shortdesc">
                    ${blog.shortDesc}
                    </p>
                </div>

                <!-- 1 -->

                <section class="detail-section">

                    <h2>1. Giới thiệu chung</h2>

                    <p>
                        <strong>Tên cây:</strong>
                        ${blog.vietnameseName}
                    </p>

                    <p>
                        <strong>Tên khoa học:</strong>
                        ${blog.scientificName}
                    </p>

                    <p>
                        <strong>Đặc điểm:</strong>
                        ${blog.features}
                    </p>

                    <p>
                        <strong>Ý nghĩa:</strong>
                        ${blog.meaning}
                    </p>

                    <p>
                        <strong>Mức độ chăm:</strong>
                        ${blog.difficulty}
                    </p>

                </section>



                <!-- 2 -->

                <section class="detail-section">

                    <h2>2. Ánh sáng</h2>

                    <p>${blog.light}</p>

                    <p>${blog.location}</p>

                    <p>${blog.lightProblem}</p>

                </section>



                <!-- 3 -->

                <section class="detail-section">

                    <h2>3. Tưới nước</h2>

                    <p>${blog.watering}</p>

                    <p>${blog.moistureCheck}</p>

                    <p>${blog.wateringNote}</p>

                    <p>${blog.wateringProblem}</p>

                </section>



                <!-- 4 -->

                <section class="detail-section">

                    <h2>4. Đất trồng & chậu</h2>

                    <p>${blog.soil}</p>

                    <p>${blog.soilMix}</p>

                    <p>${blog.pot}</p>

                </section>



                <!-- 5 -->

                <section class="detail-section">

                    <h2>5. Nhiệt độ & độ ẩm</h2>

                    <p>${blog.temperature}</p>

                    <p>${blog.humidity}</p>

                    <p>${blog.humidityTip}</p>

                </section>



                <!-- 6 -->

                <section class="detail-section">

                    <h2>6. Phân bón</h2>

                    <p>${blog.fertilizer}</p>

                    <p>${blog.fertilizerFrequency}</p>

                    <p>${blog.fertilizerNote}</p>

                </section>



                <!-- 7 -->

                <section class="detail-section">

                    <h2>7. Cắt tỉa & vệ sinh</h2>

                    <p>${blog.pruning}</p>

                    <p>${blog.cleaning}</p>

                    <p>${blog.repotting}</p>

                </section>



                <!-- 8 -->

                <section class="detail-section">

                    <h2>8. Sâu bệnh thường gặp</h2>

                    <p>${blog.pests}</p>

                    <p>${blog.pestSigns}</p>

                    <p>${blog.pestSolution}</p>

                </section>



                <!-- 9 -->

                <section class="detail-section">

                    <h2>9. Lưu ý quan trọng</h2>

                    <p>${blog.mistakes}</p>

                    <p>${blog.petSafe}</p>

                    <p>${blog.unsuitableCondition}</p>

                </section>



                <!-- 10 -->

                <section class="detail-section">

                    <h2>10. Vấn đề thường gặp</h2>

                    <p>${blog.commonProblems}</p>

                    <p>${blog.solutions}</p>

                </section>



                <!-- 11 -->

                <section class="detail-section">

                    <h2>11. Mẹo chăm sóc nâng cao</h2>

                    <p>${blog.seasonalCare}</p>

                    <p>${blog.repotGuide}</p>

                    <p>${blog.fertilizingGuide}</p>

                    <p>${blog.propagation}</p>

                </section>



                <!-- 12 -->

                <section class="detail-section">

                    <h2>12. Không gian sống & phong cách</h2>

                    <p>${blog.placement}</p>

                    <p>${blog.decorIdeas}</p>

                    <p>${blog.fengShui}</p>

                    <p>${blog.trends}</p>

                </section>

            </div>

        `;
    }
}
