// blogManager.js

class BlogManager {

    constructor() {

        this.blogs = [];

        this.currentCategory = "all";
        this.currentKeyword = "";
        this.currentSort = "newest";
    }

    // ================= ADD BLOG =================

    addBlog(blog) {

        this.blogs.push(blog);
    }

    // ================= DELETE BLOG =================

    deleteBlog(id) {

        this.blogs = this.blogs.filter(
            blog => blog.id !== id
        );
    }

    // ================= UPDATE BLOG =================

    updateBlog(updatedBlog) {

        const index = this.blogs.findIndex(
            blog => blog.id === updatedBlog.id
        );

        if (index !== -1) {

            this.blogs[index] = updatedBlog;
        }
    }

    // ================= GET BLOG =================

    getBlogById(id) {

        return this.blogs.find(
            blog => blog.id === id
        );
    }

    // ================= SEARCH BLOG =================

    searchBlogs(keyword) {

        this.currentKeyword = keyword.toLowerCase();

        return this.blogs.filter(blog =>

            blog.title.toLowerCase().includes(this.currentKeyword) ||

            blog.category.toLowerCase().includes(this.currentKeyword) ||

            blog.shortDesc.toLowerCase().includes(this.currentKeyword)
        );
    }

    // ================= FILTER CATEGORY =================

    filterByCategory(category) {

        this.currentCategory = category;

        if (category === "all") {

            return this.blogs;
        }

        return this.blogs.filter(
            blog => blog.category === category
        );
    }

    // ================= SORT BLOG =================

    sortBlogs(type = "newest") {

        this.currentSort = type;

        if (type === "newest") {

            this.blogs.sort(
                (a, b) =>
                    new Date(b.createdAt) -
                    new Date(a.createdAt)
            );
        }

        if (type === "oldest") {

            this.blogs.sort(
                (a, b) =>
                    new Date(a.createdAt) -
                    new Date(b.createdAt)
            );
        }

        if (type === "a-z") {

            this.blogs.sort(
                (a, b) =>
                    a.title.localeCompare(b.title)
            );
        }

        if (type === "z-a") {

            this.blogs.sort(
                (a, b) =>
                    b.title.localeCompare(a.title)
            );
        }
    }

    // ================= SAVE =================

    saveToLocalStorage() {

        localStorage.setItem(
            "blogs",
            JSON.stringify(this.blogs)
        );
    }

    // ================= LOAD =================

    loadFromLocalStorage() {

        const data =
            JSON.parse(
                localStorage.getItem("blogs")
            ) || [];

        this.blogs = data.map(item =>

            new Blog(

                item.id,
                item.title,
                item.category,
                item.image,
                item.shortDesc,

                item.vietnameseName,
                item.scientificName,
                item.features,
                item.meaning,
                item.difficulty,

                item.light,
                item.location,
                item.lightProblem,

                item.watering,
                item.moistureCheck,
                item.wateringNote,
                item.wateringProblem,

                item.soil,
                item.soilMix,
                item.pot,

                item.temperature,
                item.humidity,
                item.humidityTip,

                item.fertilizer,
                item.fertilizerFrequency,
                item.fertilizerNote,

                item.pruning,
                item.cleaning,
                item.repotting,

                item.pests,
                item.pestSigns,
                item.pestSolution,

                item.mistakes,
                item.petSafe,
                item.unsuitableCondition,

                item.commonProblems,
                item.solutions,

                item.seasonalCare,
                item.repotGuide,
                item.fertilizingGuide,
                item.propagation,

                item.placement,
                item.decorIdeas,
                item.fengShui,
                item.trends,

                item.author,
                item.createdAt
            )
        );
    }
}