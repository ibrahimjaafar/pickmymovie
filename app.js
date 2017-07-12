var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
  var currentIndex = 1;
  var genre = "action";
  var randPage = Math.floor(Math.random() * 50) + 1  ;
  url = 'http://www.imdb.com/search/title?genres='+genre+'&title_type=feature&sort=moviemeter,asc&page='+randPage+'&ref_=adv_nxt';
  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);

      var title, release, rating;
      var json = { title : ""};
	
      $('.lister-item-header').filter(function(){
        var data = $(this);
     
	   title = data.eq(-1).text().trim();
	  if (randPage == currentIndex)        
	  json.title = title;
	  currentIndex = currentIndex + 1;
      })
	
    
    }
	//Currently only displays in console
		console.log(json.title + ' ' + randPage);
		res.send('Pick My Movie');
  })
})

app.listen('8081')

exports = module.exports = app;