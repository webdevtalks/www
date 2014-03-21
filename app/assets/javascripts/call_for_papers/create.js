$(function(){
  $( "input[type='submit']" ).click(function() {
    $("form[data-remote]").on("ajax:success", function(e, data, status, xhr) {
      $('.flash-notice').show(300);
      $(":input:not(input[type=submit])").val("");
      $( ":input:enabled" ).focus(function() {
        $(".flash-notice").hide(1000);
      });
    })
  });
});
