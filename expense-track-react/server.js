const express = require('express');
const dotenv = require('dotenv'); // for global variables
const colors = require('colors'); // color for console (optional)
const morgan = require('morgan'); // outputs the path, status, RTT for requests to console
// External files
const connectDB = require('./config/db');
const transactions = require('./routes/transactions');

// path to our env config file holding our private environment variables
dotenv.config({ path: './config/config.env' });


const app = express();

// ################## Server actions ########################

// Connect to database
connectDB();

// Body parser middleware
app.use(express.json());

// Optional for development
if(process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// Routing path for API '/api/v1/transactions' will redirect to path '/'
app.use('/api/v1/transactions', transactions);


// Check for production
if(process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

// Server listen on port
const PORT = process.env.PORT
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));