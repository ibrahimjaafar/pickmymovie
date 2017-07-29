var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
 app.use(express.static(__dirname + "/views"));
 app.get("/", function (request, response){
     response.sendFile(__dirname+"/views/index.html");
 });
app.get('/scrape', function(req, res){
  var currentIndex = 1;
  var genre = req.query.gen;
  var randPage = Math.floor(Math.random() * 20) + 1  ;
   var randMovie = Math.floor(Math.random() * 50) + 1  ;
  url = 'http://www.imdb.com/search/title?genres='+genre+'&title_type=feature&sort=moviemeter,asc&page='+randPage+'&ref_=adv_nxt';
  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);

      var title, release, rating;
      var json = { title : ""};
	
      $('.lister-item-content').filter(function(){
        var data = $(this);
     
	   title = data.eq(-1).text().trim();
	  if (randMovie == currentIndex)        
	  json.title = title;
	  currentIndex = currentIndex + 1;
      })
	
    
    }
//	var ntitle = json.title.replace(/\n/g,"<br >");
	//json.title = ntitle;
	   fs.writeFile('views/output.json', JSON.stringify(json, null, 4), function(err){
      console.log('File successfully written! - Check your project directory for the output.json file');
})
	
	 res.sendFile(__dirname+"/views/index.html");
	 
	//Currently only displays in console
		console.log(json.title + ' ' + randPage);
	//	res.send('Pick My Movie');
  })
})

app.listen('8080')

exports = module.exports = app;