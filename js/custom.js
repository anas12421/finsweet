$(function(){

  "use strick"


  // popup js

  const popup = document.querySelector('.popup');
  const close = document.querySelector('.close');

  window.onload = function(){
    setTimeout(function(){
      popup.style.display = "block"
    }, 500)
    // $(".popup_item").addClass("open_popup")
  }


  close.addEventListener('click' , () => {
    popup.style.display = "none"
  })


  

  

  $(".backtotop i").on('click' , function(){
    $("html,body").animate({
      scrollTop:0
    },1200)
  })

  $(window).on('scroll' , function(){
    let scrolling = $(this).scrollTop()

    if(scrolling > 20){
      $(".backtotop i").fadeIn(500)
    }else{
      $(".backtotop i").fadeOut(500)
    }

    if(scrolling > 50){
      $(".menu").addClass("menu_ex")
    }else{
      $(".menu").removeClass("menu_ex")
    }
  })
  
  

  $('.timer').counterUp({
    delay: 10,
    time: 1000
});
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  })