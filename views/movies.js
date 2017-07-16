
window.onload = function () {

	$.getJSON("output.json", function (res) {
	document.getElementById("movie").innerHTML=res.title+"";
	});
}