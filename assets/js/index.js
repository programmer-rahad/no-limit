// Global Variables 
var body = document.body;

window.addEventListener('DOMContentLoaded', function () {

    // Header
    !function () {
        var squareButton = document.querySelector('.square-btn');
        var mobileNav = document.querySelector('.mobile-nav');
        var mobileNavMain = document.querySelector('.mobile-nav-main');
        var tabNav = document.querySelector('.tab-nav');
        var shipButton = document.querySelector('.ship-btn');
        var mobileDropdownButtons = document.querySelectorAll('.mobile-dropdown');
        var tsnContent = document.querySelector('.tsn-content');
        var closeImgSrc = "assets/images/icons/close.svg";
        var shipImgSrc = "assets/images/icons/ship.svg";

        if (!squareButton) return;

        squareButton.onclick = function () {
            tabNav.classList.add('d-none');
            this.classList.add('d-none');
            mobileNav.classList.remove('d-none');
            mobileNavMain.classList.remove('d-none');
            shipButton.firstElementChild.src = closeImgSrc;
            // tabNav.classList.remove('show');
            setTimeout(function () {
                mobileNavMain.classList.add('show');
            });
            body.classList.add('overflow-hidden');
        }

        shipButton.onclick = function () {

            if (!squareButton.classList.contains('d-none')) {
                tabNav.classList.remove('another');
                tabNav.classList.add('d-none');
                squareButton.classList.add('d-none');
                mobileNav.classList.remove('d-none');
                // mobileNavMain.classList.add('d-none');
                shipButton.firstElementChild.src = closeImgSrc;
                body.classList.add('overflow-hidden');
                setTimeout(function () {
                    tabNav.classList.remove('d-none');
                    setTimeout(function () {
                        tabNav.classList.add('show');
                    }, 100)
                }, 0)
            } else {
                mobileNavMain.classList.remove('show');
                tabNav.classList.remove('show');
                squareButton.classList.remove('d-none');
                shipButton.firstElementChild.src = shipImgSrc;
                body.classList.remove('overflow-hidden');
                setTimeout(function () {
                    mobileNav.classList.add('d-none');
                    if (tsnContent.classList.contains('show')) {
                        tsnContent.classList.remove('show')
                        tabNav.classList.remove('another')
                    }
                }, 400);
            }



            // if (tsnContent.classList.contains('show')) {
            //     tsnContent.classList.remove('show');
            //     tabNav.classList.remove('another');
            //     return;
            // }

            // if (mobileNavMain.classList.contains('show')) {
            //     squareButton.classList.remove('d-none');
            //     mobileNavMain.classList.remove('show');
            //     setTimeout(function () {
            //         shipButton.firstElementChild.src = shipImgSrc;
            //     })
            // }
            // else if (tabNav.classList.contains('show')) {
            //     tabNav.classList.remove('show');
            //     setTimeout(function () {
            //         mobileNavMain.classList.remove('d-none');
            //         setTimeout(function () {
            //             mobileNavMain.classList.add('show');
            //         }, 50)
            //     }, 500)
            // } else {
            //     // console.log('Rahad');
            //     mobileNav.classList.remove('d-none');
            //     mobileNavMain.classList.add('d-none');
            //     tabNav.classList.remove('d-none');
            //     shipButton.firstElementChild.src = closeImgSrc;
            //     squareButton.classList.add('d-none');
            //     body.classList.add('overflow-hidden');
            //     setTimeout(function () {
            //         tabNav.classList.add('show');
            //     }, 50)
            // }
        }
        var length = mobileDropdownButtons.length;
        for (var i = 0; i < length; i++) {
            mobileDropdownButtons[i].onclick = function (e) {
                console.log('Rahad');
                mobileNavMain.classList.remove('show');
                setTimeout(function () {
                    mobileNavMain.classList.add('d-none');
                    //     console.log(tabNav);
                    tabNav.classList.remove('d-none');
                    setTimeout(function () {
                        tabNav.classList.add('show');
                    }, 50)
                }, 500)
                e.preventDefault();
            }
        }

        !function () {
            var buttons = document.querySelectorAll('.mega-menu-item > a');
            var length = buttons.length
            for (var i = 0; i < length; i++) {
                buttons[i].addEventListener('click', function (e) {
                    e.preventDefault();
                    this.nextElementSibling.classList.add('show');
                    this.classList.add('active');
                })
            }

            var closeButtons = document.querySelectorAll('.close-circle');
            var length = closeButtons.length;

            var removeActiveClass = function () {
                Array.from(buttons).forEach(function (btn) {
                    console.log(btn);
                    btn.classList.remove('active');
                })
            }

            for (var i = 0; i < length; i++) {
                closeButtons[i].addEventListener('click', function () {
                    this.parentElement.parentElement.parentElement.classList.remove('show');
                    removeActiveClass();
                })
            }

            !function () {
                var buttons = document.querySelectorAll('.tab-sub-nav > a');
                var length = buttons.length
                for (var i = 0; i < length; i++) {
                    buttons[i].addEventListener('click', function (e) {
                        e.preventDefault();
                        this.nextElementSibling.classList.add('show');
                        if (window.innerWidth < 1200) {
                            // transform: translateX(-100%);
                            tabNav.classList.add('another');
                        }
                    })
                }
            }();

            // 
            var backButtons = document.querySelectorAll('.back-button');

            if (backButtons.length) {
                var length = backButtons.length
                for (var i = 0; i < length; i++) {
                    backButtons[i].addEventListener('click', function () {
                        this.parentElement.classList.remove('show');
                        tabNav.classList.remove('another');
                    })
                }
            }


            mobileNavMain.addEventListener('transitionend', function () {
                // if (!squareButton.classList.contains('d-none')) {
                // body.classList.remove('overflow-hidden');
                // }
                if (shipButton.firstElementChild.src.includes(shipImgSrc)) {
                    body.classList.remove('overflow-hidden');
                    mobileNav.classList.add('d-none');
                }
            })


        }();

    }();


    // Welcome Section
    !function () {

        // var videos = document.querySelectorAll('.wb-slider video');
        // var length = videos.length
        // if (!videos.length) {
        //     for (let i = 0; i < length; i++) {
        //         setTimeout(function () {
        //             alert('Hello');
        //             console.log(videos[i]);
        //             videos[i].pause();
        //             videos[i].play();
        //         }, 3000)
        //     }
        // }

        var wbSlider = new Swiper('.wb-slider', {
            // Optional parameters
            // direction: 'horizontal',
            loop: true,
            // autoplay: {
            //     delay: 2850,
            //     disableOnInteraction: false,
            // },
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },

            // Navigation arrows
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },

            // And if we need scrollbar
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            // },
        });
        var carouselLogos = new Swiper('.new-slider', {
            // Optional parameters
            // direction: 'horizontal',
            // slidesPerView: 3,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },

            // spaceBetween: 30, // set the space between slides
            breakpoints: {

                1200: {
                    slidesPerView: 2 // show 2 slides per view
                },
                1350: {
                    slidesPerView: 3 // show 2 slides per view
                },
                1630: {
                    slidesPerView: 4 // show 2 slides per view
                },
            }

            // If we need pagination
            // pagination: {
            //     el: '.swiper-pagination',
            //     clickable: true
            // },

            // Navigation arrows
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },

            // And if we need scrollbar
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            // },
        });




    }();

    // Services 
    var container = document.querySelector('.service-sliders');
    if (container) {
        var servicesSliders = new Swiper('.service-sliders', {
            // Optional parameters
            // direction: 'horizontal',
            slidesPerView: 1,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            loop: true,
            spaceBetween: 11,
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
            },
        });
        servicesSliders.slideNext();
        servicesSliders.slidePrev();
    }

    // Our Oppotunities 
    container = document.querySelector('.oo-sliders');
    if (container) {
        var ourOpportunitiesSliders = new Swiper('.oo-sliders', {
            // Optional parameters
            // direction: 'horizontal',
            slidesPerView: 1,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            loop: true,
            spaceBetween: 15,
            autoplay: {
                delay: 2850,
                disableOnInteraction: false,
            },
            // slidesOffsetAfter: 70,
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
            }
            // padding: {
            //     right: 70
            // }

        });
        ourOpportunitiesSliders.slideNext();
        ourOpportunitiesSliders.slidePrev();
    }

    // Our News 
    container = document.querySelector('.on-sliders');
    if (container) {
        var ourNewsSliders = new Swiper('.on-sliders', {
            // Optional parameters
            // direction: 'horizontal',
            slidesPerView: 1,
            // navigation: {
            //     nextEl: ".swiper-button-next",
            //     prevEl: ".swiper-button-prev",
            // },
            loop: true,
            spaceBetween: 15,
            autoplay: {
                delay: 2850,
                disableOnInteraction: false,
            },
            breakpoints: {
                700: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
            }

        });
        ourNewsSliders.slideNext();
        ourNewsSliders.slidePrev();
    }


    // Gallery Photos

    // Our Oppotunities 
    container = document.querySelector('.gp-sliders');
    if (container) {
        var galleryPhotosSliders = new Swiper('.gp-sliders', {
            // Optional parameters
            // direction: 'horizontal',
            slidesPerView: 2,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            loop: true,
            spaceBetween: 15,
            // slidesOffsetAfter: 70,
            // padding: {
            //     right: 70
            // }
            breakpoints: {
                576: {
                    slidesPerView: 3
                },
                992: {
                    slidesPerView: 4
                },
                1200: {
                    slidesPerView: 5
                },
            }
        });
    }



})


