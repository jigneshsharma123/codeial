// Add a scroll event listener
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    
    if (window.scrollY > 100) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
});

