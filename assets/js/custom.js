/*jslint browser: true*/
/*global $, console, window*/

$(document).ready(function () {
  "use strict"

  var win = $(window),
    navbar = $(".navbar")

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
  navbar.on("click", "a", function (e) {
    e.preventDefault()
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
    $("#partners,#testimonial-carousel").owlCarousel()
  })
  $("#partners").owlCarousel({
    loop: true,
    merge: true,
    margin: 30,
    smartSpeed: 1000,
    autoplay: 2000,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  })

  $("#testimonial-carousel").owlCarousel({
    animateOut: "fadeOut",
    animateIn: "flipInX",
    stagePadding: 30,
    smartSpeed: 450,
    loop: true,
    nav: true,
    navText: [
      "<i class='fas fa-angle-left'></i>",
      "<i class='fas fa-angle-right'></i>",
    ],
    items: 1,
    margin: 10,
    autoplay: false,
    dots: false,
    merge: true,
  })
})


/*-----------  strat Progress Bar  js  ---------*/

// start animated Progress bar //

$(document).ready(function () {
  "use strict"

  // start animated Progress bar //

  function animateProgressBar() {
    $(".skills-bar .skills .gragh").each(function () {
      var percent = $(this).data("percent")
      $(this).css(
        {
          height: percent + "%",
        },
        function () {
          $(".percent").fadeIn(3000)
        }
      )
    })
  }

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > $(".about").offset().top + 200) {
      animateProgressBar()
    }
  })
  if ($(window).scrollTop() > $(".about").offset().top + 200) {
    animateProgressBar()
  }
})
// end animated progress  bar //

/*-----------  End Progress Bar  js  ---------*/



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

