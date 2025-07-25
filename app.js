document.addEventListener('DOMContentLoaded', function () {
    const nav = document.getElementById('navBar');
    const triggerSect = document.querySelector('.coverCredit');
    if (!nav || !triggerSect) return;

    function handleScroll() {
        const triggerTop = triggerSect.getBoundingClientRect().top;

        if (triggerTop <= 0) {
            nav.classList.add('visible');
        } else {
            nav.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });
    handleScroll(); // Initial check
});