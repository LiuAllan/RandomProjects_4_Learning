const express = require('express');
const path = require('path');

//initialize express
const app = express();

// alias for static folder. app.use(alias, middlware)
// _dirname is the root file (app.js), static is the filename
// public is the alias for the static folder
app.use('/public', express.static(path.join(_dirname, 'static')));

// When user visits url, send the response
app.get('/', (req, res) => {
	res.sendFile(path.join(_dirname,'static', 'index.html'))
});




//another Route path
app.get('/example', (req, res) => {
	res.send('hitting example route');
});

// Route with a variable name and age
app.get('/example/:name/:age', (req, res) => {
	console.log(req.params);
	console.log(req.query);
	res.send(`${req.params.name} + ${req.params.age}`);
});

// Listen on port
app.listen(3001);