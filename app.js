document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('navBar');
    const triggerSect = document.querySelector('.coverCredit');
    window.addEventListener('scroll', function() {
        const triggerRect = triggerSect.getBoundingClientRect();
        if (triggerRect.top < 0) {
            nav.classList.add('visible');
        } else {
            nav.classList.remove('visible');
        }
    });
});
