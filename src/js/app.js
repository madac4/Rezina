import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();
flsFunctions.sliders();

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__bottom');

    if (burger && menu) {
        flsFunctions.burger(burger, menu, header);
        menu.style.height = `calc(100% - ${header.offsetHeight}px)`;
    }
    if (header) {
        flsFunctions.fixedHeader(header);
    }

    const languageToggler = document.querySelector('.header-language');
    languageToggler.addEventListener('click', () => {
        languageToggler.classList.toggle('open');
    });

    if (flsFunctions.isMobile.any()) {
        const submenus = document.querySelectorAll('.nav-list__item--sublist');

        submenus.forEach((submenu) => {
            submenu.addEventListener('click', () => {
                submenu.classList.toggle('open');
            });
        });
    }

    if (document.querySelector('.slider-hero__body')) {
        new Swiper('.slider-hero__body', {
            effect: 'fade',
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 800,
            touchRatio: 0,
            simulateTouch: false,
            preloadImages: false,
            lazy: true,
            pagination: {
                el: '.slider-hero-controls__dots',
                clickable: true,
            },
            navigation: {
                nextEl: '.slider-hero-controls__arrows .slider-arrow__next',
                prevEl: '.slider-hero-controls__arrows .slider-arrow__prev',
            },
        });
    }

    const fData = document.getElementById('fData');
    const mData = document.getElementById('mData');
    const cData = document.getElementById('cData');

    if (fData && mData && cData) {
        const data = {
            labels: ['Femei', 'Bărbați', 'Copii'],
            datasets: [
                {
                    label: 'Numărul populației',
                    backgroundColor: [
                        'rgba(253, 50, 89, 0.7)',
                        'rgba(60, 171, 219, 0.7)',
                        'rgba(255, 203, 47, 0.7)',
                    ],
                    borderColor: '#fff',
                    data: [fData.textContent, mData.textContent, cData.textContent],
                },
            ],
        };
        const config = {
            type: 'pie',
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            boxWidth: 50,
                            boxHeight: 20,
                            padding: 30,
                            color: '#fff',
                            font: {
                                size: 14,
                            },
                        },
                    },
                },
            },
        };
        const myChart = new Chart(document.getElementById('populationChart'), config);
    }
});
// let sliderTemplate = new Swiper('.slider', {
//     effect: 'fade',
//     autoplay:{
//         delay: 3000,
//         disableOnInteraction: false,
//     },
//     observer: true,
//     observeParents: true,
//     slidesPerView: 1,
//     spaceBetween: 0,
//     autoHeight: true,
//     speed: 800,
//     touchRatio: 0,
//     simulateTouch: false,
//     loop: true,
//     preloadImages: false,
//     lazy: true,
//     pagination: {
//         el: '.slider-pagging',
//         clickable: true,
//     },
//     navigation:{
//         nextEl: '.swiper-next',
//         prevEl: '.swiper-prev',
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//             autoHeight: true,
//         },
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         992: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//         },
//         1268: {
//             slidesPerView: 4,
//             spaceBetween: 30,
//         },
//     },
//     on: {
//         lazyImageReady: function () {
//             ibg();
//         },
//     },
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     }
// })
