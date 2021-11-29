;
(function($) {
    "use strict";

    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

    //* Navbar Fixed  
    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();


    function offcanvasActivator() {
        if ($('.bar_menu').length) {
            $('.bar_menu').on('click', function() {
                $('#menu').toggleClass('show-menu')
            });
            $('.close_icon').on('click', function() {
                $('#menu').removeClass('show-menu')
            })
        }
    }
    offcanvasActivator();

    $('.offcanfas_menu .dropdown').on('show.bs.dropdown', function(e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(400);
    });
    $('.offcanfas_menu .dropdown').on('hide.bs.dropdown', function(e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(500);
    });

    $(window).on("load", function() {
        if ($('.mega_menu_two .scroll').length) {
            $(".mega_menu_two .scroll").mCustomScrollbar({
                mouseWheelPixels: 50,
                scrollInertia: 0,
            });
        }
    });

    /*--------- WOW js-----------*/
    function wowAnimation() {
        new WOW({
            offset: 100,
            mobile: true
        }).init()
    }
    wowAnimation()

    //    var $animation_elements = $('.scroll_animation');
    //    var $window = $(window);
    //
    //    function check_if_in_view() {
    //      var window_height = $window.height();
    //      var window_top_position = $window.scrollTop();
    //      var window_bottom_position = (window_top_position + window_height);
    //
    //      $.each($animation_elements, function() {
    //        var $element = $(this);
    //        var element_height = $element.outerHeight();
    //        var element_top_position = $element.offset().top;
    //        var element_bottom_position = (element_top_position + element_height);
    //
    //        //check to see if this current container is within viewport
    //        if ((element_bottom_position >= window_top_position) &&
    //          (element_top_position <= window_bottom_position)) {
    //          $element.addClass('in-view');
    //        } else {
    //          $element.removeClass('in-view');
    //        }
    //      });
    //    }
    ////    
    //    
    //    if($(window).width() > 576){
    //        $window.on('scroll resize', check_if_in_view);
    //        $window.trigger('scroll');
    //    }



    /*===========Start Service Slider js ===========*/
    function serviceSlider() {
        var service_slider = $(".service_carousel");
        if (service_slider.length) {
            service_slider.owlCarousel({
                loop: true,
                margin: 15,
                items: 4,
                autoplay: true,
                smartSpeed: 2000,
                responsiveClass: true,
                nav: true,
                dots: false,
                stagePadding: 100,
                navText: [, '<i class="ti-arrow-left"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 0,
                    },
                    578: {
                        items: 2,
                        stagePadding: 0,
                    },
                    992: {
                        items: 3,
                        stagePadding: 0,
                    },
                    1200: {
                        items: 3,
                    }
                },
            })
        }
    }
    serviceSlider();
    /*===========End Service Slider js ===========*/

    /*===========Start about_img_slider js ===========*/
    function aboutSlider() {
        var reviews_slider2 = $(".about_img_slider");
        if (reviews_slider2.length) {
            reviews_slider2.owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                nav: false,
                autoplay: false,
                smartSpeed: 2000,
                responsiveClass: true,
            })
        }
    }
    aboutSlider();
    /*=========== End about_img_slider js ===========*/

    function posSlider() {
        var posS = $(".pos_slider");
        if (posS.length) {
            posS.owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                dots: false,
                nav: false,
                autoplay: true,
                slideSpeed: 300,
                mouseDrag: false,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
                responsiveClass: true,
            })
        }
    }
    posSlider();


    /*===========Start feedback_slider js ===========*/
    function feedbackSlider() {
        var feedback_slider = $(".feedback_slider");
        if (feedback_slider.length) {
            feedback_slider.owlCarousel({
                loop: true,
                margin: 100,
                padding: 20,
                items: 2,
                nav: false,
                center: false,
                autoplay: false,
                smartSpeed: 2000,
                stagePadding: 50,
                responsiveClass: true,
                //                navText: [,'<i class="ti-angle-left"></i><i class="ti-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                    },
                    776: {
                        items: 2,
                    },

                },
            })
        }
    }
    feedbackSlider();

    /*===========Start feedback_slider js ===========*/
    function feedbackSlider_two() {
        var feedback_sliders = $("#fslider_two");
        if (feedback_sliders.length) {
            feedback_sliders.owlCarousel({
                loop: true,
                margin: 0,
                items: 2,
                nav: true,
                autoplay: false,
                smartSpeed: 2000,
                stagePadding: 0,
                responsiveClass: true,
                navText: ['<i class="ti-angle-left"></i><i class="ti-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                    },
                    776: {
                        items: 2,
                    },
                    1199: {
                        items: 2,
                    }
                },
            })
        }
    }
    feedbackSlider_two();


    function feedbackSlider_three() {
        var feedback_sliders_three = $("#fslider_three");
        if (feedback_sliders_three.length) {
            feedback_sliders_three.owlCarousel({
                loop: true,
                margin: 0,
                items: 2,
                nav: true,
                autoplay: false,
                smartSpeed: 2000,
                stagePadding: 0,
                responsiveClass: true,
                navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                    },
                    776: {
                        items: 2,
                    },
                    1199: {
                        items: 3,
                    }
                },
            })
        }
    }
    feedbackSlider_three();




    function erpTestimonial() {
        var erpT = $(".erp_testimonial_info");
        if (erpT.length) {
            erpT.owlCarousel({
                loop: true,
                margin: 0,
                items: 2,
                nav: true,
                dots: false,
                autoplay: false,
                smartSpeed: 2000,
                stagePadding: 0,
                responsiveClass: true,
                navText: ['<i class="arrow_left"></i>', '<i class="arrow_right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                    },
                    776: {
                        items: 2,
                    },
                    1199: {
                        items: 2,
                    }
                },
            })
        }
    }
    erpTestimonial();

    /*=========== End feedback_slider js ===========*/

    /*===========Start Service Slider js ===========*/
    function testimonialSlider() {
        var testimonialSlider = $(".testimonial_slider");
        if (testimonialSlider.length) {
            testimonialSlider.owlCarousel({
                loop: true,
                margin: 10,
                items: 1,
                autoplay: true,
                smartSpeed: 2500,
                autoplaySpeed: false,
                responsiveClass: true,
                nav: true,
                dot: true,
                stagePadding: 0,
                navContainer: '.agency_testimonial_info',
                navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            })
        }
    }
    testimonialSlider();
    /*===========End Service Slider js ===========*/

    /*===========Start app_testimonial_slider js ===========*/
    function app_testimonialSlider() {
        var app_testimonialSlider = $(".app_testimonial_slider");
        if (app_testimonialSlider.length) {
            app_testimonialSlider.owlCarousel({
                loop: true,
                margin: 10,
                items: 1,
                autoplay: true,
                smartSpeed: 2000,
                autoplaySpeed: true,
                responsiveClass: true,
                nav: true,
                dot: true,
                navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
                navContainer: '.nav_container'
            })
        }
    }
    app_testimonialSlider();
    /*===========End app_testimonial_slider js ===========*/


    /*===========Start app_testimonial_slider js ===========*/
    function appScreenshot() {
        var app_screenshotSlider = $(".app_screenshot_slider");
        if (app_screenshotSlider.length) {
            app_screenshotSlider.owlCarousel({
                loop: true,
                margin: 10,
                items: 5,
                autoplay: false,
                smartSpeed: 2000,
                responsiveClass: true,
                nav: false,
                dots: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    650: {
                        items: 2,
                    },
                    776: {
                        items: 4,
                    },
                    1199: {
                        items: 5,
                    },
                },
            })
        }
    }
    appScreenshot();
    /*===========End app_testimonial_slider js ===========*/

    /*===========Start app_testimonial_slider js ===========*/
    function prslider() {
        var p_Slider = $(".pr_slider");
        if (p_Slider.length) {
            p_Slider.owlCarousel({
                loop: true,
                margin: 10,
                items: 1,
                autoplay: true,
                smartSpeed: 1000,
                responsiveClass: true,
                nav: true,
                dots: false,
                navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
                navContainer: '.pr_slider'
            })
        }
    }
    prslider();
    /*===========End app_testimonial_slider js ===========*/



    /*===========Start app_testimonial_slider js ===========*/
    function tslider() {
        var tSlider = $(".testimonial_slider_four");
        if (tSlider.length) {
            tSlider.owlCarousel({
                loop: true,
                margin: 10,
                items: 1,
                autoplay: true,
                smartSpeed: 1000,
                responsiveClass: true,
                nav: true,
                dots: false,
                navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
                navContainer: '.testimonial_title'
            })
        }
    }
    tslider();



    function caseStudies() {
        var CSlider = $(".case_studies_slider");
        if (CSlider.length) {
            CSlider.owlCarousel({
                loop: true,
                margin: 0,
                items: 3,
                autoplay: true,
                smartSpeed: 1000,
                responsiveClass: true,
                nav: false,
                dots: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    650: {
                        items: 2,
                    },
                    776: {
                        items: 3,
                    },
                    1199: {
                        items: 3,
                    },
                },
            })
        }
    }
    caseStudies();

    /*===========Start app_testimonial_slider js ===========*/
    function videoslider() {
        var dSlider = $(".digital_video_slider");
        if (dSlider.length) {
            dSlider.owlCarousel({
                loop: true,
                margin: 30,
                items: 1,
                center: true,
                autoplay: true,
                smartSpeed: 1000,
                stagePadding: 200,
                responsiveClass: true,
                nav: false,
                dots: false,
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 0,
                    },
                    575: {
                        items: 1,
                        stagePadding: 100,
                    },
                    768: {
                        items: 1,
                        stagePadding: 40,
                    },
                    992: {
                        items: 1,
                        stagePadding: 100,
                    },
                    1250: {
                        items: 1,
                        stagePadding: 200,
                    }
                },
            })
        }
    }
    videoslider();



    function Saasslider() {
        var SSlider = $(".saas_banner_area_three");
        if (SSlider.length) {
            SSlider.owlCarousel({
                loop: true,
                margin: 30,
                items: 1,
                animateOut: 'fadeOut',
                autoplay: true,
                smartSpeed: 1000,
                responsiveClass: true,
                nav: false,
                dots: true,
            })
        }
    }
    Saasslider();


    function tab_hover() {
        var tab = $(".price_tab");
        if ($(window).width() > 450) {
            if ($(tab).length > 0) {
                tab.append('<li class="hover_bg"></li>');
                if ($('.price_tab li a').hasClass('active_hover')) {
                    var pLeft = $('.price_tab li a.active_hover').position().left,
                        pWidth = $('.price_tab li a.active_hover').css('width');
                    $('.hover_bg').css({
                        left: pLeft,
                        width: pWidth
                    })
                }
                $('.price_tab li a').on('click', function() {
                    $('.price_tab li a').removeClass('active_hover');
                    $(this).addClass('active_hover');
                    var pLeft = $('.price_tab li a.active_hover').position().left,
                        pWidth = $('.price_tab li a.active_hover').css('width');
                    $('.hover_bg').css({
                        left: pLeft,
                        width: pWidth
                    })
                })
            }
        }

    }
    tab_hover();

    if ($('.selectpickers').length > 0) {
        $('.form-control').niceSelect();
    }


    function pr_slider() {
        var pr_image = $('.pr_image')
        if (pr_image.length) {
            pr_image.owlCarousel({
                loop: true,
                items: 1,
                autoplay: true,
                dots: false,
                thumbs: true,
                thumbImage: true,
            });
        }
    }
    pr_slider()

    $('.ar_top').on('click', function() {
        var getID = $(this).next().attr('id');
        var result = document.getElementById(getID);
        var qty = result.value;
        $('.proceed_to_checkout .update-cart').removeAttr('disabled');
        if (!isNaN(qty)) {
            result.value++;
        } else {
            return false;
        }
    });

    $('.ar_down').on('click', function() {
        var getID = $(this).prev().attr('id');
        var result = document.getElementById(getID);
        var qty = result.value;
        $('.proceed_to_checkout .update-cart').removeAttr('disabled');
        if (!isNaN(qty) && qty > 0) {
            result.value--;
        } else {
            return false;
        }
    });


    /*===========Portfolio isotope js===========*/
    function portfolioMasonry() {
        var portfolio = $("#work-portfolio");
        if (portfolio.length) {
            portfolio.imagesLoaded(function() {
                // images have loaded
                // Activate isotope in container
                portfolio.isotope({
                    itemSelector: ".portfolio_item",
                    layoutMode: 'masonry',
                    filter: "*",
                    animationOptions: {
                        duration: 1000
                    },
                    //                    hiddenStyle: {
                    //                        opacity: 0,
                    //                        transform: 'scale(.4)rotate(60deg)',
                    //                    },
                    //                    visibleStyle: {
                    //                        opacity: 1,
                    //                        transform: 'scale(1)rotate(0deg)',
                    //                    },
                    //                    stagger: 0,
                    transitionDuration: '0.5s',
                    masonry: {

                    }
                });

                // Add isotope click function
                $("#portfolio_filter div").on('click', function() {
                    $("#portfolio_filter div").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    portfolio.isotope({
                        filter: selector,
                        animationOptions: {
                            animationDuration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    })
                    return false;
                })
            })
        }
    }
    portfolioMasonry();

    function jobFilter() {
        var jobsfilter = $("#tab_filter");
        if (jobsfilter.length) {
            jobsfilter.imagesLoaded(function() {
                // images have loaded
                // Activate isotope in container
                jobsfilter.isotope({
                    itemSelector: ".item",
                });

                // Add isotope click function
                $("#job_filter div").on('click', function() {
                    $("#job_filter div").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    jobsfilter.isotope({
                        filter: selector,
                        animationOptions: {
                            animationDuration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    })
                    return false;
                })
            })
        }
    }
    jobFilter();



    /*===========Portfolio isotope js===========*/
    function blogMasonry() {
        var blog = $("#blog_masonry")
        if (blog.length) {
            blog.imagesLoaded(function() {
                blog.isotope({
                    layoutMode: 'masonry',
                });
            })
        }
    }
    blogMasonry();


    /*--------------- End popup-js--------*/
    function popupGallery() {
        if ($(".img_popup,.image-link").length) {
            $(".img_popup,.image-link").each(function() {
                $(".img_popup,.image-link").magnificPopup({
                    type: 'image',
                    tLoading: 'Loading image #%curr%...',
                    removalDelay: 300,
                    mainClass: 'mfp-with-zoom mfp-img-mobile',
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image,
                    }
                });
            })
        }
        if ($('.popup-youtube').length) {
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
                mainClass: 'mfp-with-zoom mfp-img-mobile',
            });
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }
    }
    popupGallery();

    if ($('#mapBox').length) {
        var $lat = $('#mapBox').data('lat');
        var $lon = $('#mapBox').data('lon');
        var $zoom = $('#mapBox').data('zoom');
        var $marker = $('#mapBox').data('marker');
        var $info = $('#mapBox').data('info');
        var $markerLat = $('#mapBox').data('mlat');
        var $markerLon = $('#mapBox').data('mlon');
        var map = new GMaps({
            el: '#mapBox',
            lat: $lat,
            lng: $lon,
            scrollwheel: false,
            scaleControl: true,
            streetViewControl: false,
            panControl: true,
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            zoom: $zoom,
        });
        map.addMarker({
            lat: $markerLat,
            lng: $markerLon,
            icon: $marker,
            infoWindow: {
                content: $info
            }
        })
    }




    /* ===== Parallax Effect===== */
    function parallaxEffect() {
        if ($('.parallax-effect').length) {
            $('.parallax-effect').parallax();
        };
    }
    parallaxEffect();

    /* Counter Js */
    function counterUp() {
        if ($('.counter').length) {
            $('.counter').counterUp({
                delay: 1,
                time: 500
            });
        };
    };

    counterUp();

    /*===== progress-bar =====*/
    function circle_progress() {
        if ($('.circle').length) {
            $(".circle").each(function() {
                $(".circle").appear(function() {
                    $('.circle').circleProgress({
                        startAngle: -14.1,
                        size: 200,
                        duration: 9000,
                        easing: "circleProgressEase",
                        emptyFill: '#f1f1fa ',
                        lineCap: 'round',
                        thickness: 10,
                    })
                }, {
                    triggerOnce: true,
                    offset: 'bottom-in-view'
                })
            })
        }
    }
    circle_progress();

    /*------------- preloader js --------------*/


    function loader() {
        $(window).on('load', function() {
            $('#ctn-preloader').addClass('loaded');
            // Una vez haya terminado el preloader aparezca el scroll

            if ($('#ctn-preloader').hasClass('loaded')) {
                // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
                $('#preloader').delay(900).queue(function() {
                    $(this).remove();
                });
            }
        });
    }
    loader();

    if ($('[data-toggle="tooltip"]').length) {
        $('[data-toggle="tooltip"]').tooltip()
    }

    // Pricing Filter
    if ($("#slider-range").length) {
        $("#slider-range").slider({
            range: true,
            min: 5,
            max: 150,
            values: [5, 100],
            slide: function(event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
    }

    $('.search-btn').on('click', function() {
        $('body').addClass('open');
        setTimeout(function() {
            $('.search-input').focus();
        }, 500);
        return false;
    });
    $('.close_icon').on('click', function() {
        $('body').removeClass('open');
        return false;
    });

    if ($('.develor_tab li a').length > 0) {
        $(".develor_tab li a").click(function() {
            var tab_id = $(this).attr("data-tab");
            $(".tab_img").removeClass("active");
            $("#" + tab_id).addClass("active");
        });
    }


    $('.alert_close').on('click', function(e) {
        $(this).parent().hide();
    });



    //    $('.submenu > a').on('click',function(event){
    //        event.preventDefault()
    //
    //        $(this).parent().find('ul').first().toggle(700);
    //
    //        $(this).parent().siblings().find('ul').hide(700);
    //
    //        //Hide menu when clicked outside
    ////        $(this).parent().find('ul').mouseleave(function(){  
    ////          var thisUI = $(this);
    ////          $('html').click(function(){
    ////            thisUI.hide(700);
    ////            $('html').unbind('click');
    ////          });
    ////        });
    //    });

    function active_dropdown() {
        if ($(window).width() < 992) {
            $('.menu li.submenu > a').on('click', function(event) {
                event.preventDefault()
                $(this).parent().find('ul').first().toggle(700);
                $(this).parent().siblings().find('ul').hide(700);
            });
        }
    }
    active_dropdown();



    //    $('.burger_menu').click(function(){
    //            $(this).toggleClass('open');
    //        });

    function hamberger_menu() {
        if ($('.burger_menu').length) {
            $('.burger_menu').on('click', function() {
                $(this).toggleClass('open')
                $('body').removeClass('menu-is-closed').addClass('menu-is-opened');
            });
            //            $('.burger_menu').on('click',function(){
            //                $('.burger_menu').removeClass('open')
            //            })
            $('.close, .click-capture').on('click', function() {
                $('body').removeClass('menu-is-opened').addClass('menu-is-closed');
                //                $('.m_content').slideUp(300);
            });
            //            var dropToggle = $('.menu-list > li').has('ul').children('a');
            //            dropToggle.on('click', function() {
            //                dropToggle.not(this).closest('li').find('ul').slideUp(200);
            //                $(this).closest('li').children('ul').slideToggle(200);
            //                return false;
            //            });


            //            $('.bar_menu').on('click', function() {
            //                $('body').removeClass('menu-is-closed').addClass('menu-is-opened');
            //            });
        }
    }
    hamberger_menu();

    /*-------------------------------------------------------------------------------
	  Full screen sections 
	-------------------------------------------------------------------------------*/
    if ($('.pagepiling').length > 0) {
        $('.pagepiling').pagepiling({
            scrollingSpeed: 280,
            loopBottom: true,
            navigation: {
                'position': 'right_position',
            },
            //		    afterLoad: function(anchorLink, index){
            //		    	if (index == 2 || index == 4 || index == 6){   /* 2, 4, 6, - sections with white bacgkgrounds */
            //		            $('.full_header, .full_footer').removeClass('content-white');
            //		            $('#pp-nav').removeClass('white');
            //		    	}
            //		    	else{
            //	            	$('.full_header, .full_footer').addClass('content-white');
            //	            	$('#pp-nav').addClass('white');
            //	            }
            //	            
            //  			}
        });




        /*-------------------------------------------------------------------------------
		   Scroll into sections 
		/-------------------------------------------------------------------------------*/
        //
        //		$('.pp-scrollable').on('scroll', function () {
        //    		var scrollTop =$(this).scrollTop();
        //    		if (scrollTop > 0 ) {
        //    			$('.full_header').removeClass('content-white');
        //    		}
        //    		else{
        //    			$('.full_header').addClass('content-white');
        //    		}
        //		});



        /*-------------------------------------------------------------------------------
           Scroller navigation
        /-------------------------------------------------------------------------------*/
        //		$('#pp-nav').addClass('white');
        //
        //		$('.pp-nav-up').on('click', function(){
        //			$.fn.pagepiling.moveSectionUp();
        //		});
        //
        //		$('.pp-nav-down').on('click', function(){
        //			$.fn.pagepiling.moveSectionDown();
        //		});
    };

    //    function pagePiling(){
    //        if($('.pagepiling').length){
    //            $('.pagepiling').pagepiling({
    //                verticalCentered: true,
    //                css3: false,
    //                easing: 'swing',
    //                loopTop: true,
    //                loopBottom: true,      
    //                normalScrollElements: null,
    //                normalScrollElementTouchThreshold: 5,
    //                touchSensitivity: 5,
    //                keyboardScrolling: true,
    //                animateAnchor: false,
    ////                afterLoad: function(index, nextIndex, direction){
    ////                    if ($('.section').not('active')) {
    ////                            $('.wow').remove('animated');
    ////                    }
    ////                },
    //                afterLoad: function(anchorLink, nextIndex,  index){
    ////                    new WOW({
    ////                offset: 100,          
    ////                mobile: true
    ////            }).init()
    //                    
    ////                                        if ($('.section').has('active')) {
    ////                                           $('.wow').remove('animated');
    ////////                $('.wow').css({
    ////////                  'visibility': 'hidden',
    ////////                  'animation-name': 'none'
    ////////                });
    ////                new WOW().init();
    ////}
    ////                    if ($('.section').hasClass('active')) {
    ////                        $('.wow').addClass('fixed-header');
    ////                    } 
    ////                    else {
    ////                        $('.wow').removeClass('fixed-header');
    ////                    }
    ////                   if($('.section').removeClass('.active')){
    ////                        $('.wow').addClass('fixed-header');
    ////                    }
    ////                    else{
    ////                        $('.wow').removeClass('animated');
    ////                    }
    //                },
    ////                afterRender: function(){
    ////                    if ($('.wow').hasClass('animated')) {
    ////            $(this).removeClass('animated');
    ////            $(this).removeAttr('style');
    ////            new WOW().init();
    ////}
    ////                },
    ////                afterload: function (index, nextIndex, direction) {
    ////                    //reaching our last section? The one with our normal site?
    ////                    if (nextIndex == 4) {
    ////                        $('#pp-nav').fadeOut();
    ////                    }
    ////
    ////                    //leaving our last section? The one with our normal site?
    ////                    if (index == 4) {
    ////                        $('#pp-nav').fadeIn();
    ////                    }
    ////                },
    //                
    //            });
    //        }
    //    }
    //    pagePiling();


    //    if ($('.section').hasClass('active') == true) {
    //       $(this).parent().find('wow').addClass('find');
    //    }
    //    $(document).ready(function() {
    //        
    ////        else{
    ////            $('.wow').removeClass('fixed-header');
    ////        }
    //        //    if ($('.pagepiling .section').not('active')) {
    //        //        $('.wow').removeClass('fixed-header');
    //        //    };
    //    })


    function ppTestislider() {
        var PSlider = $(".pp_testimonial_slider");
        if (PSlider.length) {
            PSlider.slick({
                autoplay: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplaySpeed: 3000,
                speed: 1000,
                vertical: true,
                dots: false,
                arrows: true,
                prevArrow: '.prev',
                nextArrow: '.next',
            });
        }
    }
    ppTestislider();

})(jQuery)


// Add active class to the current button (highlight it)
$("#myTab").on('click', function() {
    $(this).siblings().removeClass('active')
    $(this).addClass('active');
})


function removealert() {
    window.setTimeout(function() {
        $(".alert").fadeTo(500, 0).slideUp(500, function() {
            $(this).remove();
        });
    }, 4000);
}

function removeerr() {
    window.setTimeout(function() {
        $(".Erro-msg").fadeTo(500, 0).slideUp(500, function() {
            $(this).remove();
        });
    }, 4000);
}

function removsccs() {
    window.setTimeout(function() {
        $(".scss-msg").fadeTo(500, 0).slideUp(500, function() {
            $(this).remove();
        });
    }, 4000);
}



// new Line

$(document).ready(function() {

    // Random Alert shown for the fun of it
    function randomAlert() {
        var min = 5,
            max = 20;
        var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 20
        // post time in a <span> tag in the Alert
        $("#time").html('Next alert in ' + rand + ' seconds');
        $('#timed-alert').fadeIn(500).delay(3000).fadeOut(500);
        setTimeout(randomAlert, rand * 1000);
    };
    randomAlert();
});

$('.btn').click(function(event) {
    event.preventDefault();
    var target = $(this).data('target');
    // console.log('#'+target);
    $('#click-alert').html('data-target= ' + target).fadeIn(50).delay(3000).fadeOut(1000);

});




// Multi-Step Form
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the crurrent tab

function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
        document.getElementById("nextBtn").style.display = "inline";

    } else {
        document.getElementById("subBtn").style.display = "inline";

        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").style.display = "none";

    } else {
        document.getElementById("subBtn").style.display = "none";

        document.getElementById("nextBtn").innerHTML = "Next";
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
}

function resetTab(n) {
    var currentTab = 0; // Current tab is set to be the first tab (0)
    showTab(currentTab); // Display the crurrent tab
}

function nextPrev(n) {
    //console.log(n)
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    //if (currentTab >= x.length) {
    // ... the form gets submitted:
    //   document.getElementById("regForm").submit();
    //   return false;
    //}
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByClassName("validateThis");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}


//** start **//

Array.prototype.search = function(elem) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == elem) return i;
    }

    return -1;
};
// multiselec js start
var Multiselect = function(selector) {
    if (!$(selector)) {
        console.error("ERROR: Element %s does not exist.", selector);
        return;
    }

    this.selector = selector;
    this.selections = [];

    sessionStorage.setItem("industries", "");
    (function(that) {
        that.events();
    })(this);
};
// multiselec js End
Multiselect.prototype = {
    open: function(that) {
        var target = $(that).parent().attr("data-target");

        // If we are not keeping track of this one's entries, then
        // start doing so.
        if (!this.selections) {
            this.selections = [];
        }

        $(this.selector + ".multiselect").toggleClass("active");
    },

    close: function() {
        $(this.selector + ".multiselect").removeClass("active");
    },

    events: function() {
        var that = this;

        $(document).on("click", that.selector + ".multiselect > .title", function(e) {
            if (e.target.className.indexOf("close-icon") < 0) {
                that.open();
            }
        });

        $(document).on("click", that.selector + ".multiselect option", function(e) {
            var selection = $(this).attr("value");
            var target = $(this).parent().parent().attr("data-target");

            var io = that.selections.search(selection);

            if (io < 0) that.selections.push(selection);
            else that.selections.splice(io, 1);

            that.selectionStatus();
            that.setSelectionsString();
        });

        $(document).on("click", that.selector + ".multiselect > .title > .close-icon", function(e) {
            that.clearSelections();
        });

        $(document).click(function(e) {
            if (e.target.className.indexOf("title") < 0) {
                if (e.target.className.indexOf("text") < 0) {
                    if (e.target.className.indexOf("-icon") < 0) {
                        if (e.target.className.indexOf("selected") < 0 ||
                            e.target.localName != "option") {
                            that.close();
                        }
                    }
                }
            }
        });
    },

    selectionStatus: function() {
        var obj = $(this.selector + ".multiselect");

        if (this.selections.length) obj.addClass("selection");
        else obj.removeClass("selection");
    },

    clearSelections: function() {
        this.selections = [];
        this.selectionStatus();
        this.setSelectionsString();
        sessionStorage.setItem("industries", "");
    },


    getSelections: function() {
        return this.selections;
    },

    setSelectionsString: function() {
        var selects = this.getSelectionsString().split(", ");
        $(this.selector + ".multiselect > .title").attr("title", selects);

        var opts = $(this.selector + ".multiselect option");

        if (selects.length > 2) {
            var _selects = this.getSelectionsString().split(", ");
            _selects = _selects.splice(0, 2);
            $(this.selector + ".multiselect > .title > .text")
                .text(_selects + " [...]");
        } else {
            $(this.selector + ".multiselect > .title > .text")
                .text(selects);
        }

        for (var i = 0; i < opts.length; i++) {
            $(opts[i]).removeClass("selected");
        }
        var selected_values = selects;
        // console.log(selected_values)
        sessionStorage.setItem("industries", selected_values);


        for (var j = 0; j < selects.length; j++) {
            var select = selects[j];

            for (var i = 0; i < opts.length; i++) {
                if ($(opts[i]).attr("value") == select) {
                    $(opts[i]).addClass("selected");
                    break;
                }
            }
        }
    },

    getSelectionsString: function() {
        if (this.selections.length > 0)
            return this.selections.join(", ");
        else return "Prospects Industries";
    },

    setSelections: function(arr) {
        if (!arr[0]) {
            error("ERROR: This does not look like an array.");
            return;
        }

        this.selections = arr;
        this.selectionStatus();
        this.setSelectionsString();
    },
};
// multiselect1 js start
var Multiselect1 = function(selector) {
    if (!$(selector)) {
        console.error("ERROR: Element %s does not exist.", selector);
        return;
    }

    this.selector = selector;
    this.selections = [];
    this.clearSelections();
    (function(that) {
        that.events();
    })(this);
};
Multiselect1.prototype = {
    open: function(that) {
        var target = $(that).parent().attr("data-target");
        // If we are not keeping track of this one's entries, then
        // start doing so.
        if (!this.selections) {
            this.selections = [];
        }

        $(this.selector + ".multiselect1").toggleClass("active");
    },

    close: function() {
        $(this.selector + ".multiselect1").removeClass("active");
    },

    events: function() {
        var that = this;

        $(document).on("click", that.selector + ".multiselect1 > .title", function(e) {
            if (e.target.className.indexOf("close-icon") < 0) {
                that.open();
            }
        });

        $(document).on("click", that.selector + ".multiselect1 option", function(e) {
            var selection = $(this).attr("value");
            var target = $(this).parent().parent().attr("data-target");

            var io = that.selections.search(selection);

            if (io < 0) that.selections.push(selection);
            else that.selections.splice(io, 1);

            that.selectionStatus();
            that.setSelectionsString();
        });

        $(document).on("click", that.selector + ".multiselect1 > .title > .close-icon", function(e) {
            that.clearSelections();
        });

        $(document).click(function(e) {
            if (e.target.className.indexOf("title") < 0) {
                if (e.target.className.indexOf("text") < 0) {
                    if (e.target.className.indexOf("-icon") < 0) {
                        if (e.target.className.indexOf("selected") < 0 ||
                            e.target.localName != "option") {
                            that.close();
                        }
                    }
                }
            }
        });
    },

    selectionStatus: function() {
        var obj = $(this.selector + ".multiselect1");

        if (this.selections.length) obj.addClass("selection");
        else obj.removeClass("selection");
    },

    clearSelections: function() {
        this.selections = [];
        this.selectionStatus();
        this.setSelectionsString();
        sessionStorage.setItem("locations", "");


    },

    getSelections: function() {
        return this.selections;
    },

    setSelectionsString: function() {
        var selects = this.getSelectionsString().split(", ");
        $(this.selector + ".multiselect1 > .title").attr("title", selects);

        var opts = $(this.selector + ".multiselect1 option");

        if (selects.length > 2) {
            var _selects = this.getSelectionsString().split(", ");
            _selects = _selects.splice(0, 2);
            $(this.selector + ".multiselect1 > .title > .text")
                .text(_selects + " [...]");
        } else {
            $(this.selector + ".multiselect1 > .title > .text")
                .text(selects);
        }

        for (var i = 0; i < opts.length; i++) {
            $(opts[i]).removeClass("selected");
        }
        var selected_values = selects;

        //console.log(selected_values)
        sessionStorage.setItem("locations", selected_values);
        for (var j = 0; j < selects.length; j++) {
            var select = selects[j];

            for (var i = 0; i < opts.length; i++) {
                if ($(opts[i]).attr("value") == select) {
                    $(opts[i]).addClass("selected");
                    break;
                }
            }
        }
    },

    getSelectionsString: function() {
        if (this.selections.length > 0)
            return this.selections.join(", ");
        else return "Prospects Locations";
    },

    setSelections: function(arr) {
        if (!arr[0]) {
            error("ERROR: This does not look like an array.");
            return;
        }

        this.selections = arr;
        this.selectionStatus();
        this.setSelectionsString();
    },
};
// multiselect1 js End

// multiselect2 js start
var Multiselect2 = function(selector) {
    if (!$(selector)) {
        console.error("ERROR: Element %s does not exist.", selector);
        return;
    }

    this.selector = selector;
    this.selections = [];
    this.clearSelections();
    (function(that) {
        that.events();
    })(this);
};
Multiselect2.prototype = {
    open: function(that) {
        var target = $(that).parent().attr("data-target");
        // If we are not keeping track of this one's entries, then
        // start doing so.
        if (!this.selections) {
            this.selections = [];
        }

        $(this.selector + ".multiselect2").toggleClass("active");
    },

    close: function() {
        $(this.selector + ".multiselect2").removeClass("active");
    },

    events: function() {
        var that = this;

        $(document).on("click", that.selector + ".multiselect2 > .title", function(e) {
            if (e.target.className.indexOf("close-icon") < 0) {
                that.open();
            }
        });

        $(document).on("click", that.selector + ".multiselect2 option", function(e) {
            var selection = $(this).attr("value");
            var target = $(this).parent().parent().attr("data-target");

            var io = that.selections.search(selection);

            if (io < 0) that.selections.push(selection);
            else that.selections.splice(io, 1);

            that.selectionStatus();
            that.setSelectionsString();
        });

        $(document).on("click", that.selector + ".multiselect2 > .title > .close-icon", function(e) {
            that.clearSelections();
        });

        $(document).click(function(e) {
            if (e.target.className.indexOf("title") < 0) {
                if (e.target.className.indexOf("text") < 0) {
                    if (e.target.className.indexOf("-icon") < 0) {
                        if (e.target.className.indexOf("selected") < 0 ||
                            e.target.localName != "option") {
                            that.close();
                        }
                    }
                }
            }
        });
    },

    selectionStatus: function() {
        var obj = $(this.selector + ".multiselect2");

        if (this.selections.length) obj.addClass("selection");
        else obj.removeClass("selection");
    },

    clearSelections: function() {
        this.selections = [];
        this.selectionStatus();
        this.setSelectionsString();
        sessionStorage.setItem("revenue", "");


    },

    getSelections: function() {
        return this.selections;
    },

    setSelectionsString: function() {
        var selects = this.getSelectionsString().split(", ");
        $(this.selector + ".multiselect2 > .title").attr("title", selects);

        var opts = $(this.selector + ".multiselect2 option");

        if (selects.length > 6) {
            var _selects = this.getSelectionsString().split(", ");
            _selects = _selects.splice(0, 6);
            $(this.selector + ".multiselect2 > .title > .text")
                .text(_selects + " [...]");
        } else {
            $(this.selector + ".multiselect2 > .title > .text")
                .text(selects);
        }

        for (var i = 0; i < opts.length; i++) {
            $(opts[i]).removeClass("selected");
        }
        var selected_values = selects;

        //console.log(selected_values)
        sessionStorage.setItem("revenue", selected_values);
        for (var j = 0; j < selects.length; j++) {
            var select = selects[j];

            for (var i = 0; i < opts.length; i++) {
                if ($(opts[i]).attr("value") == select) {
                    $(opts[i]).addClass("selected");
                    break;
                }
            }
        }
    },

    getSelectionsString: function() {
        if (this.selections.length > 0)
            return this.selections.join(", ");
        else return "Prospects Revenue range";
    },

    setSelections: function(arr) {
        if (!arr[0]) {
            error("ERROR: This does not look like an array.");
            return;
        }

        this.selections = arr;
        this.selectionStatus();
        this.setSelectionsString();
    },
};
// multiselect2 js End

// multiselect3 js start
var Multiselect3 = function(selector) {
    if (!$(selector)) {
        console.error("ERROR: Element %s does not exist.", selector);
        return;
    }

    this.selector = selector;
    this.selections = [];
    this.clearSelections();
    (function(that) {
        that.events();
    })(this);
};

Multiselect3.prototype = {
    open: function(that) {
        var target = $(that).parent().attr("data-target");
        // If we are not keeping track of this one's entries, then
        // start doing so.
        if (!this.selections) {
            this.selections = [];
        }

        $(this.selector + ".multiselect3").toggleClass("active");
    },

    close: function() {
        $(this.selector + ".multiselect3").removeClass("active");
    },

    events: function() {
        var that = this;

        $(document).on("click", that.selector + ".multiselect3 > .title", function(e) {
            if (e.target.className.indexOf("close-icon") < 0) {
                that.open();
            }
        });

        $(document).on("click", that.selector + ".multiselect3 option", function(e) {
            var selection = $(this).attr("value");
            var target = $(this).parent().parent().attr("data-target");

            var io = that.selections.search(selection);

            if (io < 0) that.selections.push(selection);
            else that.selections.splice(io, 1);

            that.selectionStatus();
            that.setSelectionsString();
        });

        $(document).on("click", that.selector + ".multiselect3 > .title > .close-icon", function(e) {
            that.clearSelections();
        });

        $(document).click(function(e) {
            if (e.target.className.indexOf("title") < 0) {
                if (e.target.className.indexOf("text") < 0) {
                    if (e.target.className.indexOf("-icon") < 0) {
                        if (e.target.className.indexOf("selected") < 0 ||
                            e.target.localName != "option") {
                            that.close();
                        }
                    }
                }
            }
        });
    },

    selectionStatus: function() {
        var obj = $(this.selector + ".multiselect3");

        if (this.selections.length) obj.addClass("selection");
        else obj.removeClass("selection");
    },

    clearSelections: function() {
        this.selections = [];
        this.selectionStatus();
        this.setSelectionsString();
        sessionStorage.setItem("Employee_size", "");


    },

    getSelections: function() {
        return this.selections;
    },

    setSelectionsString: function() {
        var selects = this.getSelectionsString().split(", ");
        $(this.selector + ".multiselect3 > .title").attr("title", selects);

        var opts = $(this.selector + ".multiselect3 option");

        if (selects.length > 5) {
            var _selects = this.getSelectionsString().split(", ");
            _selects = _selects.splice(0, 5);
            $(this.selector + ".multiselect3 > .title > .text")
                .text(_selects + " [...]");
        } else {
            $(this.selector + ".multiselect3 > .title > .text")
                .text(selects);
        }

        for (var i = 0; i < opts.length; i++) {
            $(opts[i]).removeClass("selected");
        }
        var selected_values = selects;

        //console.log(selected_values)
        sessionStorage.setItem("Employee_size", selected_values);
        for (var j = 0; j < selects.length; j++) {
            var select = selects[j];

            for (var i = 0; i < opts.length; i++) {
                if ($(opts[i]).attr("value") == select) {
                    $(opts[i]).addClass("selected");
                    break;
                }
            }
        }
    },

    getSelectionsString: function() {
        if (this.selections.length > 0)
            return this.selections.join(", ");
        else return "Prospects Employee size";
    },

    setSelections: function(arr) {
        if (!arr[0]) {
            error("ERROR: This does not look like an array.");
            return;
        }

        this.selections = arr;
        this.selectionStatus();
        this.setSelectionsString();
    },
};
// multiselect3 js End

// multiselect4 js start
var Multiselect4 = function(selector) {
    if (!$(selector)) {
        console.error("ERROR: Element %s does not exist.", selector);
        return;
    }

    this.selector = selector;
    this.selections = [];
    this.clearSelections();
    (function(that) {
        that.events();
    })(this);
};

Multiselect4.prototype = {
    open: function(that) {
        var target = $(that).parent().attr("data-target");
        // If we are not keeping track of this one's entries, then
        // start doing so.
        if (!this.selections) {
            this.selections = [];
        }

        $(this.selector + ".multiselect4").toggleClass("active");
    },

    close: function() {
        $(this.selector + ".multiselect4").removeClass("active");
    },

    events: function() {
        var that = this;

        $(document).on("click", that.selector + ".multiselect4 > .title", function(e) {
            if (e.target.className.indexOf("close-icon") < 0) {
                that.open();
            }
        });

        $(document).on("click", that.selector + ".multiselect4 option", function(e) {
            var selection = $(this).attr("value");
            var target = $(this).parent().parent().attr("data-target");

            var io = that.selections.search(selection);

            if (io < 0) that.selections.push(selection);
            else that.selections.splice(io, 1);

            that.selectionStatus();
            that.setSelectionsString();
        });

        $(document).on("click", that.selector + ".multiselect4 > .title > .close-icon", function(e) {
            that.clearSelections();
        });

        $(document).click(function(e) {
            if (e.target.className.indexOf("title") < 0) {
                if (e.target.className.indexOf("text") < 0) {
                    if (e.target.className.indexOf("-icon") < 0) {
                        if (e.target.className.indexOf("selected") < 0 ||
                            e.target.localName != "option") {
                            that.close();
                        }
                    }
                }
            }
        });
    },

    selectionStatus: function() {
        var obj = $(this.selector + ".multiselect4");

        if (this.selections.length) obj.addClass("selection");
        else obj.removeClass("selection");
    },

    clearSelections: function() {
        this.selections = [];
        this.selectionStatus();
        this.setSelectionsString();
        sessionStorage.setItem("department", "");


    },

    getSelections: function() {
        return this.selections;
    },

    setSelectionsString: function() {
        var selects = this.getSelectionsString().split(", ");
        $(this.selector + ".multiselect4 > .title").attr("title", selects);

        var opts = $(this.selector + ".multiselect4 option");

        if (selects.length > 2) {
            var _selects = this.getSelectionsString().split(", ");
            _selects = _selects.splice(0, 2);
            $(this.selector + ".multiselect4 > .title > .text")
                .text(_selects + " [...]");
        } else {
            $(this.selector + ".multiselect4 > .title > .text")
                .text(selects);
        }

        for (var i = 0; i < opts.length; i++) {
            $(opts[i]).removeClass("selected");
        }
        var selected_values = selects;

        //console.log(selected_values)
        sessionStorage.setItem("department", selected_values);
        for (var j = 0; j < selects.length; j++) {
            var select = selects[j];

            for (var i = 0; i < opts.length; i++) {
                if ($(opts[i]).attr("value") == select) {
                    $(opts[i]).addClass("selected");
                    break;
                }
            }
        }
    },

    getSelectionsString: function() {
        if (this.selections.length > 0)
            return this.selections.join(", ");
        else return "Prospects Department";
    },

    setSelections: function(arr) {
        if (!arr[0]) {
            error("ERROR: This does not look like an array.");
            return;
        }

        this.selections = arr;
        this.selectionStatus();
        this.setSelectionsString();
    },
};
// multiselect4 js End

function updateclass() {
    var userName = $("#userName").val();
    var userEmail = $("#userEmail").val();
    var userPhone = $("#userPhone").val();
    console.log(userName);
    if (userName == "") {
        $("#userName").addClass("validateThis");
    }
    if (userEmail == "") {
        $("#userEmail").addClass("validateThis");
    }
    if (userPhone == "") {
        $("#userPhone").addClass("validateThis");
    }
}

function updateclassSecond() {
    var userName = $("#userNameSecond").val();
    var userEmail = $("#userEmailSecond").val();
    var userPhone = $("#userPhoneSecond").val();
    console.log(userName);
    if (userName == "") {
        $("#userNameSecond").addClass("validateThis");
    }
    if (userEmail == "") {
        $("#userEmailSecond").addClass("validateThis");
    }
    if (userPhone == "") {
        $("#userPhoneSecond").addClass("validateThis");
    }
}

$(document).ready(function() {
    var multiInd = new Multiselect("#Industry");
    var multiLoc = new Multiselect1("#sel_location");
    var multiRev = new Multiselect2("#rev");
    var multiEmp = new Multiselect3("#Employee_size");
    var multiDep = new Multiselect4("#department");
    var multitit = new Multiselect5("#title");

});


// scroll down

// Select all »a« elements with a parent class »links« and add a function that is executed on click
$('.links a').on('click', function(e) {

    // Define variable of the clicked »a« element (»this«) and get its href value.
    var href = $(this).attr('href');

    // Run a scroll animation to the position of the element which has the same id like the href value.
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, '300');

    // Prevent the browser from showing the attribute name of the clicked link in the address bar
    e.preventDefault();

});

function subscribeMailchimp(idval) {
    var formid = "subform-" + idval;
    var emailid = "email" + idval
    var responsetext = "response-" + idval;
    var email = document.getElementById(emailid).value;
    var emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var base_url = $('#base').val();
    var url ="";
    if (typeof base_url !== 'undefined'){
         url = base_url + "welcome/mailchimp";

    }
    else{
         url = "welcome/mailchimp";

    }

    // var base_url = $('#base').val();
    // var url = base_url + "welcome/mailchimp";
    // alert(base_url)
    if (emailRegex.test(email)) {
        var request = $.ajax({
            url: url,
            type: "POST",
            data: {
                email: email
            },
            dataType: "html"
        });
        request.done(function(response) {
            // alert(response)
            if (response != "") {
                $("#" + responsetext).css("display", "block");
                $("#" + responsetext).html(response);
                $("#" + formid)[0].reset();
                removealert();
            }
        });
    } else {
        $("#" + responsetext).css("display", "block");
        $("#" + responsetext).html('<p class="alert alert-danger">Enter valid Email Address</p>');
        removealert();
    }
}