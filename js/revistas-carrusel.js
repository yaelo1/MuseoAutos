function showSlide(carruselIndex, index) {
    const carrusel = document.querySelectorAll(".contenedor-carrusel-revistas")[carruselIndex];
    const slides = carrusel.querySelectorAll(".carrusel-revistas");
    slides.forEach((slide) => (slide.style.display = "none"));
    slides[index].style.display = "block";
}

function nextSlide(carruselIndex) {
    const carrusel = document.querySelectorAll(".contenedor-carrusel-revistas")[carruselIndex];
    let slideIndex = parseInt(carrusel.dataset.slideIndex);
    const slides = carrusel.querySelectorAll(".carrusel-slide");

    slideIndex = (slideIndex + 1) % slides.length;
    carrusel.dataset.slideIndex = slideIndex;
    showSlide(carruselIndex, slideIndex);
}

function prevSlide(carruselIndex) {
    const carrusel = document.querySelectorAll(".contenedor-carrusel-revistas")[carruselIndex];
    let slideIndex = parseInt(carrusel.dataset.slideIndex);
    const slides = carrusel.querySelectorAll(".carrusel-revistas");

    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    carrusel.dataset.slideIndex = slideIndex;
    showSlide(carruselIndex, slideIndex);
}


document.querySelectorAll(".contenedor-carrusel-revistas").forEach((carrusel, index) => {
    carrusel.dataset.slideIndex = 0;
    showSlide(index, 0);
});
