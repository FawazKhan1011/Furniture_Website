document.addEventListener('DOMContentLoaded', () => {
    // Product details
    const productDetails = {
        1: {
            image: "../img/table/table (1).jpg",
            title: "Modern Table 1",
            meta: "Comfortable and stylish, perfect for any living room.",
            description: "This modern table is made with high-quality materials and offers unparalleled comfort. Its modern design makes it a perfect addition to any living room.",
            features: ["High-quality fabric", "Durable frame", "Available in multiple colors", "Comfortable seating"]
        },
        2: {
            image: "../img/table/table (2).jpg",
            title: "Modern table 2",
            meta: "Elegant and durable for everyday use.",
            description: "A stylish and elegant table designed for maximum durability and style. Perfect for any modern home decor.",
            features: ["Premium cushioning", "Ergonomic design", "Available in various sizes", "Stain-resistant fabric"]
        },
        3: {
            image: "../img/table/table (3).jpg",
            title: "Modern table 2",
            meta: "Elegant and durable for everyday use.",
            description: "A stylish and elegant table designed for maximum durability and style. Perfect for any modern home decor.",
            features: ["Premium cushioning", "Ergonomic design", "Available in various sizes", "Stain-resistant fabric"]
        },
        4: {
            image: "../img/table/table (4).jpg",
            title: "Modern table 2",
            meta: "Elegant and durable for everyday use.",
            description: "A stylish and elegant table designed for maximum durability and style. Perfect for any modern home decor.",
            features: ["Premium cushioning", "Ergonomic design", "Available in various sizes", "Stain-resistant fabric"]
        },
        5: {
            image: "../img/table/table (5).jpg",
            title: "Modern table 2",
            meta: "Elegant and durable for everyday use.",
            description: "A stylish and elegant table designed for maximum durability and style. Perfect for any modern home decor.",
            features: ["Premium cushioning", "Ergonomic design", "Available in various sizes", "Stain-resistant fabric"]
        },
        6: {
            image: "../img/table/table (6).jpg",
            title: "Modern table 2",
            meta: "Elegant and durable for everyday use.",
            description: "A stylish and elegant table designed for maximum durability and style. Perfect for any modern home decor.",
            features: ["Premium cushioning", "Ergonomic design", "Available in various sizes", "Stain-resistant fabric"]
        },
        7: {
            image: "../img/table/table (7).jpg",
            title: "Modern table 2",
            meta: "Elegant and durable for everyday use.",
            description: "A stylish and elegant table designed for maximum durability and style. Perfect for any modern home decor.",
            features: ["Premium cushioning", "Ergonomic design", "Available in various sizes", "Stain-resistant fabric"]
        },
        8: {
            image: "../img/table/table (8).jpg",
            title: "Modern table 2",
            meta: "Elegant and durable for everyday use.",
            description: "A stylish and elegant table designed for maximum durability and style. Perfect for any modern home decor.",
            features: ["Premium cushioning", "Ergonomic design", "Available in various sizes", "Stain-resistant fabric"]
        }
    };

    // Select modal elements
    const modal = document.getElementById('product-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalMeta = document.getElementById('modal-meta');
    const modalDescription = document.getElementById('modal-description');
    const modalFeatures = document.getElementById('modal-features');
    const closeModal = document.querySelector('.close-btn');

    // Open Modal
    const openModal = (productId) => {
        const product = productDetails[productId]; // Fetch product data

        if (!product) {
            console.error(`Product with ID ${productId} not found.`);
            return;
        }

        // Populate modal with product data
        modalImage.src = product.image;
        modalTitle.textContent = product.title;
        modalMeta.textContent = product.meta;
        modalDescription.textContent = product.description;

        // Populate features list
        modalFeatures.innerHTML = ""; // Clear old features
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            modalFeatures.appendChild(li);
        });

        // Display modal
        modal.style.display = 'flex';
    };

    // Close Modal
    const closeModalHandler = () => {
        modal.style.display = 'none';
    };

    // Attach event listeners to all product cards
    const productCards = document.querySelectorAll('.product-card'); // Select all product cards
    productCards.forEach((card, index) => {
        card.addEventListener('click', () => openModal(index + 1)); // Pass corresponding product ID (1-based index)
    });

    // Close modal on close button click
    closeModal.addEventListener('click', closeModalHandler);

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModalHandler();
    });
});
