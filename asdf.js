var http = require('http'); // require the http module

var message = "here's looking at you, kid."; // define message
var options = {
	host: 'localhost', port: 8080, path: '/', method: 'POST'
}

var request = http.request(options, function(response) {
	response.on('data', function(data) {
		console.log(data);
	});
});

request.write(message);
request.end();