/*var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
	typeSpeed : 50,
	backSpeed : 25,
	showCursor: false,
	loop: true,
});*/

/* ============= quote engine =============== */

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
	.fadeOut(500)
	.next()
	.fadeIn(500)
	.end()
	.appendTo('#slideshow');
}, 3000);


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

/* ============= testimonials =============== */

function firstDivDisplay(){
	$("#firstTestimonial").css("display", "block");
}
function secondDivDisplay(){
	$("#secondTestimonial").css("display", "block");
}
function thirdDivDisplay(){
	$("#thirdTestimonial").css("display", "block");
}
function hideOfTestimonial(){
	$("#firstTestimonial").css("display", "none");
	$("#secondTestimonial").css("display", "none");
	$("#thirdTestimonial").css("display", "none");
}