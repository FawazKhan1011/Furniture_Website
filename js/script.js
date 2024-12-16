document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.getElementById('search-icon');
    const searchInput = document.getElementById('search-input');
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');
    const slider = document.querySelector('.slider .list');
    const slides = document.querySelectorAll('.slider .item');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    const dots = document.querySelectorAll('.dots li');
    let index = 0;

    // Search Icon Click
    searchIcon.addEventListener('click', function () {
        searchInput.classList.toggle('active');
        if (searchInput.classList.contains('active')) {
            searchInput.focus();
        }
    });

    // Click outside search bar to close it
    document.addEventListener('click', function (event) {
        if (!searchInput.contains(event.target) && !searchIcon.contains(event.target)) {
            searchInput.classList.remove('active');
        }
    });

    // Toggle dropdown menu
    toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');
        toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    }

    // Calculate slide width
    function getSlideWidth() {
        return Math.round(document.querySelector('.slider .item').clientWidth); // Use the item width directly
    }

    // Move slider function
    function moveSlider(index) {
        const slideWidth = getSlideWidth();
        slider.style.transform = `translateX(${-index * slideWidth}px)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    // Next button functionality
    nextBtn.onclick = function () {
        index = (index + 1) % slides.length;
        moveSlider(index);
    }

    // Previous button functionality
    prevBtn.onclick = function () {
        index = (index - 1 + slides.length) % slides.length;
        moveSlider(index);
    }

    // Dots navigation functionality
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            index = i;
            moveSlider(index);
        });
    });

    // Initialize slider position
    moveSlider(index);

    // Update slide position on resize
    window.addEventListener('resize', function () {
        moveSlider(index);
        if (window.innerWidth > 660 && dropDownMenu.classList.contains('open')) {
            dropDownMenu.classList.remove('open');
            toggleBtnIcon.classList = 'fa-solid fa-bars';
        }
    });

    // Unified scroll animation for both headings
    const titleHeading = document.querySelector('.title-heading');
    const topHeading = document.querySelector('.top-heading');

    const scrollHandler = () => {
        const headingPositionTitle = titleHeading.getBoundingClientRect().top;
        const headingPositionTop = topHeading.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (headingPositionTitle < windowHeight - 100) {
            titleHeading.classList.add('visible');
        }

        if (headingPositionTop < windowHeight - 100) {
            topHeading.classList.add('visible');
        }
    };

    window.addEventListener('scroll', scrollHandler);
    // Trigger scroll handler on page load to check initial visibility
    scrollHandler();

    // Grab and scroll functionality for furniture sliders
    const furnitureSlider1 = document.querySelector('.furniture-slider');
    const furnitureSlider2 = document.querySelector('.furniture-slider2');

    // Function to enable grab and scroll for a slider with increased sensitivity
    function enableGrabScroll(slider) {
        let isDown = false;
        let startX;
        let scrollLeft;

        // Mouse down event
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            e.preventDefault(); // Prevents unwanted text selection
        });

        // Mouse leave event
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        // Mouse up event
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        // Mouse move event
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return; // Stop if the mouse is not held down
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 4; // Higher sensitivity (multiply by 4)
            slider.scrollLeft = scrollLeft - walk;
        });
    }

    // Enable grab and scroll on both sliders
    enableGrabScroll(furnitureSlider1);
    enableGrabScroll(furnitureSlider2);
});
