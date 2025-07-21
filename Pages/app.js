window.addEventListener('scroll', function(){
    const nav = document.getElementById('navBar');
    const scrollPos = window.scrollY;
    const scrollThreshold = 1000;
    if (scrollPos > scrollThreshold){
        nav.style.display = 'inline-flex';
        nav.style.transition ='opacity 0.5s ease';
        console.log("IT WORKS");
    } else{
        nav.style.display = 'none';
        nav.style.transition ='opacity 0.5s ease';
    }
});
