//window.$ = window.jQuery;
//ensure that this code can only run after the documrnt has been loaded 
$(document).ready(function () {

    // for sticky navigation：标题栏下去的时候会stick scroll //

    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    //scroll the buttom Im hungrey & show me more的点击反应, 跳到指定链接的地方
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    });

    //navigation scroll 
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    //animation on scroll：Im hungrey & show me more的点击反应 //

    // section 1: test and icon fade in 
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated animate__fadeIn');
    }, {
        offset: '50%'   //half of the page, it will fadein 
    });

    //section 3: mobile animation function
    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated animate__fadeInUp');
    }, {
        offset: '50%'
    });

    // section 4: city fade in
    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated animate__fadeIn');
    }, {
        offset: '50%'
    });

    // section 5: plan - pulse 
    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated animate__pulse');
    }, {
        offset: '50%'
    });

    // mobile navi：最小screen时 菜单可以open与close //
    $('.js--nav-icon').click(function () {
        //let nav = js--main-nav // 
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        // 0.2s to open or close a box: stikcy mani-nav
        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {

            //when it's navigation icon, take that navigation icon away and put the close icon instead
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

    });


});