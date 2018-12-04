jQuery(document).ready(function ($) {
    $('.top-header .search i').on("click", function () {
        $('.top-header .block-search').toggleClass('show-search');
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        adaptiveHeight: true,
        infinite: false,
        useTransform: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        asNavFor: '.slider-nav',
        autoplay: true,
        autoPlaySpeed: 5000,
        rtl:true,
        prevArrow: '<button type="button" class="slider-prev"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" class="slider-next"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        infinite: false,
        rtl: true,
    });


    $("#latest-news .single-min-news .info-news p a").text(function(i, text) {

        if (text.length >= 45) {
            text = text.substring(0, 50);
            var lastIndex = text.lastIndexOf(" ");
            text = text.substring(0, lastIndex) + '...';
        }

        $(this).text(text);

    });

    $("#sponsored-links .sponsor-container p a").text(function(i, text) {

        if (text.length >= 55) {
            text = text.substring(0, 80);
            var lastIndex = text.lastIndexOf(" ");
            text = text.substring(0, lastIndex) + '...';
        }

        $(this).text(text);

    });

});