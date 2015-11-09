$(document).ready(function() {
  // $('.buttonleft').hide('fast')
  // $('.buttonright').hide('fast')
  //

  $('.testfeed').mouseenter(function() {
    //$('.buttonleft').fadeIn(1000);
    $('.buttonleft').animate({marginTop: '+=56px'});
    // $(this).animate({paddingBottom: '+=50px'});
    $(this).animate({height: '+=46px'});
  });

  $('.testfeed').mouseleave(function() {
    //$('.buttonleft').fadeOut('fast')
    $('.buttonleft').animate({marginTop: '-=56px'});
    // $(this).animate({paddingBottom: '-=50px'});
    $(this).animate({height: '-=46px'});
  });

});
