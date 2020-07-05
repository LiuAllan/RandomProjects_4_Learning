const http = require('http');
const fs = require('fs');

// Create server and listen on port 3000
http.createServer((req, res) => {
	const readStream = fs.createReadStream('./static/index.html');

	// Header for status code, and content type for the packet
	res.writeHead(200, {'Content-type' : 'text/html'});

	//from server, send the index.html file to the response
	readStream.pipe(res);

}).listen(3000);