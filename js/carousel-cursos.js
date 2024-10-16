var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 0,
    loop: true,
spaceBetween: 10,
autoplay: 2000,
    autoplayDisableOnInteraction: false,
    slidesPerView: 5,
    coverflow: {
        rotate: 20,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slideShadows : true
    }
});