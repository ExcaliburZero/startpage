$(document).ready(function() {
	$(".link-list").hide();

	$("#reddit-div").hover(
		function() {
			$("#reddit-list").show(300)
		},
		function () {
			$("#reddit-list").hide(300)
		}
	);

	$("#videos-div").hover(
		function() {
			$("#videos-list").show(300)
		},
		function () {
			$("#videos-list").hide(300)
		}
	);

	$("#programming-div").hover(
		function() {
			$("#programming-list").show(300)
		},
		function () {
			$("#programming-list").hide(300)
		}
	);
});
