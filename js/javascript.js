$(document).ready(function() {
	centerMeContent();
	centerAboutContent();
	centerProjectsContent();
	centerHireMeContent();
});

function centerMeContent() {
	$content1 = $('.content1');
	contentHeight = $content1.height();
	containerHeight = $('.bg-1').height();
	$content1.css("margin-top", (containerHeight/2 - contentHeight/2) + "px");
}

function centerAboutContent() {
	$content2 = $('.content2');
	contentHeight = $content2.height();
	containerHeight = $('.bg-2').height();
	$content2.css("margin-top", (containerHeight/2 - contentHeight/2) + "px");
}

function centerProjectsContent() {
	$content3 = $('.content3');
	contentHeight = $content3.height();
	containerHeight = $('.bg-3').height();
	$content3.css("margin-top", (containerHeight/2 - contentHeight/2) + "px");
}

function centerHireMeContent() {
	$content4 = $('.content4');
	contentHeight = $content4.height();
	containerHeight = $('.bg-4').height();
	$content4.css("margin-top", (containerHeight/2 - contentHeight/2) + "px");
}
