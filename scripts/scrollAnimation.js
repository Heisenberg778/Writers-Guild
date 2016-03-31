/*global*/

function goToByScroll(id) {
	$('html,body').animate({
		scrollTop: $(id).offset().top
	}, '1000');
}

window.onload = function () {
		$("a").click(function (e) {
		e.preventDefault();
		goToByScroll($(this).attr("href"));
	});
	
	//experiment:
	$("#location-panel li").click(function (e) {
		e.preventDefault();
		goToByScroll($(this).attr("name"));
	});
}