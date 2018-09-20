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

// start carousel with timeout
$('.carousel-slider').carousel({fullWidth: true, padding:0},setTimeout(autoplay, 4500));
function autoplay() {
	$('.carousel').carousel('next');
	setTimeout(autoplay, 7500);
}

// move to next carousel
$('.moveNextCarousel').click(function(e){
	e.preventDefault();
	e.stopPropagation();
	$('.carousel').carousel('next');
});

// move to prev carousel
$('.movePrevCarousel').click(function(e){
	e.preventDefault();
	e.stopPropagation();
	$('.carousel').carousel('prev');
});}(jQuery));

