window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var backgroundContainer = document.getElementById('background-container');
    var headerHeight = header.offsetHeight;
    var scrollPosition = window.scrollY;

    if (scrollPosition > headerHeight) {
        header.classList.add('visible');
    } else {
        header.classList.remove('visible');
    }
});
