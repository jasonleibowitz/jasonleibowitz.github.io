$(document).ready(function () {
    if(WURFL.is_mobile){
      console.log("mobile device");
    } else {
      console.log('desktop device');
      changesForDesktop();
    }

  // Enable Local Scroll
  $.localScroll();

});


var changesForDesktop = function (){
  // Resize social media icons
  $("#twitter").removeClass('fa-3x').addClass('fa-4x');
  $("#instagram").removeClass('fa-3x').addClass('fa-4x');
  $("#linkedin").removeClass('fa-3x').addClass('fa-4x');
  $("#github").removeClass('fa-3x').addClass('fa-4x');
  $("#rss").removeClass('fa-3x').addClass('fa-4x');

  // Fix Footer Width
  $("#footer").removeClass('col-xs-12').addClass('col-xs-10');

  // Mix It Up
  $('#Container').mixItUp();

  ////////// Animation for Arrow //////////

  // Define Arrow Animation
  function animateArrow(){
    $('.fa-hand-o-up').addClass('animated bounce');
  }

  // Define Arrow Animation Off
  function animateOffArrow(){
    $('.fa-hand-o-up').removeClass('animated bounce');
  }

  // Set Interval for Arrow Animation
  function setIntervalArrowAnimation() {
    var intervalOnID = setInterval(animateArrow, 1000);
    var intervalOffID = setInterval(animateOffArrow, 4000);
  }

  // Default Headshot
  function defaultHeadshot(id){
    $(id).mouseleave(function(event){
      changeHeadshot('-385px');
    });
  }

  // Function To Change Headshot on SM Icon Hover
  function changeHeadshot(position){
    $('img.headshot').css('margin-left', position);
  }

  ////////// Logic for Headshots //////////
  $('#twitter').mouseover(function(event){
    changeHeadshot(0);
  });
  defaultHeadshot('#twitter');

  $('#instagram').mouseover(function(event){
    changeHeadshot('-770px');
  });
  defaultHeadshot('#instagram');

  $('#linkedin').mouseover(function(event){
    changeHeadshot('-180px');
  });
  defaultHeadshot('#linkedin');

  $('#github').mouseover(function(event){
    changeHeadshot('-580px');
  });
  defaultHeadshot('#github');

  $('#rss').mouseover(function(event){
    changeHeadshot('-990px');
  });
  defaultHeadshot('#rss');


};


