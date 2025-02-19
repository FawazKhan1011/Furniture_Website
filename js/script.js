document.addEventListener('DOMContentLoaded', function () {
    // console.log('🔧 Site initialization started.');

    // ===================== 1️⃣ INTRO ANIMATION =====================
    const intro = document.getElementById("intro");
    const mainContent = document.getElementById("main-content");

    const hasPlayedIntro = sessionStorage.getItem("hasPlayedIntro");

    if (hasPlayedIntro) {
        if (intro) intro.style.display = "none";
        if (mainContent) {
            mainContent.style.opacity = "1";
            mainContent.style.visibility = "visible";
            mainContent.classList.add("instant-visible");
        }
    } else {
        if (intro) intro.style.display = "flex";
        if (mainContent) mainContent.style.opacity = "0";

        setTimeout(() => {
            if (intro) intro.style.display = "none";
            if (mainContent) {
                mainContent.style.opacity = "1";
                mainContent.style.visibility = "visible";
            }
            sessionStorage.setItem("hasPlayedIntro", "true");
        }, 4000);
    }

    // ===================== 2️⃣ SEARCH ICON =====================
    const searchIcon = document.getElementById('search-icon');
    const searchInput = document.getElementById('search-input');

    if (searchIcon && searchInput) {
        searchIcon.addEventListener('click', () => {
            searchInput.classList.toggle('active');
            if (searchInput.classList.contains('active')) {
                searchInput.focus();
            }
        });

        document.addEventListener('click', (event) => {
            if (!searchInput.contains(event.target) && !searchIcon.contains(event.target)) {
                searchInput.classList.remove('active');
            }
        });
    }

    // ===================== 3️⃣ DROPDOWN MENU (HAMBURGER) =====================
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');

    if (toggleBtn && toggleBtnIcon && dropDownMenu) {
        toggleBtn.addEventListener('click', () => {
            dropDownMenu.classList.toggle('open');
            const isOpen = dropDownMenu.classList.contains('open');
            toggleBtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 660 && dropDownMenu.classList.contains('open')) {
                dropDownMenu.classList.remove('open');
                toggleBtnIcon.className = 'fa-solid fa-bars';
            }
        });
    }

    // ===================== 4️⃣ MAIN SLIDER FUNCTIONALITY =====================
    const slider = document.querySelector('.slider .list');
    const slides = document.querySelectorAll('.slider .item');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    const dots = document.querySelectorAll('.dots li');
    let index = 0;

    const getSlideWidth = () => document.querySelector('.slider .item')?.clientWidth || 0;

    const moveSlider = (i) => {
        const slideWidth = getSlideWidth();
        if (slideWidth && slider) {
            slider.style.transform = `translateX(${-i * slideWidth}px)`;
            dots.forEach(dot => dot.classList.remove('active'));
            if (dots[i]) dots[i].classList.add('active');
        }
    };

    if (nextBtn && prevBtn && slider && slides.length) {
        nextBtn.addEventListener('click', () => {
            index = (index + 1) % slides.length;
            moveSlider(index);
        });

        prevBtn.addEventListener('click', () => {
            index = (index - 1 + slides.length) % slides.length;
            moveSlider(index);
        });

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                index = i;
                moveSlider(index);
            });
        });

        moveSlider(index);
        window.addEventListener('resize', () => moveSlider(index));
    }

    // ===================== 5️⃣ HEADING ANIMATION (CENTER SCREEN) =====================
    const animateOnScroll = (element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight * 1.5;
        return rect.top < windowHeight / 2 && rect.bottom > windowHeight / 2;
    };

    const titleHeading = document.querySelector('.title-heading');
    const topHeading = document.querySelector('.top-heading');

    const checkHeadingVisibility = () => {
        if (titleHeading && animateOnScroll(titleHeading)) titleHeading.classList.add('visible');
        if (topHeading && animateOnScroll(topHeading)) topHeading.classList.add('visible');
    };

    window.addEventListener('scroll', checkHeadingVisibility);
    checkHeadingVisibility();

    // ===================== 6️⃣ FURNITURE SLIDER (GRAB-TO-SCROLL) =====================
    const furnitureSliders = document.querySelectorAll('.furniture-slider, .furniture-slider2');

    furnitureSliders.forEach(slider => {
        let isDragging = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            slider.classList.add('active');
            e.preventDefault();
        });

        slider.addEventListener('mouseleave', () => {
            isDragging = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDragging = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    });

    // ===================== 7️⃣ MODAL OPEN/RESET SCROLL =====================
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const modal = document.getElementById('product-modal');
            const modalContent = document.querySelector('.modal-content');
            const modalRight = document.querySelector('.modal-right');

            if (modal) modal.style.display = 'flex';

            setTimeout(() => {
                if (modalContent) modalContent.scrollTop = 0;
                if (modalRight) modalRight.scrollTop = 0;
            }, 2); // Increased delay for better reliability
        });
    });

    // ===================== 8️⃣ MODAL CLOSE =====================
    const closeModalBtn = document.querySelector('.close-btn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            const modal = document.getElementById('product-modal');
            if (modal) modal.style.display = 'none';
        });
    }

    // console.log('✅ Site initialization complete.');
});
