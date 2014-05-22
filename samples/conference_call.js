/**
* A very simple node web server that will respond to requests
* with iniciating a conference call.
*/

var http = require('http');
var tropowebapi = require('tropo-webapi');

var server = http.createServer(function (request, response) {

// Create a new instance of the TropoWebAPI object.
var tropo = new tropowebapi.TropoWebAPI();

// The number of one of the participant. He'll be the one who will receive a call.
tropo.call('+222222222222');

// Once the first participant receives the call he will hear the following message:
tropo.say('Welcome! The conference call should start soon.');

// Create conference
tropo.conference("1234", null, "conference", null, null, null);

// Render out the JSON for Tropo to consume.
response.writeHead(200, {'Content-Type': 'application/json'});
response.end(tropowebapi.TropoJSON(tropo));

}).listen(8000); // Listen on port 8000 for requests.