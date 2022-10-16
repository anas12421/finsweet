$(function(){

"use strick"



$('.clients_main_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow:'<i class="fa-solid fa-angle-right cl_n"></i>',
  prevArrow:'<i class="fa-solid fa-angle-left cl_p"></i>',
  autoplay: true,
  autoplaySpeed: 1500,
});


$('.team_main_slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1300,
  arrows:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});








































})