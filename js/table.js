document.addEventListener('DOMContentLoaded', () => {
    // Product details
    const productDetails = {
        1: {
            "image": "../img/Table/table (1).jpg",
            "title": "Elegant Glass-Top Dining Table",
            "meta": "Stylish and modern, perfect for a sophisticated dining experience.",
            "description": "This contemporary dining table set features a sleek glass top with a decorative design, supported by a sturdy wooden frame. The set includes four comfortable chairs with floral-patterned upholstery, making it a perfect blend of elegance and functionality. Ideal for modern dining spaces, this table set adds a touch of luxury to any home.",
            "features": [
                "High-quality tempered glass tabletop",
                "Solid wooden frame for durability",
                "Elegant floral-patterned upholstered chairs",
                "Spacious seating for four people",
                "Sleek modern design with a luxurious finish"
            ]
        },
        2: {
            "image": "../img/Table/table (2).jpg",
            "title": "Modern Wooden Dining Table",
            "meta": "A stylish and durable dining table for contemporary homes.",
            "description": "This modern wooden dining table is crafted from premium solid wood, offering both durability and elegance. Its sleek design complements any dining space, making it a perfect addition to your home.",
            "features": [
                "Solid wood construction",
                "Scratch-resistant surface",
                "Spacious enough for family dining",
                "Available in multiple finishes"
            ]
        },
        3: {
            "image": "../img/table/table (3).jpg",
            "title": "Minimalist Coffee Table",
            "meta": "Sleek and functional, perfect for modern living rooms.",
            "description": "This minimalist coffee table features a clean and contemporary design. Its sturdy construction and compact size make it ideal for small spaces while adding a stylish touch.",
            "features": [
                "Durable wooden top",
                "Lightweight yet sturdy",
                "Easy to clean surface",
                "Available in various colors"
            ]
        },
        4: {
            "image": "../img/table/table (4).jpg",
            "title": "Rustic Wooden Side Table",
            "meta": "A charming and practical side table for any room.",
            "description": "Handcrafted from high-quality reclaimed wood, this rustic side table brings warmth and character to your home. Perfect for holding lamps, books, or decorative pieces.",
            "features": [
                "Made from reclaimed wood",
                "Compact and space-efficient",
                "Natural wood grain finish",
                "Versatile use in any room"
            ]
        },
        5: {
            "image": "../img/table/table (5).jpg",
            "title": "Natural Solid Wood Console Table",
            "meta": "A sturdy and elegant wooden console table for various uses.",
            "description": "Crafted from high-quality solid wood, this console table blends functionality with natural beauty. Its timeless design makes it perfect for entryways, hallways, or living rooms.",
            "features": [
                "100% solid wood construction",
                "Smooth, polished surface",
                "Minimalist yet elegant design",
                "Perfect for entryways or hallways"
            ]
        },
        6: {
            "image": "../img/table/Table (6).jpg",
            "title": "Scandinavian Dining Table",
            "meta": "A modern dining table inspired by Scandinavian design.",
            "description": "With clean lines and a simple yet elegant structure, this Scandinavian dining table is a perfect fit for contemporary interiors. The smooth surface and sturdy legs ensure long-lasting durability.",
            "features": [
                "Minimalist Scandinavian design",
                "Durable wooden construction",
                "Easy-to-clean surface",
                "Perfect for both small and large spaces"
            ]
        },
        7: {
            "image": "../img/table/Table (7).jpg",
            "title": "Elegant Glass Coffee Table",
            "meta": "A stylish glass coffee table that enhances any space.",
            "description": "This elegant coffee table features a durable tempered glass top and a sleek metal frame. Its modern design makes it an excellent choice for contemporary living rooms.",
            "features": [
                "Tempered glass tabletop",
                "Sturdy metal frame",
                "Easy to maintain and clean",
                "Ideal for modern interiors"
            ]
        },
        8:{
            "image": "../img/table/Table (8).jpg",
            "title": "Classic Wooden Dining Table",
            "meta": "A timeless wooden dining table with a spacious design.",
            "description": "Blending traditional craftsmanship with modern durability, this classic wooden dining table offers a spacious surface for family meals and gatherings. Its elegant design complements various décor styles.",
            "features": [
                "Solid wood construction",
                "Spacious and comfortable seating",
                "Scratch-resistant finish",
                "Timeless and elegant aesthetic"
            ]
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
