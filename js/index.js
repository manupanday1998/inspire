/*var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
	typeSpeed : 50,
	backSpeed : 25,
	showCursor: false,
	loop: true,
});*/

// slideshow code

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
	.fadeOut(500)
	.next()
	.fadeIn(500)
	.end()
	.appendTo('#slideshow');
}, 3000);
// var i=1;

// for(i=1; ;i++ ){
// 	$("#slideshow:nth-child(i%3)").css("display", "block").delay(3000);
// 	$("#slideshow:nth-child(i%3)").css("display", "none");
// }


/* ============= flip =============== */

$(document).ready(function(){
	// set up hover panels
	// although this can be done without JavaScript, we've attached these events
	// because it causes the hover to be triggered when the element is tapped on a touch device
	$('.hover').hover(function(){
		$(this).addClass('flip');
	},function(){
		$(this).removeClass('flip');
	});
}); 


