$(document).ready(function () {

    // Активний пункт навігації на відповідній сторінці
    $('.navigation-list a').each(function () {
        if ($(this).attr('href') == location.href.split("/").slice(-1)) {
            $(this).parent('li').addClass('active');
        }
    });

    // слайдер перемикання сторінок
    $('.navigation-button-up').on('click', function (e) {
        e.preventDefault();
        var $active = $('.navigation-list li.active');
        var url;
        if ($active.length == 0) {
            $active = $('.navigation-list li:last');
            url = $active.children('a').attr('href');
        }
        else {
            if ($active.prev('li').length > 0) {
                url = $active.prev('li').children('a').attr('href');
            } else {
                url = $('.navigation-list li:last a').attr('href');
            }
        }
        window.location = url;
    });

    $('.navigation-button-down').on('click', function (e) {
        e.preventDefault();
        var $active = $('.navigation-list li.active');
        var url;
        if ($active.length == 0) {
            $active = $('.navigation-list li:first');
            url = $active.children('a').attr('href');
        }
        else {
            if ($active.next('li').length > 0) {
                url = $active.next('li').children('a').attr('href');
            } else {
                url = $('.navigation-list li:first a').attr('href');
            }
        }
        window.location = url;
    });

    $(document).on('click', '.home-layout .menu-block .menu-list a, .home-layout .quick-list a', function (e) {
        e.preventDefault();
        var id_element = $(this).attr('href');
        var scroll_element = $(id_element);
        $('html, body').animate({'scrollTop': scroll_element.offset().top}, 700);
        if ($(this).closest('ul').hasClass('menu-list')) {
            $('.menu-block').animate({'left': '-100%'}, 500, function () {
                $('.menu-visible-block').animate({'left': '0%'}, 500);
            });
        }
    });

    // $('.navigation-list .navigation-item').each(function () {
    //     if ($(this).attr('href') === location) {
    //         $(this).addClass('active');
    //     }
    // });

    if ($('.about-slider').length > 0) {
        $('.about-slider').slick({
            centerMode: true,
            infinite: true,
            centerPadding: '15.10%',
            slidesToShow: 3,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        centerPadding: '12.7%',
                    }
                },
                {
                    breakpoint: 651,
                    settings: {
                        centerPadding: '0',
                        centerMode: false,

                    }
                }
            ]
        });
    }

    if ($('.about-slider').hasClass('slick-initialized')) {
        var slide_number = $('.about-slider .slick-slide').not('.slick-cloned').length;
        var currentSlide = $('.about-slider').slick('slickCurrentSlide');
        $('.slider-number-info .slide-total').text(slide_number);
        $('.slider-number-info .current-slide').text(currentSlide + 1);
    }


    $('.about-slider').on('afterChange', function (event, slick, currentSlide) {
        $('.slider-number-info .current-slide').text(currentSlide + 1);
    });

    $('.message-form input, textarea').on('click', function () {
        $(this).val() == '' ? $(this).parent('.form-group').addClass('focused') : "";
    });

    $('.message-form input, textarea').on('blur', function () {
        $(this).val() == '' ? $(this).parent('.form-group').removeClass('focused') : "";
    });


    // меню
    $(document).on('click', '.menu-visible-block .menu-show-button', function (e) {
        e.preventDefault();
        $('.menu-visible-block').animate({'left': '-100%'}, 500, function () {
            $('.menu-block').animate({'left': '0%'}, 500);
        });
    });
    $(document).on('click', '.menu-block .menu-close-button', function (e) {
        e.preventDefault();
        $('.menu-block').animate({'left': '-100%'}, 500, function () {
            $('.menu-visible-block').animate({'left': '0%'}, 500);
        });
    });

    // Кнопка "На верх"
    $(document).on('click', '.scroll-up-block .scroll-up', function (e) {
        e.preventDefault();
        $('html, body').animate({'scrollTop': '0'}, 700);
    });



    $('.slider-text-button').on('click', function (e) {
        e.preventDefault();
        var $active = $('.slider-text-content .slider-text-info.active');
        if($active.length == 0) {
            $active = $('.slider-text-content .slider-text-info:first');
        }
        $active.removeClass('active');
        if($active.next('.slider-text-info').length > 0) {
            $active.next('.slider-text-info').addClass('active');
        } else {
            $('.slider-text-content .slider-text-info:first').addClass('active');
        }

    });
});