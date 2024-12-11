const tblBodyId = document.querySelector("tbody");
tblBodyId.setAttribute("id", "tblBody");

function createRow(rowId, cellContents) {
	const row = document.createElement("tr");
	row.setAttribute("id", rowId);

	cellContents.forEach((content) => {
		const cell = document.createElement("td");
		cell.innerHTML = content;
		row.appendChild(cell);
	});

	return row;
};

const svgIcon1 = '<svg class="iconAlign" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0); --darkreader-inline-fill: #e8e6e3;" data-darkreader-inline-fill=""><circle cx="17" cy="4" r="2"></circle><path d="M15.777 10.969a2.007 2.007 0 0 0 2.148.83l3.316-.829-.483-1.94-3.316.829-1.379-2.067a2.01 2.01 0 0 0-1.272-.854l-3.846-.77a1.998 1.998 0 0 0-2.181 1.067l-1.658 3.316 1.789.895 1.658-3.317 1.967.394L7.434 17H3v2h4.434c.698 0 1.355-.372 1.715-.971l1.918-3.196 5.169 1.034 1.816 5.449 1.896-.633-1.815-5.448a2.007 2.007 0 0 0-1.506-1.33l-3.039-.607 1.772-2.954.417.625z"></path></svg>'; // Plus icon
const svgIcon2 = '<svg class="iconAlign" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0); --darkreader-inline-fill: #e8e6e3;" data-darkreader-inline-fill=""><path d="M6.012 18H21V4a2 2 0 0 0-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1zM8 6h9v2H8V6z"></path></svg>'; // Arrow icon
const svgIcon3 = '<svg class="iconAlign" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0); --darkreader-inline-fill: #e8e6e3;" data-darkreader-inline-fill=""><path d="M18 11c0-.959-.68-1.761-1.581-1.954C16.779 8.445 17 7.75 17 7c0-2.206-1.794-4-4-4-1.516 0-2.822.857-3.5 2.104C8.822 3.857 7.516 3 6 3 3.794 3 2 4.794 2 7c0 .902.312 1.726.817 2.396A1.993 1.993 0 0 0 2 11v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-2.637l4 2v-7l-4 2V11zm-5-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM6 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path></svg>'; // Cross icon
const svgIcon4 = '<svg class="iconAlign" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0); --darkreader-inline-fill: #e8e6e3;" data-darkreader-inline-fill=""><path d="M2 8v11.529S6.621 19.357 12 22c5.379-2.643 10-2.471 10-2.471V8s-5.454 0-10 2.471C7.454 8 2 8 2 8z"></path><circle cx="12" cy="5" r="3"></circle></svg>'; // Grid icon
const svgIcon5 = '<svg class="iconAlign" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(0, 0, 0); --darkreader-inline-fill: #e8e6e3;" data-darkreader-inline-fill=""><path d="M19.221 10.803 12 10V4a2 2 0 0 0-4 0v12l-3.031-1.212a2 2 0 0 0-2.64 1.225l-.113.34a.998.998 0 0 0 .309 1.084l5.197 4.332c.179.149.406.231.64.231H19a2 2 0 0 0 2-2v-7.21a2 2 0 0 0-1.779-1.987z"></path></svg>'; // Divider icon

const imgElement1 = '<img class="img-fluid img-thumbnail rounded mx-auto d-block" src="img/running.jpg" onClick="openWindow" alt="Line drawing of a man running">';
const imgElement2 = '';
const imgElement3 = '<img class="img-fluid img-thumbnail rounded mx-auto d-block" src="img/lotr.jpg" onClick="openWindow" alt="Shards of Narsil from Lord of the Rings">';
const imgElement4 = '<img class="img-fluid img-thumbnail rounded mx-auto d-block" src="img/code.jpg" onClick="openWindow" alt="Line drawing of a man with a laptop">';
const imgElement5 = '<img class="img-fluid img-thumbnail rounded mx-auto d-block" src="img/hand.jpeg" onClick="openWindow" alt="Line drawing of a hand pointing">';

const rowInput = [
	{ id: "rowRun", cells: ["rowRun", svgIcon1, "Favorite hobby.", "I love running. The fresh air, and the endless opportunities to explore hidden paths and scenic trails. Discovering new places while running is amazing!", imgElement1] },
	{ id: "rowBook", cells: ["rowBook", svgIcon2, "Favorite book series.", "My favorite book series is The Stormlight Archives,<br>by Brandon Sanderson.", imgElement2] },
	{ id: "rowMovie", cells: ["rowMovie", svgIcon3, "Favorite movie.", "Choosing a favorite movie is nearly impossible, but The Lord of the Rings trilogy stands above the rest. <br>From epic battles to breathtaking landscapes, these films are a masterpiece of storytelling that I could watch over and over.", imgElement3] },
	{ id: "rowStudy", cells: ["rowStudy", svgIcon4, "Currently studiying.", "I am currently studying Back-End Development part time<br> at Noroff School of Technology and Digital Media", imgElement4] },
	{ id: "rowFunfact", cells: ["rowFunfact", svgIcon5, "Something I can do.", "I have a unique party trick—I can bend my index finger all the way back to touch the back of my hand. It’s a bit freaky, but it never fails to impress (or gross out) anyone watching!", imgElement5] },
];
rowInput.forEach((rowData) => {
	const row = createRow(rowData.id, rowData.cells);
	tblBodyId.appendChild(row);
});

// add image to table and open image in new tab when clicked
$("tr:nth-child(2) td:last-child").html(
	'<a href="img/stormlight.png" target="_blank"><img class="img-fluid img-thumbnail rounded mx-auto d-block" src="img/stormlight.png" onClick="openWindow" alt="Bridge crew logo from Stormlight Archives"></a>'
);

// change font color on hover, return to black
$(function () {
	$("#tblBody tr:nth-child(odd)").hover(
		function () {
			$(this).css({
				color: "#E96F85",
			});
		},
		function () {
			$(this).css({
				color: "",
			});
		}
	);
});

// just some design decisions, not necessary for task assignment.
$("td img").css({
            width: "100px",
            height: "auto",
            "justify-content": "center",
            "align-items": "center"     
})

$(".iconAlign").css({
    "margin-left": "15%",

})

$("td").css({
    "text-align": "left"
})