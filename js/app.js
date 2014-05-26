$(document).ready(function () {
    console.log('loaded bro');

    $('#twitter-icon').mouseover(function(event) {
        changeHeadshot(0);
        changeIcon('twitter-icon', 'images/icons/twitter_color.png');
    });
    $('#twitter-icon').mouseleave(function(event){
      defaultHeadshot();
      changeIcon('twitter-icon', 'images/icons/twitter_default.png');
    });

    $('#instagram-icon').mouseover(function(event) {
        changeHeadshot(-800);
        changeIcon('instagram-icon', 'images/icons/instagram_color.png');
    });
    $('#instagram-icon').mouseleave(function(event){
      defaultHeadshot();
      changeIcon('instagram-icon', 'images/icons/instagram_default.png');
    });

    $('#linkedin-icon').mouseover(function(event) {
        changeHeadshot(-200);
        changeIcon('linkedin-icon','images/icons/linkedin_color.png');
    });
    $('#linkedin-icon').mouseleave(function(event){
      defaultHeadshot();
      changeIcon('linkedin-icon','images/icons/linkedin_default.png');
    });

    $('#github-icon').mouseover(function(event) {
        changeHeadshot(-600);
        changeIcon('github-icon','images/icons/github_color.png');
    });
    $('#github-icon').mouseleave(function(event){
      defaultHeadshot();
      changeIcon('github-icon','images/icons/github_default.png');
    });

    $.localScroll();

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
});



});

function defaultHeadshot(){
  $('img.headshot').css('margin-left', -400);
}

function changeHeadshot(position){
  $('img.headshot').css('margin-left', position);
}

function changeIcon(icon, img){
  $('#'+icon).attr('src', img);
}
