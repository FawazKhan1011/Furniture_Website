document.addEventListener('DOMContentLoaded', () => {
    // Product details
    const productDetails = {
        1: {
            "image": "../img/Cabinet/cabinet (1).jpg",
            "title": "Modern Wooden Cabinet",
            "meta": "Elegant wooden cabinet with glass panel doors for a sophisticated touch.",
            "description": "This stylish modern cabinet features a sturdy wooden frame complemented by glass panel doors, offering both durability and aesthetic appeal. Ideal for displaying decor while keeping items organized, this cabinet seamlessly blends with any interior style.",
            "features": [
                "Solid wood construction for longevity",
                "Glass panel doors for a refined look",
                "Spacious storage shelves"
            ]
        },
        2: {
            "image": "../img/Cabinet/cabinet (2).jpg",
            "title": "Classic Wooden Storage Cabinet",
            "meta": "A timeless wooden storage cabinet with a natural finish.",
            "description": "Crafted from premium wood, this storage cabinet embodies classic elegance with its smooth finish and sturdy design. Perfect for organizing essentials while adding warmth to any room.",
            "features": [
                "Full wooden construction for durability",
                "Multiple shelves for ample storage",
                "Smooth finish with natural wood grain texture",
                "Sturdy doors with secure latches"
            ]
        },
        3: {
            "image": "../img/Cabinet/cabinet (3).jpg",
            "title": "Minimalist Wooden Cabinet",
            "meta": "A sleek, minimalist cabinet with wooden structure and subtle glass details.",
            "description": "This contemporary cabinet combines wooden craftsmanship with elegant glass accents. The smooth wooden frame ensures durability, while the glass elements enhance its modern aesthetic.",
            "features": [
                "High-quality wooden construction",
                "Glass accents for a modern touch",
                "Adjustable shelving for versatile storage",
                "Compact design suitable for various spaces"
            ]
        },
        4: {
            "image": "../img/Cabinet/cabinet (4).jpg",
            "title": "Tall Modern Wooden Cabinet",
            "meta": "A sophisticated tall wooden cabinet featuring modern design for added elegance.",
            "description": "This tall storage cabinet is designed with a wooden frame and mirrored lined panels for asthetic and create a spacious feel. Its sturdy construction ensures long-lasting durability, making it a functional yet stylish piece.",
            "features": [
                "Premium wood craftsmanship",
                "Mirrored lined panels for a asthetic effect",
                "Ample storage space with multiple compartments",
                "Elegant design suitable for living rooms or bedrooms"
            ]
        },
        5: {
            "image": "../img/Cabinet/cabinet (5).jpg",
            "title": "Rustic Wooden Storage Cabinet with Mirror Door",
            "meta": "A rustic-style storage cabinet with wooden build and mirror-paneled door.",
            "description": "Blending rustic charm with modern functionality, this wooden cabinet features mirror-paneled doors for accessibility. Its robust structure ensures long-term use.",
            "features": [
                "Solid wood frame with a rustic finish",
                "mirrored door for display and accessibility",
                "Multiple compartments for organized storage"
            ]
        },
        6:  {
            "image": "../img/Cabinet/cabinet (6).jpg",
            "title": "Sleek Wooden Sideboard Cabinet",
            "meta": "A contemporary wooden sideboard cabinet with clean lines and ample storage.",
            "description": "This sideboard cabinet is crafted from high-quality wood, featuring a sleek design with generous storage options. Its modern aesthetic makes it an excellent addition to dining rooms, living rooms, or hallways.",
            "features": [
                "Durable wooden construction with smooth finish",
                "Spacious interior with shelves and drawers",
                "Minimalist design with modern appeal",
                "Perfect for dining and living spaces"
            ]
        },
        7: {
            "image": "../img/Cabinet/cabinet (7).jpg",
            "title": "Vintage Wooden Display Cabinet with Glass Doors",
            "meta": "A vintage wooden display cabinet with glass doors for an elegant presentation.",
            "description": "Designed for showcasing collectibles and fine dinnerware, this vintage-style cabinet boasts a solid wood frame with glass doors. Its classic design complements both modern and traditional interiors.",
            "features": [
                "Solid wood frame with a vintage finish",
                "Glass doors for a clear view of displayed items",
                "Spacious interior with adjustable shelving",
                "Elegant metal handles for easy access"
            ]
        },
        8: {
            "image": "../img/Cabinet/cabinet (8).jpg",
            "title": "Elegant Wooden Wardrobe Cabinet with Mirror",
            "meta": "A stylish wooden wardrobe cabinet with a built-in mirror for convenience.",
            "description": "This elegant wardrobe cabinet is made from durable wood and features a full-length mirror, adding both functionality and sophistication to any bedroom. Its spacious interior provides ample room for clothing and accessories.",
            "features": [
                "High-quality wooden frame for stability",
                "Full-length mirror for practicality",
                "Spacious interior with hanging and shelving options",
                "Classic design suitable for various decor styles"
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
