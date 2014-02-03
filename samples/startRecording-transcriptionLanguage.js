var http = require('http');
var tropo_webapi = require('tropo-webapi');

var server = http.createServer(function (request, response) {
	var tropo = new TropoWebAPI();
	tropo.call("+xxxx");
	//function(format, method, url, username, password, transcriptionID, transcriptionEmailFormat, transcriptionOutURI, transcriptionLanguage)
	tropo.startRecording(null, null, "http://example.com/recording.js", null, null, null, null, "mailto:xxx@xxx.xx","de_DE");
	var say = new Say("Welche ist deine Lieblingsfarbe? Rot, Blau oder Grün?");
	var choices = new Choices("Rot, Blau, Grün");
	// (choices, attempts, bargein, minConfidence, name, recognizer, required, say, timeout, voice);
	tropo.ask(choices, null, null, null, "color", "de-de", null, say, 60, "Katrin");
	tropo.stopRecording(null);	
	response.end(TropoJSON(tropo));
}).listen(8000);
