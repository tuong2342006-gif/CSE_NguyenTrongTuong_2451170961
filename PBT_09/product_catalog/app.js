const products = [
    {
        id: 1,
        name: "iPhone 16",
        price: 25990000,
        category: "phone",
        image: "https://placehold.co/400x300",
        rating: 4.8,
        inStock: true
    },
    {
        id: 2,
        name: "Samsung S25",
        price: 22990000,
        category: "phone",
        image: "https://placehold.co/400x300",
        rating: 4.6,
        inStock: true
    },
    {
        id: 3,
        name: "MacBook Air M4",
        price: 31990000,
        category: "laptop",
        image: "https://placehold.co/400x300",
        rating: 4.9,
        inStock: true
    },
    {
        id: 4,
        name: "Dell XPS 15",
        price: 28990000,
        category: "laptop",
        image: "https://placehold.co/400x300",
        rating: 4.7,
        inStock: false
    },
    {
        id: 5,
        name: "iPad Pro",
        price: 21990000,
        category: "tablet",
        image: "https://placehold.co/400x300",
        rating: 4.7,
        inStock: true
    },
    {
        id: 6,
        name: "Galaxy Tab S10",
        price: 18990000,
        category: "tablet",
        image: "https://placehold.co/400x300",
        rating: 4.5,
        inStock: true
    },
    {
        id: 7,
        name: "Sony WH-1000XM5",
        price: 8990000,
        category: "audio",
        image: "https://placehold.co/400x300",
        rating: 4.9,
        inStock: true
    },
    {
        id: 8,
        name: "AirPods Pro 2",
        price: 6490000,
        category: "audio",
        image: "https://placehold.co/400x300",
        rating: 4.8,
        inStock: false
    },
    {
        id: 9,
        name: "Asus ROG Phone",
        price: 19990000,
        category: "phone",
        image: "https://placehold.co/400x300",
        rating: 4.4,
        inStock: true
    },
    {
        id: 10,
        name: "Lenovo Legion",
        price: 27990000,
        category: "laptop",
        image: "https://placehold.co/400x300",
        rating: 4.6,
        inStock: true
    },
    {
        id: 11,
        name: "Xiaomi Pad 7",
        price: 10990000,
        category: "tablet",
        image: "https://placehold.co/400x300",
        rating: 4.3,
        inStock: true
    },
    {
        id: 12,
        name: "JBL Tune 770",
        price: 2990000,
        category: "audio",
        image: "https://placehold.co/400x300",
        rating: 4.2,
        inStock: true
    }
];

let filteredProducts = [...products];

let currentCategory = "all";

let cartCount = 0;

const body = document.body;

const container = document.createElement("div");
container.classList.add("container");

body.appendChild(container);

const cartIcon = document.createElement("div");
cartIcon.classList.add("cart-icon");

cartIcon.textContent = "🛒";

const cartBadge = document.createElement("div");
cartBadge.classList.add("cart-badge");

cartBadge.textContent = "0";

cartIcon.appendChild(cartBadge);

body.appendChild(cartIcon);

const topbar = document.createElement("div");
topbar.classList.add("topbar");

container.appendChild(topbar);

const searchInput = document.createElement("input");

searchInput.placeholder = "Search products...";

searchInput.classList.add("search-box");

topbar.appendChild(searchInput);

const sortSelect = document.createElement("select");

sortSelect.classList.add("sort-select");

sortSelect.innerHTML = `
    <option value="default">Sort By</option>
    <option value="price-asc">Price ↑</option>
    <option value="price-desc">Price ↓</option>
    <option value="name">Name A-Z</option>
    <option value="rating">Highest Rating</option>
`;

topbar.appendChild(sortSelect);

const darkToggle = document.createElement("button");

darkToggle.textContent = "🌙 Dark Mode";

darkToggle.classList.add("dark-toggle");

topbar.appendChild(darkToggle);

const categories = [
    "all",
    "phone",
    "laptop",
    "tablet",
    "audio"
];

const categoryContainer = document.createElement("div");

categoryContainer.classList.add("category-buttons");

container.appendChild(categoryContainer);

categories.forEach(category => {

    const button = document.createElement("button");

    button.textContent = category;

    button.dataset.category = category;

    button.classList.add("category-btn");

    if (category === "all") {
        button.classList.add("active");
    }

    categoryContainer.appendChild(button);
});

const productsGrid = document.createElement("div");

productsGrid.classList.add("products-grid");

container.appendChild(productsGrid);

function renderProducts(productArray) {

    productsGrid.innerHTML = "";

    productArray.forEach(product => {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.dataset.id = product.id;

        const image = document.createElement("img");

        image.src = product.image;

        const info = document.createElement("div");

        info.classList.add("product-info");

        const title = document.createElement("h3");

        title.textContent = product.name;

        const price = document.createElement("p");

        price.classList.add("price");

        price.textContent =
            product.price.toLocaleString("vi-VN") + "đ";

        const rating = document.createElement("p");

        rating.classList.add("rating");

        rating.textContent = "⭐ " + product.rating;

        const stock = document.createElement("p");

        stock.classList.add("stock");

        stock.textContent =
            product.inStock ? "In Stock" : "Out of Stock";

        const addBtn = document.createElement("button");

        addBtn.textContent = "Thêm giỏ";

        addBtn.classList.add("add-cart-btn");

        info.append(
            title,
            price,
            rating,
            stock,
            addBtn
        );

        card.append(image, info);

        productsGrid.appendChild(card);
    });
}

function filterByCategory(category) {

    currentCategory = category;

    if (category === "all") {
        filteredProducts = [...products];
    }

    else {
        filteredProducts =
            products.filter(product =>
                product.category === category
            );
    }

    searchProducts();

    sortProducts();
}

function searchProducts() {

    const keyword =
        searchInput.value.toLowerCase();

    filteredProducts =
        filteredProducts.filter(product =>
            product.name.toLowerCase().includes(keyword)
        );

    renderProducts(filteredProducts);
}

function sortProducts() {

    const sortValue = sortSelect.value;

    if (sortValue === "price-asc") {
        filteredProducts.sort((a, b) =>
            a.price - b.price
        );
    }

    if (sortValue === "price-desc") {
        filteredProducts.sort((a, b) =>
            b.price - a.price
        );
    }

    if (sortValue === "name") {
        filteredProducts.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }

    if (sortValue === "rating") {
        filteredProducts.sort((a, b) =>
            b.rating - a.rating
        );
    }

    renderProducts(filteredProducts);
}

function openModal(product) {

    const modal = document.createElement("div");

    modal.classList.add("modal");

    const modalContent = document.createElement("div");

    modalContent.classList.add("modal-content");

    const closeBtn = document.createElement("span");

    closeBtn.classList.add("close-modal");

    closeBtn.textContent = "×";

    const image = document.createElement("img");

    image.src = product.image;

    const title = document.createElement("h2");

    title.textContent = product.name;

    const price = document.createElement("p");

    price.textContent =
        "Price: " +
        product.price.toLocaleString("vi-VN") +
        "đ";

    const rating = document.createElement("p");

    rating.textContent =
        "Rating: ⭐ " + product.rating;

    const stock = document.createElement("p");

    stock.textContent =
        product.inStock
            ? "Available"
            : "Out of Stock";

    modalContent.append(
        closeBtn,
        image,
        title,
        price,
        rating,
        stock
    );

    modal.appendChild(modalContent);

    body.appendChild(modal);

    closeBtn.addEventListener("click", () => {
        modal.remove();
    });

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {
            modal.remove();
        }
    });
}

searchInput.addEventListener("input", () => {

    filterByCategory(currentCategory);
});

sortSelect.addEventListener("change", () => {

    sortProducts();
});

categoryContainer.addEventListener("click", (e) => {

    if (!e.target.classList.contains("category-btn")) {
        return;
    }

    document
        .querySelectorAll(".category-btn")
        .forEach(btn => {
            btn.classList.remove("active");
        });

    e.target.classList.add("active");

    filterByCategory(e.target.dataset.category);
});

productsGrid.addEventListener("click", (e) => {

    const card =
        e.target.closest(".product-card");

    if (!card) return;

    const id = Number(card.dataset.id);

    const product =
        products.find(product =>
            product.id === id
        );

    if (e.target.classList.contains("add-cart-btn")) {

        e.stopPropagation();

        cartCount++;

        cartBadge.textContent = cartCount;

        return;
    }

    openModal(product);
});

darkToggle.addEventListener("click", () => {

    body.classList.toggle("dark-mode");
});

renderProducts(products);