$(document).ready(function() {
  // $('.buttonleft').hide('fast')
  // $('.buttonright').hide('fast')



  $('.testfeed').mouseenter(function() {
    //$('.buttonleft').fadeIn(1000);
    $('.buttonleft', this).animate({marginTop: '+=56px'});
    $('.likes', this).animate({marginTop: '+=56px'});
    $('.buttonright', this).animate({marginTop: '+=56px'});
    $('.comments', this).animate({marginTop: '+=56px'});
    // $(this).animate({paddingBottom: '+=50px'});
  //  $('.testfeed').animate({height: '+=46px'});
  });

  $('.testfeed').mouseleave(function() {
    //$('.buttonleft').fadeOut('fast')
    $('.buttonleft', this).animate({marginTop: '-=56px'});
    $('.likes', this).animate({marginTop: '-=56px'});
    $('.buttonright', this).animate({marginTop: '-=56px'});
    $('.comments', this).animate({marginTop: '-=56px'});
    // $(this).animate({paddingBottom: '-=50px'});
  //  $('.testfeed').animate({height: '-=46px'});
  });

});
