// MongoDB Schema
const mongoose = require('mongoose');

// Schema creation
const Schema = mongoose.Schema;
// a field of username
const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unqiue: true,
		trim: true,
		minlength: 3
	}
}, 
{
	timestamps: true
});

// Attach the schema as a model and export
// In mongoose.model('User', userSchema); 'User is just a name'
const User = mongoose.model('User', userSchema);
module.exports = User;