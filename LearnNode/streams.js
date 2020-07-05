const fs = require('fs');

// read the entire stream from the file
// readStream is part of the eventEmitter class
const readStream = fs.createReadStream('./example.txt', 'utf-8');

const writeStream = fs.createWriteStream('example2.txt');


// Reads a chunk of data where chunk is called for each piece of data
readStream.on('data', (chunk) => {
	// benefits of chunk: we can manipulate the chunk immediately
	console.log(chunk);

	//reads the chunk and write into the example2.txt
	writeStream.write(chunk);
})

