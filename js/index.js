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
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);
$('.carousel').carousel({
    interval: 2000
});



$(function() {
    var oTop = $('.headings').offset().top - window.innerHeight;
    $(window).scroll(function(){

        var pTop = $('body').scrollTop();
        console.log( pTop + ' - ' + oTop );   //just for your debugging
        if( pTop > oTop ){
            start_count();
        }
    });
});
function start_count(){
    alert('manupandey');
}