const fs = require('fs');
const zlib = require('zlib'); //compression

const gzip = zlib.createGzip(); // zip
const gunzip = zlib.createGunzip(); //unzip

// Create Streams for read and write
const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt');

readStream.pipe(gunzip).pipe(writeStream);