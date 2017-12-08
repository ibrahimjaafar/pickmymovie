
window.onload = function () {
	var range = $('.input-range'),
		value = $('.range-value');
    
	value.html(range.attr('value'));

	range.on('input', function(){
    value.html(this.value);
}); 
	$.getJSON("output.json", function (res) {
	
	
	movie = $("[id=movie]");
	movie_rating = $("[id=movieRating]");
	dir = $("[id=movieDir]");
	movie_desc = $("[id=movieDesc]");
	movie_actors = $("[id=movieActors]");
	movie.text(res.title+"");
	
	
	//Check if values are null
	if (res.rating != null)
	movie_rating.text(res.rating+" out of 10 on imdb");
	else
	movie_rating.text("Not found");
	
	if (res.director != null)
	dir.text(res.director+"");
	else
	dir.text("Not found");	
	
	if(res.description !=null)
	movie_desc.text(res.description+"");
	else
	movie_desc.text("Not found");	
	
	if (res.rating != null)
	movie_actors.text(res.actors+"");
	else
	movie_actors.text("Not found");	
	});
}