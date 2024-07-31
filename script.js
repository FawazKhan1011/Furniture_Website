document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('search-icon');
    const searchInput = document.getElementById('search-input');
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');

    searchIcon.addEventListener('click', function() {
        if (searchInput.classList.contains('active')) {
            searchInput.classList.remove('active');
        } else {
            searchInput.classList.add('active');
            searchInput.focus();
        }
    });

    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !searchIcon.contains(event.target)) {
            searchInput.classList.remove('active');
        }
    });

    toggleBtn.onclick = function() {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');
        toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    }
});
