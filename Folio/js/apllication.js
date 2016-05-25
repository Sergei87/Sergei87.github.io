

$(window).load(function() {
  // The slider being synced must be initialized first
 $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 160,
        itemMargin: -19,
        direction: "vertical",
        directionNav: false,
        move:1,
        easing: 'easeInElastic', 
        asNavFor: '#slider',
                   
      });
 
  $('#slider').flexslider({
    animation: "fade",
    controlNav: false,
    animationLoop: true,
    slideshow: true,
    pausePlay: true,
    pauseText: "Vasya",             
    playText: "petya",   
    sync: "#carousel",
    directionNav: false
  
  });



$('.menu__link').on('click', function (e) {
	
	e.preventDefault();

	$('.content').toggle();
	$('.active-link').removeClass('active-link');
	$(this).addClass('active-link');
});



$('.close-button').on('click', function (e) {
	$(this).parent().hide();
	$('.active-link').removeClass('active-link');
	$('.menu__link:first').addClass('active-link');
})

});