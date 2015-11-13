$(document).ready(function() {
  // $('.buttonleft').hide('fast')
  // $('.buttonright').hide('fast')
  //

  $('.testfeed').mouseenter(function() {
    //$('.buttonleft').fadeIn(1000);
    $('.buttonleft').animate({marginTop: '+=56px'});
    $('.buttonright').animate({marginTop: '+=56px'});
    // $(this).animate({paddingBottom: '+=50px'});
    $('.testfeed').animate({height: '+=46px'});
  });

  $('.testfeed').mouseleave(function() {
    //$('.buttonleft').fadeOut('fast')
    $('.buttonleft').animate({marginTop: '-=56px'});
    $('.buttonright').animate({marginTop: '-=56px'});
    // $(this).animate({paddingBottom: '-=50px'});
    $('.testfeed').animate({height: '-=46px'});
  });

  $('.buttonright').click(function() {
    $('.comment').animate({marginTop: '+=99px'});
    $('.testfeed').animate({height: '+=46px'});
  });

});
