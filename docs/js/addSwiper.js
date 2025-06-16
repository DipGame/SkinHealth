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
        // navigation: {
        //     nextEl: ".swiper-button-next-slider_2",
        //     prevEl: ".swiper-button-prev-slider_2",
        // },
        pagination: {
            el: ".swiperBaner-pagination",
            clickable: true,
        }
    });
    let swiperSpecialists = new Swiper(".swiperSpecialists", {
        speed: 1000,
        // loop: true,
        spaceBetween: 20,
        slidesPerView: "auto",
        // navigation: {
        //     nextEl: ".swiper-button-next-slider_2",
        //     prevEl: ".swiper-button-prev-slider_2",
        // },
        navigation: {
            nextEl: ".main-specialists .sw-btn-next",
            prevEl: ".main-specialists .sw-btn-prev",
        },
        breakpoints: {
            721: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            961: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            // 1044: {
            //     slidesPerView: 3,
            //     spaceBetween: 30
            // },
            
        }
    });

    if (document.querySelector('.admin')) {
        console.log('addSwiper.js finish work');
    }
});