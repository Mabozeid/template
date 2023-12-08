/*jslint browser: true*/
/*global $, console, window*/

$(document).ready(function () {
  "use strict"

  var win = $(window),
    navbar = $(".navbar")

  // Initiate the wowjs
  new WOW().init();

  /*========== Start Navbar Auto Change  ==========*/
  win.on("scroll", function () {
    if (win.scrollTop() > 50) {
      navbar.addClass("scroll").removeClass("fixed-top")
    } else {
      navbar.addClass("fixed-top").removeClass("scroll")
    }
  })

  // Sync Navbar Links With Section
  $("body").scrollspy({
    target: "#navtoggler",
    offset: 82,
  })

  /*========== Start Scroll For Navigation Menu ==========*/
  navbar.on("click", "a", function() {
    var $anchor = $(this)
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 82,
        },
        1000
      )
  })

  //// COLLAPSED MENU CLOSE ON CLICK
  navbar.on("click", ".navbar-collapse", function (e) {
    if ($(e.target).is("a")) {
      $(this).collapse("hide")
    }
  })


  // start owl-carousel
  $(document).ready(function () {
    $("#partners").owlCarousel()
  })
  $("#partners").owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

})


/*-----------  strat Pre-loader  ---------*/
$(window).on("load", function () {
  $(".overlay-loading").fadeOut(2000)
})
/*-----------  End Pre-loader   ---------*/

/*-----------  start scroll-up  ---------*/

$(window).on("scroll", function () {
  var scrolltop = $(".scroll-top")
  if ($(window).scrollTop() >= 1000) {
    scrolltop.fadeIn(400)
  } else {
    scrolltop.fadeOut(400)
  }
})
// Back To 0 Scroll Top body
var scrolltop = $(".scroll-top")
scrolltop.on("click", function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1000
  )
})

/*-----------  end scroll-up  ---------*/

