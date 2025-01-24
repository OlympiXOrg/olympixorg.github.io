
document.addEventListener('DOMContentLoaded', () => {
    const carousel = new bootstrap.Carousel('#carouselExampleAutoplaying', {
        interval: 5000, 
        ride: 'carousel'
    });

    console.log('Carousel initialized:', carousel);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


const buyNowButtons = document.querySelectorAll('.buy-now-btn');

buyNowButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        alert('This feature is not implemented yet. Stay tuned!');
    });
});


const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse).hide();
        }
    });
});
