//search.js
const manager = new ProductManager();
manager.loadFromLocalStorage();

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resultBox = document.querySelector(".search-results");

if (!searchInput || !resultBox) {
    throw new Error("Thiếu input hoặc .search-results");
}

// ================= RENDER =================
function render(products) {
    UIRender.renderSearchResults(products, ".search-results");
}

// ================= SEARCH =================
function search(keyword) {
    const key = keyword.trim().toLowerCase();

    if (!key) {
        render(manager.products);
        return;
    }

    const result = manager.products.filter(p =>
        p.name.toLowerCase().includes(key)
    );

    render(result);
}

// ================= EVENT =================
searchBtn?.addEventListener("click", () => {
    search(searchInput.value);
});

searchInput?.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        search(searchInput.value);
    }
});

// load ban đầu
render(manager.products);