$("document").ready(function () {
	$(".aboutme").text("I am Andreas Jørgensen - the code master");
	$("#about p:first").text("I love lasagna.");
	$("#about p:first").next().text("I'm fascinated by space exploration.");

	$("#about p:first").click(function () {
		$(this).css({
			"background-color": "powderblue",
			color: "white",
		});
	});

	$("#about h3").click(function () {
		$(this).css({
			"background-color": "powderblue",
			color: "white",
		});
	});

	$("#about p:first")
		.next()
		.click(function () {
			$(this).css({
				"background-color": "powderblue",
				color: "white",
			});
		});
});
