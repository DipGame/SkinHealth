
document.addEventListener("DOMContentLoaded", function () {

    function addClass(el, class_name) {
        el.classList.add(class_name);
    }
    function removeClass(el, class_name) {
        el.classList.remove(class_name);
    }
    function toggleClass(el, class_name) {
        el.classList.toggle(class_name);
    }

    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    if (document.querySelector('.header-search')) {
        var searchTop = document.querySelector('.header-search');
        var btnCloseSearch = searchTop.querySelector('.close_svg');
        var inputSearch = searchTop.querySelector('#title-search-input');
        var btnOpenSearch = document.querySelectorAll('[data-id="search-btn"]');

        btnCloseSearch.addEventListener('click', () => {
            removeClass(searchTop, "open");
        })

        btnOpenSearch.forEach(btn => {
            btn.addEventListener('click', () => {
                addClass(searchTop, "open");
                inputSearch.focus();
            })
        })
    }

    if (header.querySelector('.header-menu-burger')) {
        const btn_open_menu = header.querySelectorAll('.header-menu-burger');
        const btn_close_menu = header.querySelectorAll('.header-menu-close');
        const header_overlay = header.querySelector('.header_overlay');

        btn_open_menu.forEach(element => {
            element.addEventListener('click', () => {
                addClass(header, "open");
            })
        });

        btn_close_menu.forEach(element => {
            element.addEventListener('click', () => {

                removeClass(header, "open");
            })
        });

        header_overlay.addEventListener('click', () => {
            removeClass(header, "open");
        })
    }

    if (document.querySelector('.header-menu')) {
        const headerMenu = document.querySelector('.header-menu');
        const headerMobCont = document.querySelector('.header-mob_cont');
        const headerMobCont_level_3 = document.querySelector('.header-menu-level-3_cont');
        const linkDropLevel_1 = headerMenu.querySelectorAll('.drop_1 .level-1:not(.menu-services .level-1)');
        const titleLevel_2 = headerMenu.querySelectorAll('.header-menu-level-3_cont h3:not(.header-menu-level-3_flex h3)');
        const linkService = headerMenu.querySelector('.menu-services .level-1');
        const linkLevel_2 = headerMenu.querySelectorAll(".drop_2 .level-2");
        const sectionName = headerMenu.querySelectorAll(".section-name .level-3");
        const helpCont_level_3 = headerMenu.querySelectorAll(".help-cont");


        linkService.addEventListener('click', (e) => {
            e.preventDefault();
        })

        linkDropLevel_1.forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                addClass(headerMobCont, 'no-scr');
                addClass(element.closest('.drop_1'), "open");
            })

            let titleBack = element.closest('.drop_1').querySelector("h3");
            titleBack.addEventListener('click', () => {
                removeClass(element.closest(".no-scr"), "no-scr")
                removeClass(element.closest(".open"), "open")
            })
        });

        linkLevel_2.forEach(link_2 => {
            link_2.addEventListener('click', (e) => {
                e.preventDefault();
                let drop_2 = link_2.closest(".drop_2");

                addClass(headerMobCont, 'no-scr');
                addClass(drop_2, "open");
            })
        });

        helpCont_level_3.forEach(element => {
            element.addEventListener('click', (e) => {
                addClass(element.closest(".header-menu-level-3_cont"), "no-scr");
                addClass(element, "open");
            })
        });

        titleLevel_2.forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                removeClass(element.closest(".no-scr"), "no-scr")
                removeClass(element.closest(".open"), "open")
            })

        });
        sectionName.forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                setTimeout(() => {
                    removeClass(element.closest(".no-scr"), "no-scr")
                    removeClass(element.closest(".open"), "open")
                }, 10);
            })
        });
    }

    if (document.querySelector('.footer-check-height-cont')) {
        const footerCheckHeightCont = document.querySelectorAll('.footer-check-height-cont');

        footerCheckHeightCont.forEach((el) => {
            
            const footerCheckHeight = el.querySelectorAll('.footer-check-height');

            footerCheckHeight.forEach((element) => {

                const elementHeight = element.offsetHeight;

                if (elementHeight > 236) {
                    console.log('dsa');
                    
                    element.classList.add('overflow-hidden-bottom');

                    let dataId = element.getAttribute('data-id');
                    let btn = el.querySelector(`.more-height[data-id="${dataId}"]`);

                    removeClass(btn, "invise");
                    console.log(btn);

                    btn.addEventListener('click', () => {
                        toggleClass(element, "opened");
                        toggleClass(btn, "opened");
                    })
                }
            });
        });
    }

    window.addEventListener('click', (e) => {
        if (searchTop && !e.target.closest(".header-search")) {
            if (e.target.closest('[data-id="search-btn"]')) {
                return;
            }
            removeClass(searchTop, "open");
        }
        // if (e.target.id == 'open-form-popup') {
        //     if (popupForm && overlay_v2) {
        //         addClass(overlay_v2, 'open');
        //         addClass(popupForm, 'open');
        //     }
        // }
    })

    console.log('index.js finish work');
});