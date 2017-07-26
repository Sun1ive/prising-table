$(function() {
	$(".lowResMenu").click(function(event) {
		$(this).children(".subMenu").slideToggle("slow");
	});
});

$(window).on("load",function() {
	let windowHeight = $(document).height();
	let speedStep = 2;
	let timeScrolling = windowHeight / speedStep;

	$(".scrollTop").click(function(event) {
		$("html, body").animate({
			scrollTop: 0
		}, timeScrolling);
	});
});