$(document).ready(function () {
    console.log('loaded bro');
    setIntervalArrowAnimation();

    $("#owl-demo").owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay: true

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
  });

    $('#twitter-icon').mouseover(function(event) {
        changeHeadshot(0);
        changeIcon('twitter-icon', 'images/icons/twitter_color.png');
    });
    $('#twitter-icon').mouseleave(function(event){
      defaultHeadshot();
      changeIcon('twitter-icon', 'images/icons/twitter_default.png');
    });

    $('#instagram-icon').mouseover(function(event) {
        changeHeadshot(-770);
        changeIcon('instagram-icon', 'images/icons/instagram_color.png');
    });
    $('#instagram-icon').mouseleave(function(event){
      defaultHeadshot();
      changeIcon('instagram-icon', 'images/icons/instagram_default.png');
    });

    $('#linkedin-icon').mouseover(function(event) {
        changeHeadshot(-180);
        changeIcon('linkedin-icon','images/icons/linkedin_color.png');
    });
    $('#linkedin-icon').mouseleave(function(event){
      defaultHeadshot();
      changeIcon('linkedin-icon','images/icons/linkedin_default.png');
    });

    $('#github-icon').mouseover(function(event) {
        changeHeadshot(-580);
        changeIcon('github-icon','images/icons/github_color.png');
    });
    $('#github-icon').mouseleave(function(event){
      defaultHeadshot();
      changeIcon('github-icon','images/icons/github_default.png');
    });

    $('#blog-icon').mouseover(function(event) {
      changeHeadshot(-990);
    });
    $('#blog-icon').mouseleave(function(event){
      defaultHeadshot();
    });

    $.localScroll();

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }

    $(window).resize(function(){
       console.log('resize called');
       var width = $(window).width();
       if(width >= 320 && width <= 568){
           $('.fa-twitter').removeClass('fa-4x').addClass('fa-2x');
           $('.twitter').removeClass('col-md-1').addClass('col-xs-1');
           $('.twitter').removeClass('col-md-offset-4');
           $('.fa-instagram').removeClass('fa-4x').addClass('fa-2x');
           $('.instagram').removeClass('col-md-1').addClass('col-xs-1');
           $('.fa-linkedin-square').removeClass('fa-4x').addClass('fa-2x');
           $('.linkedin').removeClass('col-md-1').addClass('col-xs-1');
           $('.fa-github').removeClass('fa-4x').addClass('fa-2x');
           $('.github').removeClass('col-md-1').addClass('col-xs-1');
           $('.fa-envelope-o').removeClass('fa-4x').addClass('fa-2x');
           $('.fa-linkedin').removeClass('fa-4x').addClass('fa-2x');
           $('.fa-file-text-o').removeClass('fa-4x').addClass('fa-2x');

       }
    })
    .resize();//trigger the resize event on page load.

});



});

function defaultHeadshot(){
  $('img.headshot').css('margin-left', -385);
}

function changeHeadshot(position){
  $('img.headshot').css('margin-left', position);
}

function changeIcon(icon, img){
  $('#'+icon).attr('src', img);
}

function setIntervalArrowAnimation() {
  var intervalOnID = setInterval(animateArrow, 1000);
  var intervalOffID = setInterval(animateOffArrow, 1900);
}

function animateArrow(){
  $('.fa-hand-o-up').addClass('animated bounce');
}

function animateOffArrow(){
  $('.fa-hand-o-up').removeClass('animated bounce');
}
