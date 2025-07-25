document.addEventListener('DOMContentLoaded', function () {
    const nav = document.getElementById('navBar');
    const triggerSect = document.querySelector('.cover');
    if (!nav || !triggerSect) return;
    function handleScroll() {
        const triggerBottom = triggerSect.getBoundingClientRect().bottom;
        if (triggerBottom <= 0) {
            nav.classList.add('visible');
        } else {
            nav.classList.remove('visible'); 
        }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });
    handleScroll();


});

