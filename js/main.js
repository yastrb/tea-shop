
document.addEventListener("DOMContentLoaded", function() {
    var nav = document.getElementById('nav');
    var closeButton = document.getElementById('close');
    var menuButton = document.getElementById('menu');

    closeButton.addEventListener('click', function() {
        nav.style.top = '-300%';
    });

    menuButton.addEventListener('click', function() {
        nav.style.top = '0';
    });
});

