const fs = require('fs');

// Create a new folder
fs.mkdir('newFolder', (err) => {
	if(err)
	{
		console.log(err);
	}
	else {
		console.log('folder successfully created');

		// Delete the folder
		fs.rmdir('newFolder', (err) => {
			if(err)
			{
				console.log(err);
			}
			else {
				console.log('successfully deleted the folder');
			}
		})
	}
});