
document.addEventListener("DOMContentLoaded", function() {
    var nav = document.getElementById('nav');
    var closeButton = document.getElementById('close');
    var menuButton = document.getElementById('menu');
    var background = document.getElementById('background');

    closeButton.addEventListener('click', function() {
        nav.style.top = '-300%';
        background.classList.add('hidden');
    });

    menuButton.addEventListener('click', function() {
        nav.style.top = '0';
        background.classList.remove('hidden');
        background.classList.add('block');

    });
});

