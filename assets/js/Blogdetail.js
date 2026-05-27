// detailBlog.js

//const blogManager = new BlogManager();

blogManager.loadFromLocalStorage();

const detail = document.querySelector(".detail");

if (!detail) {
    throw new Error("Không tìm thấy .detail");
}

// ================= GET BLOG =================

const id = Number(
    new URLSearchParams(window.location.search)
        .get("id")
);

const blog = blogManager.blogs.find(
    b => b.id === id
);

if (!blog) {

    detail.innerHTML =
        `<h2>Không tìm thấy bài viết</h2>`;

    throw new Error("Blog not found");

} else {

    // ================= RELATED BLOG =================

    const relatedBlogs = blogManager.blogs
        .filter(b =>

            b.category === blog.category &&
            b.id !== blog.id
        )
        .slice(0, 4);

    // ================= RENDER =================

    BlogRender.renderBlogDetail(
        blog,
        ".detail"
    );

    // ================= RELATED =================

    const relatedContainer =
        document.querySelector(".related-blogs");

    if (relatedContainer) {

        BlogRender.renderBlogList(
            relatedBlogs,
            ".related-blogs"
        );
    }

    // ================= COMMENTS =================

    let comments = JSON.parse(

        localStorage.getItem(
            `blog_comments_${blog.id}`
        )

    ) || [];

    const renderComments = () => {

        const el =
            document.getElementById("commentList");

        if (!el) return;

        el.innerHTML = comments.map(c => `

            <div class="comment-item">

                <b>${c.name}</b>

                <p>${c.text}</p>

            </div>

        `).join("");
    };

    renderComments();

    // ================= SEND COMMENT =================

    const sendBtn =
        document.getElementById("sendCommentBtn");

    if (sendBtn) {

        sendBtn.onclick = () => {

            const input =
                document.getElementById("commentInput");

            const text =
                input.value.trim();

            if (!text) return;

            comments.push({

                name: "Khách",

                text
            });

            localStorage.setItem(

                `blog_comments_${blog.id}`,

                JSON.stringify(comments)
            );

            input.value = "";

            renderComments();
        };
    }

    // ================= SCROLL TOP =================

    const topBtn =
        document.getElementById("scrollTopBtn");

    if (topBtn) {

        topBtn.onclick = () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"
            });
        };
    }
}