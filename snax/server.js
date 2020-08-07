const express = require('express');
const path = require('path');
const http = require('http'); // express uses this under the hood. We need this for socket.io
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const {userJoin, getCurrentUser, userLeave, getRoomUsers} = require('./utils/users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const botName = 'Snax Bot';

// Run when a client connects (io.on listens for string 'connection')
io.on('connection', socket => {
	// console.log('New web socket Connection...');

	socket.on('joinRoom', ({ username, room }) => {
		const user = userJoin(socket.id, username, room);
		socket.join(user.room);

		// Emit to the single connecting client
		socket.emit('message', formatMessage(botName, 'Welcome to Snax!'));

		// Broadcast when a user connects (broadcasts to everyone EXCEPT the user connecting)
		socket.broadcast.to(user.room).emit('message', formatMessage(botName, `${user.username} has joined the chat`));

		// Send user and room info
		io.to(user.room).emit('roomUsers', {
			room: user.room,
			users: getRoomUsers(user.room)
		});
	});

	// Runs on Client disconnects
	socket.on('disconnect', () => {
		const user = userLeave(socket.id);

		if(user) {
			// Broadcasts to everyone including the user
			io.to(user.room).emit('message', formatMessage(botName, `${user.username} has left the chat`));
		}

		// Send user and room info
		io.to(user.room).emit('roomUsers', {
			room: user.room,
			users: getRoomUsers(user.room)
		});
	
	});

	// Listen for chatMessage
	socket.on('chatMessage', (msg) => {
		const user = getCurrentUser(socket.id);

		// Send message to everyone including the person who sent it
		io.to(user.room).emit('chatMessage', formatMessage(user.username, msg));
	})

});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));