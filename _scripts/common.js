$(function() {
	$(".lowResMenu").click(function(event) {
		$(this).children(".subMenu").slideToggle("slow");
	});
});

$(window).on("load",function() {
	let windowHeight = $(document).height();
	let speedStep = 3;
	let timeScrolling = windowHeight / speedStep;

	$(".scrollTop").click(function(event) {
		$("html, body").animate({
			scrollTop: 0
		}, timeScrolling);
	});

	$(".main-arrow").click(function(event) {
		$("html, body").animate({
			scrollTop: windowHeight
		}, 2500);
	});
});