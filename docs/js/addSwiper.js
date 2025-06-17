document.addEventListener("DOMContentLoaded", function () {

    let swiperBaner = new Swiper(".swiperBaner", {
        effect: "fade",
        speed: 1000,
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: ".swiperBaner-pagination",
            clickable: true,
        }
    });
    let swiperSpecialists = new Swiper(".swiperSpecialists", {
        speed: 1000,
        loop: false,
        spaceBetween: 20,
        slidesPerView: "auto",
        navigation: {
            nextEl: ".main-specialists .sw-btn-next",
            prevEl: ".main-specialists .sw-btn-prev",
        },
        breakpoints: {
            721: {
                slidesPerView: 2,
                spaceBetween: 30,
                loop: true,
            },
            961: {
                slidesPerView: 3,
                spaceBetween: 40,
                loop: true,
            },
        }
    });
    let swiperDocsWorks = new Swiper(".swiperDocsWorks", {
        speed: 1000,
        loop: true,
        spaceBetween: 20,
        centeredSlides: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: ".main-works-docs .sw-btn-next",
            prevEl: ".main-works-docs .sw-btn-prev",
        },
        breakpoints: {
            721: {
                slidesPerView: 2,
                spaceBetween: 30,
                loop: true,
            },
            961: {
                slidesPerView: 3,
                spaceBetween: 40,
                loop: true,
            },
        }
    });
    let swiperGallery = new Swiper(".swiperGallery", {
        speed: 1000,
        loop: false,
        spaceBetween: 20,
        slidesPerView: "auto",
        navigation: {
            nextEl: ".main-about .sw-btn-next",
            prevEl: ".main-about .sw-btn-prev",
        },
        breakpoints: {
            501: {
                slidesPerView: 2,
                spaceBetween: 30,
                loop: true,
            },
            961: {
                slidesPerView: 4,
                spaceBetween: 40,
                loop: true,
            },
        }
    });

    if (document.querySelector('.admin')) {
        console.log('addSwiper.js finish work');
    }
});