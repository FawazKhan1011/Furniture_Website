document.addEventListener('DOMContentLoaded', function() {
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
    searchIcon.addEventListener('click', function() {
        searchInput.classList.toggle('active');
        if (searchInput.classList.contains('active')) {
            searchInput.focus();
        }
    });

    // Click outside search bar to close it
    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !searchIcon.contains(event.target)) {
            searchInput.classList.remove('active');
        }
    });

    // Toggle dropdown menu
    toggleBtn.onclick = function() {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');
        toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    }

    // Slider functionality
    function moveSlider(index) {
        slider.style.transform = `translateX(${-index * 100}vw)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    nextBtn.onclick = function() {
        if (index < slides.length - 1) {
            index++;
        } else {
            index = 0;
        }
        moveSlider(index);
    }

    prevBtn.onclick = function() {
        if (index > 0) {
            index--;
        } else {
            index = slides.length - 1;
        }
        moveSlider(index);
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            index = i;
            moveSlider(index);
        });
    });

    // Initialize slider position
    moveSlider(index);

    window.addEventListener('resize', function() {
        if (window.innerWidth > 660 && dropDownMenu.classList.contains('open')) {
            dropDownMenu.classList.remove('open');
            toggleBtnIcon.classList = 'fa-solid fa-bars';
        }
    });
});
