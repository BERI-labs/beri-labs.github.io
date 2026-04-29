/* Prevent iframe-initiated scrollIntoView from scrolling the parent page.
   When the Beri chat streams a reply it calls scrollIntoView() on new
   messages. The CSSOM spec propagates that call up through parent frames,
   causing the outer page to scroll. We detect when focus is inside the
   iframe, save the scroll position, then cancel any scroll that wasn't
   triggered by the user's own wheel or touch input. */
(function () {
    var iframe = document.querySelector('.device-iframe');
    if (!iframe) return;

    var savedY = 0;
    var active = false;
    var userGesture = false;
    var restoring = false;
    var gestureTimer = null;

    function markGesture() {
        userGesture = true;
        clearTimeout(gestureTimer);
        gestureTimer = setTimeout(function () { userGesture = false; }, 200);
    }
    window.addEventListener('wheel',      markGesture, { passive: true });
    window.addEventListener('touchmove',  markGesture, { passive: true });
    window.addEventListener('touchstart', markGesture, { passive: true });

    function onIframeFocus() {
        active = true;
        savedY = window.scrollY;
    }

    /* Focus moves into the iframe: the window fires 'blur' and
       document.activeElement becomes the iframe element itself. */
    window.addEventListener('blur', function () {
        if (document.activeElement === iframe) onIframeFocus();
    }, true);
    iframe.addEventListener('focus', onIframeFocus);

    window.addEventListener('scroll', function () {
        if (!active || userGesture || restoring) {
            if (!restoring) savedY = window.scrollY;
            return;
        }
        /* Programmatic scroll while iframe is active — cancel it. */
        restoring = true;
        requestAnimationFrame(function () {
            window.scrollTo({ top: savedY, behavior: 'instant' });
            restoring = false;
        });
    }, { passive: true });

    /* Release lock when user clicks outside the iframe. */
    document.addEventListener('mousedown', function (e) {
        if (e.target !== iframe) active = false;
    });
})();

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
