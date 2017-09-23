$(document).ready(function() {
	centerContent();
});

function centerContent() {
	var NUMBEROFSECTIONS = 4;
	for (var i = 1; i <= NUMBEROFSECTIONS; i++) {
		$content = $(".content" + i);
		contentHeight = $content.height();
		containerHeight = $(".bg-" + i).height();
		$content.css("margin-top", (containerHeight/2 - contentHeight/2) + "px");
	}
}

function projectHover() {
	$(".thumbnail").hover(function() {
		$(".image-caption", this).slideToggle("slow");
	}, function() {
		$(".image-caption", this).slideToggle("slow");
	});
}
