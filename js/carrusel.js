function showSlide(carruselIndex, index) {
    const carrusel = document.querySelectorAll(".contenedor-carrusel")[carruselIndex];
    const slides = carrusel.querySelectorAll(".carrusel-slide");
    slides.forEach((slide) => (slide.style.display = "none"));
    slides[index].style.display = "block";

    const bolitas = carrusel.querySelectorAll(".bolita");
    bolitas.forEach((bolita) => bolita.classList.remove("activo"));
    bolitas[index].classList.add("activo");
}

function nextSlide(carruselIndex) {
    const carrusel = document.querySelectorAll(".contenedor-carrusel")[carruselIndex];
    let slideIndex = parseInt(carrusel.dataset.slideIndex);
    const slides = carrusel.querySelectorAll(".carrusel-slide");

    slideIndex = (slideIndex + 1) % slides.length;
    carrusel.dataset.slideIndex = slideIndex;
    showSlide(carruselIndex, slideIndex);
}

function prevSlide(carruselIndex) {
    const carrusel = document.querySelectorAll(".contenedor-carrusel")[carruselIndex];
    let slideIndex = parseInt(carrusel.dataset.slideIndex);
    const slides = carrusel.querySelectorAll(".carrusel-slide");

    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    carrusel.dataset.slideIndex = slideIndex;
    showSlide(carruselIndex, slideIndex);
}


document.querySelectorAll(".contenedor-carrusel").forEach((carrusel, index) => {
    carrusel.dataset.slideIndex = 0;
    showSlide(index, 0);
});


