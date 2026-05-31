//pagination.js//
class Pagination {
    constructor({
        perPage = 9,
        container,
        paginationBox,
        getData,
        renderData
    }) {
        this.perPage = perPage;
        this.currentPage = 1;

        this.container = document.querySelector(container);
        this.paginationBox = document.querySelector(paginationBox);

        this.getData = getData;
        this.renderData = renderData;
    }

    get totalPages() {
        return Math.ceil(
            this.getData().length / this.perPage
        );
    }

    getPaginatedProducts() {
        const start = (this.currentPage - 1) * this.perPage;
        const end = start + this.perPage;

        return this.getData().slice(start, end);
    }

    renderItems() {
        const data = this.getPaginatedProducts();

        if (!this.container) return;

        this.renderData(data);
    }

    renderPagination() {
        if (!this.paginationBox) return;

        let html = "";

        html += `
            <button
                id="prevPage"
                ${this.currentPage === 1 ? "disabled" : ""}
            >
                Prev
            </button>
        `;

        for (let i = 1; i <= this.totalPages; i++) {
            html += `
                <button
                    class="page-btn ${i === this.currentPage ? "active" : ""}"
                    data-page="${i}"
                >
                    ${i}
                </button>
            `;
        }

        html += `
            <button
                id="nextPage"
                ${this.currentPage === this.totalPages ? "disabled" : ""}
            >
                Next
            </button>
        `;


        this.paginationBox.innerHTML = html;

        this.bindEvents();
    }

    bindEvents() {

        document
            .getElementById("prevPage")
            ?.addEventListener("click", () => {

                if (this.currentPage > 1) {
                    this.currentPage--;
                    this.update();
                }
            });

        document
            .getElementById("nextPage")
            ?.addEventListener("click", () => {

                if (this.currentPage < this.totalPages) {
                    this.currentPage++;
                    this.update();
                }
            });

        document
            .querySelectorAll(".page-btn")
            .forEach(btn => {

                btn.addEventListener("click", e => {

                    this.currentPage =
                        Number(e.target.dataset.page);

                    this.update();
                });
            });
    }

    update() {
        this.renderItems();
        this.renderPagination();
    }
}
