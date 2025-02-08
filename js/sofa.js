document.addEventListener('DOMContentLoaded', () => {
    // Product details
    const productDetails = {
        1: {
            image: "../img/Sofa/Sofa (1).jpg",
            title: "Contemporary Sofa Set",
            meta: "Elegant and comfortable, ideal for modern living spaces",
            description: "This contemporary sofa set includes a spacious 3-seater, a 2-seater, and two individual armchairs, providing the perfect balance of comfort and style. Upholstered in premium fabric, this set enhances the aesthetics of your living room while ensuring durability.",
            features: ["Premium fabric upholstery",
            "Sturdy wooden frame construction",
            "Includes a 3-seater, 2-seater, and two armchairs",
            "Neutral tone to complement any decor",
            "Ergonomic design for maximum comfort"]
        },
        2: {
            "image": "../img/Sofa/Sofa (2).jpg",
            "title": "Classic Upholstered Sofa",
            "meta": "Elegant design with unmatched comfort, perfect for cozy living spaces.",
            "description": "This classic 3-seater sofa combines timeless design with plush comfort. Featuring intricate upholstery patterns and complementing striped cushions, it adds a warm, inviting touch to your living room. Built with durable materials, it is designed for long-lasting use.",
            "features": [
                "Elegant patterned fabric upholstery",
                "Includes matching decorative cushions",
                "Durable frame and soft foam padding",
                "Spacious 3-seater design",
                "Comfortable and supportive seating"
            ]
        },
        3: {
            "image": "../img/Sofa/Sofa (3).jpg",
            "title": "Luxury Two-Tone Sofa",
            "meta": "Sleek and versatile, ideal for contemporary homes.",
            "description": "This luxury two-tone sofa features a modern design with a blend of soft fabric and durable leatherette. Perfect for creating a stylish and functional living room, it offers supreme comfort and durability.",
            "features": [
                "Two-tone design with fabric and leatherette",
                "Plush, high-density foam cushions",
                "Spacious 3-seater for comfortable lounging",
                "Modern and minimalist aesthetics",
                "Sturdy construction for lasting use"
            ]
        },
        4: {
            image: "../img/Sofa/Sofa (4).jpg",
            title: "Chesterfield Velvet Sofa",
            meta: "Elegant and luxurious, a timeless centerpiece for any space.",
            description: "This Chesterfield-style sofa features plush velvet upholstery with deep button tufting, offering both sophistication and comfort. Its rolled arms and sturdy wooden frame make it a perfect blend of durability and style.",
            features: [
                "Premium velvet upholstery",
                "Deep button tufting",
                "Sturdy wooden frame",
                "Classic Chesterfield design",
                "Available in multiple colors"
            ]
        }
        ,
        5: {
            "image": "../img/Sofa/Sofa (5).jpg",
            "title": "L-Shaped Sofa Bed",
            "meta": "Stylish and functional, perfect for small spaces.",
            "description": "This L-shaped sofa bed offers a perfect combination of style and functionality. It easily transforms into a spacious bed, making it ideal for small apartments or guest rooms. The plush cushions provide maximum comfort, while the hidden storage compartments offer added convenience.",
            "features": [
                "Convertible sofa bed",
                "Hidden storage compartments",
                "Durable and soft fabric",
                "L-shaped design for space efficiency",
                "Includes stylish floral cushions"
            ]
        },
        6: {
            "image": "../img/Sofa/Sofa (6).jpg",
            "title": "Luxury Sectional Sofa Bed",
            "meta": "Spacious and comfortable, perfect for family gatherings.",
            "description": "Designed for ultimate comfort, this luxury sectional sofa bed features a spacious layout, making it perfect for lounging, entertaining, or sleeping. Its premium upholstery and sturdy frame ensure durability, while the pull-out bed function adds versatility.",
            "features": [
                "Premium soft fabric upholstery",
                "Pull-out bed function",
                "Spacious sectional design",
                "Sturdy wooden frame",
                "Elegant quilted stitching"
            ]
        },
        7: {
            "image": "../img/Sofa/Sofa (7).jpg",
            "title": "Golden L-Shaped Sofa",
            "meta": "Elegant and spacious, ideal for a luxurious living room setup.",
            "description": "This L-shaped sofa offers a perfect blend of style and comfort with its plush cushioning and modern design. The golden fabric adds a touch of sophistication, making it an excellent choice for both contemporary and classic interiors.",
            "features": [
                "Premium-quality fabric upholstery",
                "Sturdy and durable frame",
                "Adjustable headrests for added comfort",
                "Spacious seating with a chaise lounge",
                "Hidden storage compartment under the chaise"
            ]
        }
        ,
        8: {
            "image": "../img/Sofa/Sofa (8).jpg",
            "title": "Luxury Sectional Sofa",
            "meta": "Spacious and comfortable, designed for modern homes.",
            "description": "This premium sectional sofa is crafted for those who love both aesthetics and comfort. Featuring a soft, neutral-tone fabric with decorative cushions, it creates a cozy yet stylish ambiance. The additional storage space and elegant design make it a must-have for any home.",
            "features": [
                "High-quality fabric with soft cushioning",
                "Elegant sectional design for ample seating",
                "Includes decorative pillows for extra comfort",
                "Glass-top coffee table with a modern finish",
                "Sturdy construction with long-lasting durability"
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
