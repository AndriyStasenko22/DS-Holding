$(document).ready(function () {


    // var location =window.location.pathname.toString();
    // if( location.charAt( 0 ) === '/' ) {
    //     location = location.slice(1);
    //     // console.log(location);
    // }

    $(document).on('click', '.quick-list a', function (e) {
       e.preventDefault();
       var id_element = $(this).attr('href');
       var scroll_element = $(id_element);
       $('html, body').animate({'scrollTop':scroll_element.offset().top},700);
    });

    $('.navigation-list .navigation-item').each(function () {
       if($(this).attr('href')===location){
           $(this).addClass('active');
       }
    });

    if($('.about-slider').length>0) {
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

});