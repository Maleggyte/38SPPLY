
let index = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
    index = (index + 1) % slides.length;
}

setInterval(showSlides, 3000); // Change slide every 3 seconds


