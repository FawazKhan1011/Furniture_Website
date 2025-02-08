document.addEventListener('DOMContentLoaded', () => {
    // Product details
    const productDetails = {
        1: {
            "image": "../img/Stand/Stand (1).jpg",
            "title": "Modern Multi-Tier Stand",
            "meta": "Stylish multi-tier display stand, perfect for shoes and storage.",
            "description": "This modern display stand features multiple levels for organizing and showcasing décor, books, or small plants. With its sleek design and sturdy build, it complements contemporary interiors effortlessly.",
            "features": [
              "Multi-tier open shelving design",
              "Durable wood or MDF construction",
              "Compact yet spacious for display items",
              "Ideal for living rooms, offices, or hallways",
              "Smooth finish for an elegant touch"
            ]
          },
        2: {
            "image": "../img/Stand/Stand (2).png",
            "title": "Minimalist Wooden Stand",
            "meta": "Elegant wooden stand designed for storing shoes and other items.",
            "description": "This minimalist wooden stand is perfect for showcasing shoes in an organized and stylish manner. Its sturdy frame and open design make it a great choice for modern homes.",
            "features": [
              "Solid wood construction",
              "Multiple levels for displaying",
              "Sleek, space-saving design",
              "Suitable for indoor use"
            ]
          },
        3: {
            "image": "../img/Stand/Stand (3).jpg",
            "title": "Modern Style Shoe Rack",
            "meta": "Durable and stylish shoe rack with an modern touch.",
            "description": "This shoe rack features a sturdy wooden frame with wooden shelves, offering a combination of durability and aesthetics. It provides ample space for organizing footwear while maintaining a sleek, modern look.",
            "features": [
              "wooden frame with wood shelves",
              "Multiple tiers for shoe organization",
              "Compact and space-saving",
              "modern aesthetic design",
              "Ideal for entryways, closets, or hallways"
            ]
          },
        4: {
            "image": "../img/Stand/Stand (4).jpg",
            "title": "Elegant Wooden Display Stand",
            "meta": "A luxurious wooden stand perfect for decorative display.",
            "description": "This elegant display stand features a wooden frame with wooden shelves, adding a touch of luxury to any space. Perfect for holding decorative items, books, or collectibles.",
            "features": [
              "Rustic wooden design",
              "Sturdy wooden shelves",
              "Sleek, modern aesthetic",
              "Perfect for living rooms or offices",
              "Easy to clean and maintain"
            ]
          },
        5: {
            "image": "../img/Stand/Stand (5).jpg",
            "title": "Compact Wooden Side Table",
            "meta": "A stylish and compact wooden side table for versatile use.",
            "description": "This compact side table is designed for convenience and style. Its sturdy build and functional design make it a great addition to bedrooms, living rooms, or office spaces.",
            "features": [
              "High-quality wood construction",
              "Space-saving and versatile",
              "Ideal for small items and décor",
              "Smooth finish for a polished look",
              "Lightweight yet durable"
            ]
          },
        6: {
            "image": "../img/Stand/Stand (6).jpg",
            "title": "Modern Console Table with Storage",
            "meta": "A sleek and functional console table perfect for hallways or entryways.",
            "description": "This modern console table combines functionality and style with its clean lines and sturdy build. Ideal for organizing essentials or displaying decorative items, it enhances any space effortlessly.",
            "features": [
              "Durable wood or MDF build",
              "Spacious tabletop for décor",
              "Slim, space-saving design",
              "Ideal for entryways and hallways",
              "Available in multiple finishes"
            ]
          },
        7: {
            "image": "../img/Stand/Stand (7).jpg",
            "title": "Rustic Glass Display Stand",
            "meta": "A high-end glass display stand for an elegant touch.",
            "description": "Featuring a wooden frame and sturdy glass shelves, this rustic display stand is perfect for showcasing collectibles, books, or decorative items in a modern setting.",
            "features": [
              "wooden with polished finish",
              "Glass shelves",
              "Elegant and contemporary design",
              "Perfect for living rooms or showrooms",
              "Easy to assemble and maintain"
            ]
          },
        8: {
            "image": "../img/Stand/Stand (8).jpg",
            "title": "Wooden Nightstand with Storage",
            "meta": "A compact and stylish nightstand with storage space.",
            "description": "This wooden nightstand provides a perfect bedside storage solution with its sleek design and functional compartments. Ideal for bedrooms with a modern or rustic aesthetic.",
            "features": [
              "Solid wood or MDF construction",
              "Storage drawer and open shelf",
              "Compact and functional design",
              "Smooth finish for a refined look",
              "Ideal for bedrooms or small spaces"
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
