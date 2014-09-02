/**
 * Showing with the Express framework http://expressjs.com/
 * Express must be installed for this sample to work
 */

var tropowebapi = require('tropo-webapi');
var express = require('express');
var app = express.createServer();

/**
 * Required to process the HTTP body
 * req.body has the Object while req.rawBody has the JSON string
 */
app.configure(function(){
	app.use(express.bodyDecoder());
});

app.post('/', function(req, res){
	console.log(req.body)
	
	// Create a new instance of the TropoWebAPI object.
	var tropo = new tropowebapi.TropoWebAPI();
	// Use the say method https://www.developergarden.com/apis/documentation/api/telekom-tropo-documentation/html/say.html
	tropo.say("You are a " + req.body['session']['userType']);
	tropo.say("Did you not know that already? Goodbye.")
	
    res.send(tropowebapi.TropoJSON(tropo));
});


app.listen(8000);
console.log('Server running on http://0.0.0.0:8000/')