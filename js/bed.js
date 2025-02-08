document.addEventListener('DOMContentLoaded', () => {
    // Product details
    const productDetails = {
        1: {
            "image": "../img/bed/bed (1).jpg",
            "title": "Modern Wooden Bed with Upholstered Headboard",
            "meta": "A sleek wooden bed with a cushioned headboard for added comfort.",
            "description": "This contemporary wooden bed frame offers a blend of natural aesthetics and comfort. The upholstered headboard with vertical channel tufting enhances the elegance while providing a cozy backrest. Its sturdy wooden frame ensures durability, and the under-bed storage compartments add functionality to your space.",
            "features": [
                "High-quality solid wood frame",
                "Soft upholstered headboard with vertical channel tufting",
                "Built-in under-bed storage drawers",
                "Minimalist and modern design",
                "Neutral color scheme suits various interiors"
            ]
        },
        2: {
            "image": "../img/bed/bed (2).jpg",
            "title": "Sleek Wooden Platform Bed with Extended Headboard",
            "meta": "A stylish and functional wooden platform bed with built-in shelves.",
            "description": "This elegant platform bed combines a rich wooden finish with a spacious extended headboard featuring built-in storage and reading lights. The streamlined design and low-profile frame add a touch of sophistication to modern bedrooms while ensuring durability.",
            "features": [
                "Premium engineered wood construction",
                "Extended headboard with built-in storage compartments",
                "Integrated LED reading lights",
                "Minimalist, space-saving platform design",
                "Suitable for contemporary interiors"
            ]
        },
        3: {
            "image": "../img/bed/bed (3).jpg",
            "title": "Classic Wooden Bed with Ornate Headboard",
            "meta": "A rich, traditional wooden bed with a carved headboard for timeless charm.",
            "description": "Crafted from high-quality solid wood, this bed frame showcases an intricately designed headboard with decorative latticework. The deep wood finish enhances its grandeur, making it an ideal centerpiece for luxurious interiors.",
            "features": [
                "Solid wood frame with a rich finish",
                "Carved headboard with intricate detailing",
                "Under-bed storage drawers for added functionality",
                "Traditional aesthetics with modern durability",
                "Perfect for classic and vintage-inspired interiors"
            ]
        },
        4: {
            "image": "../img/bed/bed (4).jpg",
            "title": "Rustic Wooden Bed with Storage Headboard",
            "meta": "A stylish and practical wooden bed with built-in storage solutions.",
            "description": "This beautifully crafted wooden bed combines rustic charm with modern functionality. The headboard features multiple storage compartments for books and decorative items, making it perfect for maximizing space while adding warmth to your bedroom decor.",
            "features": [
                "Premium solid wood construction",
                "Headboard with built-in open shelves and compartments",
                "Sturdy and durable frame",
                "Timeless rustic aesthetic",
                "Ideal for both modern and classic interiors"
            ]
        },
        5:  {
            "image": "../img/bed/bed (5).jpg",
            "title": "Modern Wooden Bed with Upholstered Panel Headboard",
            "meta": "A sleek wooden bed with a cushioned, segmented headboard for added style.",
            "description": "This contemporary wooden bed features a soft upholstered headboard with segmented panels, adding a touch of elegance and comfort. The warm wood finish complements modern interiors, while its sturdy frame ensures longevity.",
            "features": [
                "Solid wood frame with a dark walnut finish",
                "Soft fabric upholstered headboard with segmented panels",
                "Minimalist and elegant design",
                "Perfect balance of comfort and aesthetics",
                "Compatible with various bedroom styles"
            ]
        },
        6:{
            "image": "../img/bed/bed (6).jpg",
            "title": "Lightwood Bed with Elegant Curved Design",
            "meta": "A beautifully crafted lightwood bed with a graceful curved headboard.",
            "description": "This elegant bed frame showcases a lightwood finish with a gently curved headboard and footboard, adding a sophisticated yet cozy appeal to your bedroom. The durable wooden construction ensures long-lasting support and stability.",
            "features": [
                "High-quality lightwood frame",
                "Elegant curved headboard and footboard",
                "Warm natural finish enhances room ambiance",
                "Durable and sturdy design",
                "Perfect for modern and rustic interiors"
            ]
        },
        7:  {
            "image": "../img/bed/bed (7).jpg",
            "title": "Contemporary Wooden Bed with Upholstered Backrest",
            "meta": "A stylish wooden bed with a padded headboard and built-in shelving.",
            "description": "Designed for comfort and functionality, this modern bed features an extended wooden headboard with built-in shelving for added convenience. The cushioned upholstered backrest enhances relaxation, making it an excellent choice for contemporary homes.",
            "features": [
                "Engineered wood frame with a sleek finish",
                "Upholstered headboard for added comfort",
                "Integrated headboard shelves for storage",
                "Minimalist and space-saving design",
                "Ideal for modern and functional interiors"
            ]
        },
        8: {
            "image": "../img/bed/bed (8).jpg",
            "title": "Luxury Upholstered Bed with Wooden Frame",
            "meta": "A high-end upholstered bed with a striking chevron-patterned headboard.",
            "description": "This premium bed frame combines rich upholstery with a sleek wooden base. The tall, padded headboard features a stylish chevron pattern, adding a sophisticated touch to your bedroom. With its plush cushioning and sturdy wooden foundation, it offers the perfect blend of comfort and elegance.",
            "features": [
                "Luxurious upholstered headboard with chevron design",
                "Solid wooden base for durability",
                "Plush padding for enhanced comfort",
                "Elegant, modern aesthetics",
                "Perfect for high-end bedroom decor"
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
