$(document).ready(function() {
	$(".link-list").hide();

	$("#reddit-div").hover(
		function() {
			$("#reddit-list").filter(':not(:animated)').show(300);
		},
		function () {
			$("#reddit-list").hide(300);
		}
	);

	$("#videos-div").hover(
		function() {
			$("#videos-list").filter(':not(:animated)').show(300);
		},
		function () {
			$("#videos-list").hide(300);
		}
	);

	$("#programming-div").hover(
		function() {
			$("#programming-list").filter(':not(:animated)').show(300);
		},
		function () {
			$("#programming-list").hide(300);
		}
	);
});
