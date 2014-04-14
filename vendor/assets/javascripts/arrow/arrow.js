$(window).scroll( function(){
  var topWindow = $(window).scrollTop();
  var topWindow = topWindow * 1.5;
  var windowHeight = $(window).height();
  var position = topWindow / windowHeight;

  position = 1 - position;

  $('.arrow-wrap').css('opacity', position);
});
