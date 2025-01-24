
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    document.querySelector('.carousel').style.transform = `translateX(-${currentSlide * 50}%)`;
}

setInterval(nextSlide, 5000);
