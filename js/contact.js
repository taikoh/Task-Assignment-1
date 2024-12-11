// I was unsure if I should add the button directly in the HTML file, or add it using a function, but I felt it made sense to add it using jQuery.
$("document").ready(function () {
	$("#contact h2:first")
		.next()
		.append(
			'<p><button id="contactBtn" type="button" class="mt-3 btn btn-outline-primary">Contact</button></p>'
		);
	$("#contactBtn").click(function () {
		const email = prompt("Enter your e-mail address:");
		const telephone_number = parseInt(prompt("Enter your telephone number:"));
		const address = prompt("Enter your home address:");

		if (isNaN(telephone_number)) {
			alert("Please enter a valid phone number.");
			return;
		} else {
			$("#contact h5:first").next().text(telephone_number);
		}

		if (!email.includes("@") || !email.includes(".")) {
			alert("Please enter a valid e-mail.");
			return;
		} else {
			$("#contact h5:nth-of-type(1)").next().text(email);
		}

		$("#contact h5:contains('Visit')").next().text(address);

		console.log("From:", email);
		console.log("Contact:", telephone_number);
		console.log("Address:", address);
	});
});
