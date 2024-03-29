var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
	var newFile = fs.createWriteStream("readme_copy.md");
	request.pipe(newFile);

	request.on('end', function () {
		response.end('uploaded!');
	});
}).listen(8080);

// pipe makes sure client pauses if server is being overloaded by stream

// writeStream.write(chunk); returns false if kernel buffer full.

//writeStream.on('drain', function() {
//	readStream.resume();
//})