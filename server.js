var express = require('express');
var app = express();
var request = require('request');
var key = "85e82df1bc0b0101b91f41d1d1886a7d";
var geoKey = "AIzaSyDyhOZr8CwmL7meu33EMAlKSz29X7_5Uek"
app.use(express.static('public'));
// on créer la route pour faire la requête sur le liens de l'api 
app.get('/data/places/:localisation', function(req, res){
	var localisation = req.params.localisation; // récuppère le paramètre localisation de al route 
	// on utilise le package request pour pourvoir réccupérer les infos de l'api 
	request("http://api.openweathermap.org/data/2.5/weather?q="+ localisation +"&units=metric&appid=" + key, function(err, response, body){
		// condition pour vérifier si tout se passe bien
		if(!err && response.statusCode == 200){
			// on parse la réponse en json pour pouvoir faire la requête ajax.
			res.send(JSON.parse(body));
		}
	})
});

app.get('/data/geo/:cp/:city', function(req, res){
	var cp = req.params.cp;
	var city = req.params.city;
	request("https://maps.googleapis.com/maps/api/geocode/json?address="+ cp +"+"+ city +",+FR&key=" + geoKey, function(err, response, body){
		if(!err && response.statusCode == 200){
			res.send(body);
		}
	})
})

app.listen(1337, function(){
	console.log("work");
});