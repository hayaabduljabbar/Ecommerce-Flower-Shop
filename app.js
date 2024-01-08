$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
       autoplay:true,
        margin:30,
        loop:true,
        dots:true,
       nav:true,
       navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>" ],
       responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  });