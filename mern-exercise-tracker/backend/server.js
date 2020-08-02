// Import dependencies
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
// Database
const connectDB = require('./config/db');
// Routes
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');


// Path to env file
dotenv.config({ path: './config/config.env'});

// Connect to database
connectDB();

// Server configurations
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // express's body-parser

// ##### SERVER ACTIONS #####

// Routes and API Routing
app.use('/exercises', exercisesRouter); // Whenever /exercises is visit, it will redirect to exercisesRouter
app.use('/users', usersRouter); 



app.get('/', (req,res) => {
	res.send('Hello');
});


app.listen(PORT, () => {
	console.log(`Server is running in ${process.env.NODE_ENV} on port ${process.env.PORT}`);
})