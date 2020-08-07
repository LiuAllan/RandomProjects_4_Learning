// io() is from the script tag for socket.io library in chat.html
const socket = io();
const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

// Get username and room from URL
const { username, room } = Qs.parse(location.search, {
	ignoreQueryPrefix: true
});

// Join chatroom
socket.emit('joinRoom', { username, room });

// Get room and users
socket.on('roomUsers', ({ room, users}) => {
	outputRoomName(room);
	outputUsers(users);
})


// Whenever we get 'message' event. 'message' is what we emitted from the server.js
socket.on('message', message => {
	console.log(message);
	outputMessage(message);

	//Scroll Down
	chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Receive chatMessage from server
socket.on('chatMessage' , message => {
	console.log(message);
	outputMessage(message);

	//Scroll Down
	chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Message submit
chatForm.addEventListener('submit', (e) => {
	e.preventDefault();

	// Get message text from form
	const msg = e.target.elements.msg.value;

	// Emit message from client to server
	socket.emit('chatMessage', msg);
	// console.log(msg);

	//Clear input
	e.target.elements.msg.value = '';
	e.target.elements.msg.focus();
});


// Output message to DOM
const outputMessage = ({text, time, username}) => {
	const div = document.createElement('div');
	div.classList.add('message');
	div.innerHTML = `	<p class="meta">${username} <span>${time}</span></p>
						<p class="text">
							${text}
						</p>
					`;
	// add the chatMessage div to the class chat-messages
	document.querySelector('.chat-messages').appendChild(div);
}

// Add room name to DOM
const outputRoomName = (room) => {
	roomName.innerText = room;
}

// Add users to DOM
const outputUsers = (users) => {
	userList.innerHTML = `
		${users.map(user => `<li>${user.username}</li>`).join('')}
		`;
}