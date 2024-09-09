function initializeCarousel(carouselClassName, prevButtonClassName, nextButtonClassName, totalSlides, visibleSlides) {
    const carousel = document.querySelector(`.${carouselClassName}`);
    const prevButton = document.querySelector(`.${prevButtonClassName}`);
    const nextButton = document.querySelector(`.${nextButtonClassName}`);

    let currentIndex = 0;
    let modalIndex = 0;

    function updateCarousel() {
        const translateValue = -currentIndex * (100 / totalSlides);
        carousel.style.transform = `translateX(${translateValue}%)`;
    }

    function updateModalImage() {
        modalImage.src = carousel.children[modalIndex].src;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    function nextModalImage() {
        modalIndex = (modalIndex + 1) % totalSlides;
        updateModalImage();
    }

    function prevModalImage() {
        modalIndex = (modalIndex - 1 + totalSlides) % totalSlides;
        updateModalImage();
    }

    // Event Listeners para os botões de navegação do carrossel
    prevButton.addEventListener('click', function () {
        prevSlide();
        prevModalImage();
    });

    nextButton.addEventListener('click', function () {
        nextSlide();
        nextModalImage();
    });

    // Adiciona lógica para modal
    const modal = document.getElementById(`modal${carouselClassName.charAt(carouselClassName.length - 1)}`);
    const modalImage = document.getElementById(`modalImage${carouselClassName.charAt(carouselClassName.length - 1)}`);
    const closeBtn = document.querySelector(`#modal${carouselClassName.charAt(carouselClassName.length - 1)} .close`);
    const prevModalBtn = document.querySelector(`#modal${carouselClassName.charAt(carouselClassName.length - 1)} .prev${carouselClassName.charAt(carouselClassName.length - 1)}`);
    const nextModalBtn = document.querySelector(`#modal${carouselClassName.charAt(carouselClassName.length - 1)} .next${carouselClassName.charAt(carouselClassName.length - 1)}`);

    function openModal() {
        modal.style.display = 'block';
        modalIndex = currentIndex; // Atualiza o índice do modal para coincidir com o carrossel
        updateModalImage();
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    // Adiciona event listener para abrir o modal
    carousel.addEventListener('click', openModal);

    // Adiciona event listener para fechar o modal
    closeBtn.addEventListener('click', closeModal);

    // Event Listeners para os botões de navegação do modal
    prevModalBtn.addEventListener('click', function () {
        prevModalImage();
    });

    nextModalBtn.addEventListener('click', function () {
        nextModalImage();
    });

    setInterval(function () {
        nextSlide();
    }, 8500);
}
