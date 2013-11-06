var http = require('http');
var tropo_webapi = require('tropo-webapi');

var server = http.createServer(function (request, response) {
	var tropo = new TropoWebAPI();
	tropo.call("+xxx");
	var transcription = {"id":"1234", "language":"de_DE", "url":"mailto:your@mail.xx"};
	var say = new Say("Willkommen zur Abfage! Sag uns bitte, wie es dir geht!");
	//function(attempts, bargein, beep, choices, format, maxSilence, maxTime, method, minConfidence, name, required, say, timeout, transcription, url, password, username, voice, allowSignals, interdigitTimeout)
	tropo.record(null, null, null, null, null, 7, 60, null, null, "recording", null, say, 10, transcription, "", null, null,"Katrin");
	response.end(TropoJSON(tropo));
}).listen(8000);
