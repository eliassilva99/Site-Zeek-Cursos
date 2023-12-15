// carousel.js

function initializeCarousel(carouselClassName, prevButtonClassName, nextButtonClassName, totalSlides, visibleSlides) {
    const carousel = document.querySelector(`.${carouselClassName}`);
    const prevButton = document.querySelector(`.${prevButtonClassName}`);
    const nextButton = document.querySelector(`.${nextButtonClassName}`);

    let currentIndex = 0;

    function updateCarousel() {
        const translateValue = -currentIndex * (100 / totalSlides);
        carousel.style.transform = `translateX(${translateValue}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    // Automação: Mudar automaticamente os slides a cada 3 segundos (3000 milissegundos)
    setInterval(nextSlide, 3000);

    // Event Listeners para os botões de navegação
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
}
