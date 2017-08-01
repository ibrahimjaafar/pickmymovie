
window.onload = function () {
var range = $('.input-range'),
    value = $('.range-value');
    
value.html(range.attr('value'));

range.on('input', function(){
    value.html(this.value);
}); 
	$.getJSON("output.json", function (res) {
	document.getElementById("movie").innerHTML=res.title+"";
	});
}