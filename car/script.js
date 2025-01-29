const slides = document.querySelector('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function updateSlider() {
    const slideWidth = document.querySelector('.slide').clientWidth;
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

prev.addEventListener('click', () => {
    index = (index - 1 + slides.children.length) % slides.children.length;
    updateSlider();
});

next.addEventListener('click', () => {
    index = (index + 1) % slides.children.length;
    updateSlider();
});

window.addEventListener('resize', updateSlider);
setInterval(() => {
    index = (index + 1) % slides.children.length;
    updateSlider();
}, 3000);

