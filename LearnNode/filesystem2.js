const fs = require('fs');

// Create a new folder, then create a new folder inside it
fs.mkdir('newFolder', (err) => {
	if(err)
	{
		console.log(err);
	}
	else {
		console.log('folder successfully created');

		fs.writeFile('./newFolder/example.txt', '123 some data', (err) => {
			if(err)
			{
				console.log(err);
			}
			else
			{
				console.log('successfully created file');
			}
		});
	}
});

// Delete the folder with a file inside
fs.unlink('./newFolder/example.txt', (err) => {
	if(err)
	{
		console.log(err);
	}
	else
	{
		fs.rmdir('newFolder', (err) => {
			if(err)
				console.log(err);
			else
				console.log('successfully removed folder and file');
		});
	}
});

// lists everything inside the folder directory
// readdir(folder name, callback where files is an array with all the names of the files)
fs.readdir('example', (err, files) => {
	if(err)
	{
		console.log(err);
	}
	else {
		console.log(files); // [ 'a.txt', 'b.txt' ]

		for(let file of files) {
			fs.unlink(`./example/${file}`, (err) => {
				if(err)
				{
					console.log(err);
				}
				else {
					console.log('successfully deleted file');
				}
			})
		}
	}
});