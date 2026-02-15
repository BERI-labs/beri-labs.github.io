/* Mobile menu toggle */
(function () {
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.querySelector('.nav-menu');

    if (!toggle || !menu) return;

    toggle.addEventListener('click', function () {
        var expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        toggle.classList.toggle('is-active');
        menu.classList.toggle('is-open');
    });

    /* Close menu when a nav link is clicked */
    menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            toggle.setAttribute('aria-expanded', 'false');
            toggle.classList.remove('is-active');
            menu.classList.remove('is-open');
        });
    });
})();
