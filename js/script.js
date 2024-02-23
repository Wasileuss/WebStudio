window.addEventListener('load', function() {
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__navigation');

    const overlay = document.querySelector('#overlay');
    const open = document.querySelector('#open');
    const close = document.querySelector('#close');

    function updateClasses(mediaQuery) {
        // Перевірка чи відповідає вікно умові
        if (mediaQuery.matches) {
            burger.classList.remove('active');
            menu.classList.remove('active');
            document.body.classList.remove('lock');
        }
    }

    // Визначення об'єкта media query
    const mediaQuery = window.matchMedia('(min-width: 597.98px)');

    // Викликати функцію при завантаженні та при зміні media query
    window.addEventListener('load', function() {
        updateClasses(mediaQuery);
    });

    mediaQuery.addEventListener('change', function() {
        updateClasses(mediaQuery);
    });

    burger.addEventListener('click', function(event) {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.classList.toggle('lock');
    });

    open.addEventListener('click', function(event) {
        overlay.classList.add('open');
        document.body.classList.add('lock');
    });

    close.addEventListener('click', function(event) {
        overlay.classList.remove('open');
        document.body.classList.remove('lock');
    });
});