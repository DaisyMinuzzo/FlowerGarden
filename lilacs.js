console.log('test')


$(".menu").click(function(){
	$('.menu').toggleClass("open")
})

$(".double").mouseover(function(){
	$(".another").addClass("shapeShift")
})

$(".double").mouseout(function(){
	var ssf = $(document).scrollTop();
	$(".another").removeClass("shapeShift")
})


$(document).scroll(function(){
	var ssf = $(document).scrollTop();

	$('em').html({
		"transform":"rotate("+ssf+"deg)"
	})
	
})