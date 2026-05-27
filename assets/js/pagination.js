//pagination.js//
class Pagination {
    constructor(manager, perPage = 9) {
        this.manager = manager;
        this.perPage = perPage;
        this.currentPage = 1;

        this.container = document.querySelector(".product-list");
        this.paginationBox = document.querySelector(".pagination");
    }

    get totalPages() {
    return Math.ceil(
        this.manager.getVisibleProducts().length / this.perPage
    );
}

    getPaginatedProducts() {
        const start = (this.currentPage - 1) * this.perPage;
        const end = start + this.perPage;
        const products = this.manager.getVisibleProducts();
        return products.slice(start, end);
    }

    renderProducts() {
        const products = this.getPaginatedProducts();

        if (!this.container) return;

        UIRender.renderProductList(products, ".product-list");
    }

    renderPagination() {
        if (!this.paginationBox) return;

        let html = "";

        html += `<button ${this.currentPage === 1 ? "disabled" : ""} id="prevPage">Prev</button>`;

        for (let i = 1; i <= this.totalPages; i++) {
            html += `
                <button class="page-btn ${i === this.currentPage ? "active" : ""}" data-page="${i}">
                    ${i}
                </button>
            `;
        }

        html += `<button ${this.currentPage === this.totalPages ? "disabled" : ""} id="nextPage">Next</button>`;

        this.paginationBox.innerHTML = html;

        this.bindEvents();
    }

    bindEvents() {
        document.getElementById("prevPage")?.addEventListener("click", () => {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.update();
            }
        });

        document.getElementById("nextPage")?.addEventListener("click", () => {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                this.update();
            }
        });

        document.querySelectorAll(".page-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                this.currentPage = Number(e.target.dataset.page);
                this.update();
            });
        });
    }

    update() {
        this.renderProducts();
        this.renderPagination();
    }
}
