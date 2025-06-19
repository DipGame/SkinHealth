
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

    let loadSvg = document.getElementById('load-svg');

    function addLoad() {
        addClass(loadSvg, 'open');
    }
    function removeLoad() {
        removeClass(loadSvg, 'open');
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

    if (document.querySelector('.quest')) {
        const quests = document.querySelectorAll('.quest');

        quests.forEach(quest => {
            if (quest.querySelector(".quest-sect .quest-title")) {
                const titles = quest.querySelectorAll(".quest-sect .quest-title");

                titles.forEach((title) => {
                    let sect_check = title.closest(".quest-sect"); // Находим родительский .quest-sect
                    let cont_check = sect_check.querySelector(".quest-cont"); // Находим .quest-cont внутри .quest-sect

                    // Проверяем, существует ли .quest-cont
                    if (cont_check) {
                        if (sect_check.classList.contains("active")) {
                            // Вычисляем реальную высоту содержимого
                            cont_check.style.height = "auto"; // Временно устанавливаем высоту в "auto"
                            const height = cont_check.scrollHeight; // Получаем высоту содержимого
                            cont_check.style.height = "0"; // Возвращаем высоту к 0 для анимации
                            setTimeout(() => {
                                cont_check.style.height = `${height}px`; // Устанавливаем высоту для анимации
                            }, 10); // Небольшая задержка для корректной работы браузера
                        } else {
                            // Анимируем закрытие
                            cont_check.style.height = `${cont_check.scrollHeight}px`; // Фиксируем текущую высоту
                            setTimeout(() => {
                                cont_check.style.height = "0"; // Уменьшаем высоту до 0
                            }, 10); // Небольшая задержка для корректной работы браузера
                        }

                        sect_check.addEventListener('click', () => {
                            const cont = sect_check.querySelector(".quest-cont"); // Находим .cont внутри .sect

                            // Проверяем, существует ли .quest-cont
                            if (cont) {
                                // Переключаем класс active
                                sect_check.classList.toggle("active");

                                if (sect_check.classList.contains("active")) {
                                    // Вычисляем реальную высоту содержимого
                                    cont.style.height = "auto"; // Временно устанавливаем высоту в "auto"
                                    const height = cont.scrollHeight; // Получаем высоту содержимого
                                    cont.style.height = "0"; // Возвращаем высоту к 0 для анимации
                                    setTimeout(() => {
                                        cont.style.height = `${height}px`; // Устанавливаем высоту для анимации
                                    }, 10); // Небольшая задержка для корректной работы браузера
                                } else {
                                    // Анимируем закрытие
                                    cont.style.height = `${cont.scrollHeight}px`; // Фиксируем текущую высоту
                                    setTimeout(() => {
                                        cont.style.height = "0"; // Уменьшаем высоту до 0
                                    }, 10); // Небольшая задержка для корректной работы браузера
                                }
                            }
                        });
                    }
                });
            }
        });

    }

    if (document.querySelector('.sect_filt_v1')) {
        const sect_filt_v1 = document.querySelector('.sect_filt_v1');
        const all_btn_filt_v1 = sect_filt_v1.querySelectorAll('.btn_filt_v1');
        const all_cont_filt_v1 = sect_filt_v1.querySelectorAll('.cont_filt_v1');

        let check_12;

        if (sect_filt_v1.classList.contains('no-first-active')) {
            check_12 = true;
        }

        let num_1 = 0;
        let dataIdCheck;
        all_btn_filt_v1.forEach(btn => {
            let btnDataId = btn.getAttribute("data-id");

            if (!check_12) {
                if (num_1 == 0) {
                    addClass(btn, 'active');
                    dataIdCheck = btnDataId;
                } else {
                    removeClass(btn, 'active');
                }

                all_cont_filt_v1.forEach(cont => {
                    if (num_1 == 0) {
                        addClass(cont, 'invise');
                    } else {
                        removeClass(cont, 'invise');
                    }

                });
            }


            btn.addEventListener('click', () => {


                if (sect_filt_v1.classList.contains('sect_filt_toggle')) {
                    if (btn.classList.contains("active")) {
                        all_cont_filt_v1.forEach(cont => {
                            removeClass(cont, 'invise');
                        });
                        removeClass(btn, 'active');
                    } else {
                        if (btnDataId == "all") {
                            all_btn_filt_v1.forEach(el => {
                                removeClass(el, 'active');
                            })

                            all_cont_filt_v1.forEach(cont => {
                                removeClass(cont, 'invise');
                            });

                        } else {
                            all_btn_filt_v1.forEach(el => {
                                removeClass(el, 'active');
                            })

                            all_cont_filt_v1.forEach(cont => {
                                let contDataId = cont.getAttribute("data-id");
                                if (btnDataId != contDataId) {
                                    addClass(cont, 'invise');
                                } else {
                                    removeClass(cont, 'invise');
                                }
                            });
                        }

                        addClass(btn, 'active');
                    }
                } else {
                    if (btnDataId == "all") {
                        all_btn_filt_v1.forEach(el => {
                            removeClass(el, 'active');
                        })

                        all_cont_filt_v1.forEach(cont => {
                            removeClass(cont, 'invise');
                        });

                    } else {
                        all_btn_filt_v1.forEach(el => {
                            removeClass(el, 'active');
                        })

                        all_cont_filt_v1.forEach(cont => {
                            let contDataId = cont.getAttribute("data-id");
                            if (btnDataId != contDataId) {
                                addClass(cont, 'invise');
                            } else {
                                removeClass(cont, 'invise');
                            }
                        });
                    }
                    addClass(btn, 'active');
                }
            })

            num_1++;
        });

        if (!check_12) {
            all_cont_filt_v1.forEach(cont => {
                let contDataId = cont.getAttribute("data-id");

                if (dataIdCheck == "all") {
                    removeClass(cont, 'invise');
                } else if (dataIdCheck != contDataId) {
                    addClass(cont, 'invise');
                } else {
                    removeClass(cont, 'invise');
                }

            });
        }

    }

    if (document.querySelector('[data-check-lines]')) {
        const checkLinesElements = document.querySelectorAll('[data-check-lines]');

        checkLinesElements.forEach(el => {
            let lineHeight = parseInt(window.getComputedStyle(el).lineHeight); // Определяем высоту строки
            let lineCount = Math.ceil(el.scrollHeight / lineHeight) - 1; // Делим полную высоту на высоту строки для подсчёта их числа 🧮

            let dataCheckLines = el.getAttribute("data-check-lines");
            let dataId = el.getAttribute("data-id");
            let buttonMore = document.querySelector(`.button-more[data-id="${dataId}"]`);
            let buttonMoreText = buttonMore.textContent.trim();

            if (dataCheckLines && lineCount > dataCheckLines) {
                removeClass(buttonMore, 'invise');

                el.setAttribute("style", `-webkit-line-clamp: ${dataCheckLines}`);

                buttonMore.addEventListener('click', () => {
                    if (el.classList.contains("opened")) {
                        removeClass(el, 'opened');
                        buttonMore.textContent = buttonMoreText;
                    } else {
                        addClass(el, 'opened');
                        buttonMore.textContent = "Скрыть";
                    }
                })
            } else if (lineCount > 2) {
                removeClass(buttonMore, 'invise');

                buttonMore.addEventListener('click', () => {
                    if (el.classList.contains("opened")) {
                        removeClass(el, 'opened');
                        buttonMore.textContent = buttonMoreText;
                    } else {
                        addClass(el, 'opened');
                        buttonMore.textContent = "Скрыть";
                    }
                })
            }
        });
    }




    if (document.querySelector('[data-href]')) {
        const data_href = document.querySelectorAll('[data-href]');

        data_href.forEach(element => {

            element.addEventListener('click', (e) => {

                if (e.target.getAttribute('data-popup-open')) {
                    return;
                }

                if (e.target.tagName == 'A') {
                    return;
                }

                window.location = element.getAttribute('data-href');
            })
        });
    }

    if (document.querySelector('.checkbox')) {
        const checkboxs = document.querySelectorAll('.checkbox');

        checkboxs.forEach(el => {
            let checkBoxBtn = el.querySelector('.check-box-btn');

            checkBoxBtn.addEventListener('click', () => {
                if (checkBoxBtn.getAttribute('data-toggle') == 'y') {
                    toggleClass(el, 'checked');
                } else {
                    addClass(el, 'checked');
                    removeClass(el, 'err');
                }
            })
        });
    }

    if (document.querySelector('form')) {
        var overlay = document.querySelector('.overlay');
        var popupCheck = document.querySelector('.popupCheck')
        var popupCheckCloseBtn = popupCheck.querySelector('.close-btn');

        popupCheckCloseBtn.addEventListener('click', () => {
            removeClass(overlay, 'open');
            removeClass(popupCheck, 'open');
        })
        overlay.addEventListener('click', () => {
            document.querySelectorAll('.open').forEach(el => {
                removeClass(el, 'open');
            })
        })

        if (document.querySelector('.btn_pop')) {
            const btnPopAdd = document.querySelectorAll('.btn_pop')

            btnPopAdd.forEach(element => {
                element.addEventListener('click', () => {
                    addClass(overlay, 'open');
                })
            });
        }

    }

    if (document.querySelector('[data-popup-open]')) {
        let popupOpenBtns = document.querySelectorAll('[data-popup-open]');

        popupOpenBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                let btnDataId = btn.getAttribute('data-popup-open');

                let dataPopupServiceName = btn.getAttribute('data-popup-service-name');

                let dataPopupStockName = btn.getAttribute('data-popup-stock-name');

                let dataPopupServiceLink = btn.getAttribute('data-popup-service-link');

                let popup = document.getElementById(`${btnDataId}`);
                if (popup) {

                    let popupForm = popup.querySelector("form");

                    if (popupForm) {

                        let serviceLinkInput = popupForm.querySelector('input[name="service-link"]');
                        if (serviceLinkInput) {
                            popupForm.removeChild(serviceLinkInput);
                        }

                        let serviceNameInput = popupForm.querySelector('input[name="service-name"]');
                        if (serviceNameInput) {
                            popupForm.removeChild(serviceNameInput);
                        }

                        let stockNameInput = popupForm.querySelector('input[name="stock-name"]');
                        if (stockNameInput) {
                            popupForm.removeChild(stockNameInput);
                        }

                        if (dataPopupStockName) {
                            let stockNameInput = document.createElement("input");
                            stockNameInput.type = "hidden";
                            stockNameInput.name = "stock-name";
                            stockNameInput.value = dataPopupStockName;
                            popupForm.appendChild(stockNameInput);

                        }

                        if (dataPopupServiceName) {
                            let serviceNameInput = document.createElement("input");
                            serviceNameInput.type = "hidden";
                            serviceNameInput.name = "service-name";
                            serviceNameInput.value = dataPopupServiceName;
                            popupForm.appendChild(serviceNameInput);

                        }

                        if (dataPopupServiceLink) {
                            let serviceLinkInput = document.createElement("input");
                            serviceLinkInput.type = "hidden";
                            serviceLinkInput.name = "service-link";
                            serviceLinkInput.value = dataPopupServiceLink;
                            popupForm.appendChild(serviceLinkInput);
                        }

                    }

                    addClass(overlay, 'open');
                    addClass(popup, 'open');
                } else {
                    console.error(`Попап с ID: ${btnDataId} не найден`);
                }
            })
        });
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
                if (elementHeight > 202) {
                    element.classList.add('overflow-hidden-bottom');
                    let dataId = element.getAttribute('data-id');
                    let btn = el.querySelector(`.more-height[data-id="${dataId}"]`);
                    removeClass(btn, "invise");
                    btn.addEventListener('click', () => {
                        toggleClass(element, "opened");
                        toggleClass(btn, "opened");
                    })
                }
            });
        });
    }

    if (document.querySelector('.footer-menu')) {
        const footerMenu = document.querySelector('.footer-menu');
        const footerMenuConts = footerMenu.querySelectorAll('.footer-menu_cont');

        footerMenuConts.forEach(element => {
            let cont = element.querySelector('.cont');

            cont.addEventListener('click', (e) => {
                if (window.screen.width < 501) {
                    toggleClass(element, "open");
                    e.preventDefault();
                }
            })
        });
    }

    if (document.querySelector('.form-all')) {
        const formSect = document.querySelectorAll(".form-all");
        const titlePopupCheck = popupCheck.querySelector('h2');

        let widgetId;

        function handleCaptcha(btn, input) {

            if (!window.smartCaptcha) {
                console.error("SmartCaptcha не загружен.");
                return;
            }

            widgetId = window.smartCaptcha.render(`captcha-container`, {
                sitekey: 'ysc1_rEeGlG3upy3b6RjeEnQhmqBDK9JSUH7k51O5Gre4a839fd60', // Замените на ваш Client Key
                invisible: true, // Указываем, что капча невидимая
                callback: (token) => {
                    input.value = token;
                    btn.click();
                },
            });
        }

        formSect.forEach(formSect => {

            let form = formSect.querySelector("form");
            let formBtn = formSect.querySelector("[type='submit']");
            let nameInp = formSect.querySelector("[name='name']");
            let phoneInp = formSect.querySelector("[name='phone']");
            let emailInp = formSect.querySelector("[name='email']");

            let checkBoxBtn = formSect.querySelector("[data-processing]");

            if (checkBoxBtn) {
                // addClass(checkBoxBtn, 'checked');
            }

            if (formSect.classList.contains('popupForm')) {
                let closePopupBtn = formSect.querySelector('.close-btn');

                closePopupBtn.addEventListener('click', () => {
                    removeClass(overlay, 'open');
                    removeClass(formSect, 'open');
                })

                formSect.addEventListener('click', (e) => {
                    if (e.target.classList.contains('popupForm')) {
                        overlay.click();
                    }
                })
            }

            function allCheck() {
                if (checkInputsValid(nameInp, 1) && checkInputsValid(phoneInp, 17) && checkCheckBox(checkBoxBtn)) {
                    return true;
                } else {
                    return false;
                }
            }

            function checkCheckBox(checkbox) {
                if (checkbox.classList.contains('checked')) {
                    removeClass(checkbox, 'err');
                    return true;
                } else {
                    addClass(checkbox, 'err');
                    return false;
                }
            }

            window.addEventListener("DOMContentLoaded", function () {
                [].forEach.call(document.querySelectorAll("[name='phone']"), function (input) {
                    var keyCode;
                    function mask(event) {
                        event.keyCode && (keyCode = event.keyCode);
                        var pos = this.selectionStart;
                        if (pos < 3) event.preventDefault();
                        var matrix = "+7 (___) ___ ____",
                            i = 0,
                            def = matrix.replace(/\D/g, ""),
                            val = this.value.replace(/\D/g, ""),
                            new_value = matrix.replace(/[_\d]/g, function (a) {
                                return i < val.length ? val.charAt(i++) : a
                            });
                        i = new_value.indexOf("_");
                        if (i != -1) {
                            i < 5 && (i = 3);
                            new_value = new_value.slice(0, i)
                        }
                        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                            function (a) {
                                return "\\d{1," + a.length + "}"
                            }).replace(/[+()]/g, "\\$&");
                        reg = new RegExp("^" + reg + "$");
                        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                            this.value = new_value;
                        }
                        if (event.type == "blur" && this.value.length < 5) {
                            this.value = "";
                        }
                    }

                    input.addEventListener("input", mask, false);
                    input.addEventListener("focus", mask, false);
                    input.addEventListener("blur", mask, false);
                    input.addEventListener("keydown", mask, false);

                });
            });

            $(function () {
                $(nameInp).keyup(function () {
                    sergey = $(this).val().toLowerCase(), spout = 'http://,https,url,.ru,.com,.net,.tk,php,.ucoz,www,.ua,.tv,.info,.org,.su,.ру,.су,.ком,.инфо,//'.split(',');
                    for (litvinov = 0; litvinov < spout.length; litvinov++) {
                        if (sergey.search(spout[litvinov]) != -1) {
                            $(this).val(sergey.replace(spout[litvinov], '[Запрещено]'));
                            return true;
                        }
                    }
                });
            });

            function checkInputsValid(input, num) {
                if (input.value.length < num) {
                    input.parentNode.classList.add("err");
                    formBtn.disabled = true;
                    return false;
                } else {
                    input.parentNode.classList.remove("err");

                    return true;
                }
            }

            let check;

            function addLisInput(input, num) {
                checkInputsValid(input, num);
                input.addEventListener('input', check = () => {
                    checkInputsValid(input, num);
                    if (allCheck()) {
                        formBtn.disabled = false;
                    } else {
                        formBtn.disabled = true;
                    }
                })
            }

            function removeLisInput(input) {
                input.removeEventListener('input', check)
            }

            let check_4;

            function addLisCheckBox(checkbox) {
                checkCheckBox(checkbox);
                checkbox.addEventListener('click', check_4 = () => {
                    checkCheckBox(checkbox);
                    if (allCheck()) {
                        formBtn.disabled = false;
                    } else {
                        formBtn.disabled = true;
                    }
                })
            }

            function removeLisCheckBox(checkbox) {
                checkbox.removeEventListener('click', check_4);
            }

            function clearInputs(input) {
                removeLisInput(input);

                // if (checkBoxBtn) {
                //     removeClass(checkBoxBtn, 'err');
                //     removeClass(checkBoxBtn, 'checked');
                // }

                input.value = '';
            }

            function handleTextGood() {
                // window.smartCaptcha.destroy(widgetId);
                addLoad();
                setTimeout(() => {
                    removeLoad();
                    titlePopupCheck.textContent = 'Спасибо за заявку! Скоро мы вам перезвоним!';
                    removeClass(formSect, 'open');
                    addClass(overlay, 'open')
                    addClass(popupCheck, 'open')
                    if (nameInp) {
                        clearInputs(nameInp);
                    }
                    clearInputs(phoneInp);
                    if (emailInp) {
                        clearInputs(emailInp);
                    }

                    // clearInputs(captchaInp);
                    setTimeout(() => {
                        document.querySelectorAll('.open').forEach(el => {
                            removeClass(el, 'open');
                        })
                    }, 3500);
                }, 1000);

            }

            function handleTextNoGood() {
                removeLoad();
                titlePopupCheck.textContent = 'Повторите попытку позже';
                removeClass(formSect, 'open');
                addClass(popupCheck, 'open');
                setTimeout(() => {
                    if (overlay.classList.contains('open')) {
                        addClass(formSect, 'open');
                    }
                }, 3500);
            }

            function handleTextError() {
                removeLoad();
                titlePopupCheck.textContent = 'Что-то пошло не так';
                removeClass(formSect, 'open');
                addClass(popupCheck, 'open');
                setTimeout(() => {
                    if (overlay.classList.contains('open')) {
                        addClass(formSect, 'open');
                    }
                }, 3500);
            }

            // Создаем скрытое поле для токена капчи
            let captchaTokenInput = document.createElement('input');
            captchaTokenInput.type = 'hidden';
            captchaTokenInput.name = `captcha_token`;

            // Добавляем скрытое поле в начало текущей формы
            form.prepend(captchaTokenInput);

            let captchaInp = form.querySelector(`[name="captcha_token"]`);

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                removeLisInput(phoneInp);

                if (nameInp) {
                    removeLisInput(nameInp);
                    addLisInput(nameInp, 1);
                }
                addLisInput(phoneInp, 17);

                if (checkBoxBtn) {
                    removeLisCheckBox(checkBoxBtn);
                    addLisCheckBox(checkBoxBtn);
                }

                if (allCheck()) {
                    // if (!captchaInp.value) {
                    //     handleCaptcha(formBtn, captchaInp);
                    //     window.smartCaptcha.execute(widgetId);
                    //     // setTimeout(() => {
                    //     //     removeLoad();
                    //     // }, 10000);
                    //     return;
                    // } else {
                    addLoad();

                    let formData = new FormData(form);
                    formData.append('captcha_token', captchaInp.value);



                    // fetch('/local/templates/main/tools/send.php', {
                    //     method: 'POST',
                    //     body: formData,
                    // })
                    //     .then((res) => res.json())
                    //     .then(result => {
                    //         if (result.success) {
                    //             handleTextGood();
                    //         } else {
                    //             handleTextNoGood();
                    //         }
                    //     })
                    //     .catch((err) => {
                    //         handleTextError();
                    //         console.log(err);
                    //     });
                    handleTextGood();
                }

                // }

            })
        });
    }

    if (document.querySelector('.sogl')) {
        const sogl = document.querySelector('.sogl');
        const soglBtn = sogl.querySelector('.button');

        var date = new Date();
        function getCookie(name) {
            var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }

        if (getCookie('time_open') && getCookie('click_sogl_ok')) {
            let one = date.getMinutes();
            let two = getCookie('time_open');
            if (one > two) {
                let rez = one - two;
                if (rez >= 50 || !getCookie('click_sogl_ok')) {

                    soglBtn.addEventListener('click', () => {
                        document.cookie = `click_sogl_ok=true; path=/`;
                        sogl.classList.add("invise");
                    })
                    sogl.classList.remove("invise");
                }
            } else if (one < two && getCookie('click_sogl_ok')) {
                let rez = 60 - two + one;
                if (rez >= 50 && !getCookie('click_sogl_ok')) {
                    soglBtn.addEventListener('click', () => {
                        document.cookie = `click_sogl_ok=true; path=/`;
                        sogl.classList.add("invise");
                    })
                    sogl.classList.remove("invise");
                }
            }
        } else {
            soglBtn.addEventListener('click', () => {
                document.cookie = `click_sogl_ok=true; path=/`;
                sogl.classList.add("invise");
            })
            sogl.classList.remove("invise");
            document.cookie = `time_open=${date.getMinutes()}; path=/`;
        }
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