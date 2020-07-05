const fs = require('fs');

// create a file
// writeFile(filename, write inside the file, callback for errors);
fs.writeFile('newfile.txt', 'this is an example', (err) => {
	if(err)
	{
		console.log(err);
	}
	else
	{
		console.log("File successfully created");
		// read the file. readFile(filename, encoding type, callback)
		fs.readFile('newfile.txt', 'utf-8',(err, file) => {
			if(err)
			{
				console.log(err);
			}
			else
			{	
				// no errors, print the file
				console.log(file);
			}
		})
	}
})

//Updating file name
// rename(name of file we want to rename, rename the final to, callback for errors)
fs.rename('newfile.txt', 'updatedfile.txt', (err) => {
	if(err)
	{
		console.log(err);
	}
	else {
		console.log('successfully renamed the file');
	}
})

// Append data to the END of file
fs.appendFile('updatedfile.txt', 'Some data being appended', (err) => {
	if(err)
	{
		console.log(err);
	}
	else {
		console.log('successfully appended data to file');
	}
})

// Delete the file
fs.unlink('updatedfile.txt', (err) => {
	if(err)
	{
		console.log(err);
	}
	else {
		console.log('successfully deleted the file');
	}
})