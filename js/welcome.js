// Adds functionality to 'Like' button.
$("document").ready(function () {
	$("#liveToastBtn").click(function () {
		$("#liveToast").toast("show");
	});
});

// 'I'm bored' button prints API content to console
$("#boredBtn").click(function () {
	$.ajax({
		url: "https://boredapi.restapi.co.za/",
		success: function (response) {
			console.log(response);
		},
		error: function () {
			console.log("Oops, that didn't work!");
		},
	});
});
