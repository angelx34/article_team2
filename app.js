document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('navBar');

    window.addEventListener('scroll', function() {
        const scrollPos = window.scrollY;
        const scrollThreshold = 1000;

        if (scrollPos > scrollThreshold) {
            if (!nav.classList.contains('visible')) {
                nav.classList.add('visible'); // fades IN
            }
        } else {
            if (nav.classList.contains('visible')) {
                nav.classList.remove('visible'); // fades OUT
            }
        }
    });
});
