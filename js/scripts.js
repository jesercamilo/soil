$(function() {
  $('a[href*=\\#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top-10}, 1250, 'easeInOutSine');
  });
});

(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    $("#main-navbar-fade").hide();

    // fade in #main-navbar-fade
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 100) {
                $('#main-navbar-fade').fadeIn();
            } else {
                $('#main-navbar-fade').fadeOut();
            }
        });
    });

});
  }(jQuery));
