// Create a webserver
const http = require('http');

// req = client requests.
// res = server back to client.
const server = http.createServer((req, res) => {
	// only if the url is the root url
	if(req.url === '/')
	{
		res.write('Hello world');
		res.end(); // sends back to client
	}
	
	//anything other than the root url
	else {
		res.write('using some other domain');
		res.end();
	}
});

// server to listen on port 3000
server.listen('3000');