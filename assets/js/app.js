
$(document).ready(function() {

    "use strict";
/*============================
   init Jarallax with jQuery
============================*/
    $('.parallax-img').jarallax({
        speed: 0.4
    });
    window.onscroll = function() {myFunction()};
    var header = document.getElementById("header");
    var sticky = header.offsetTop;
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
    $('.client-owl-carousel').owlCarousel({
        // animateOut: 'slideOutDown',
        // animateIn: 'slideInUp',
        items:1,
        smartSpeed:700,
        nav:false,
        dots: true,
        autoplay:true,
        autoplayTimeout:13000,
        autoplayHoverPause:true,
    });
    $('.home-owl-carousel').owlCarousel({
        items:1,
        smartSpeed:700,
        nav:true,
        dots: false,
        autoplay:true,
        loop:true,
        responsiveClass:true,
        // autoplayTimeout:Infinity,
        autoplayHoverPause:true,
        navText : ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right" ></i>']
    });
    
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
            scrollTop: (target.offset().top - 56)
            }, 1000, "easeInOutExpo");
            return false;
        }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });

    // Scroll To Top
    $(function () {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 400) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
    });
    $('#back-to-top').on("click", function () {
        $('html, body').animate({scrollTop: 0}, 'slow');
        return false;
    });
});

