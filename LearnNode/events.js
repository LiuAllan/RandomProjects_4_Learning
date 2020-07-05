// import the event module
const EventEmitter = require('events');

// Create Event emitter object
const eventEmitter = new EventEmitter();

// (Listener, function to run when listener occurs)
eventEmitter.on('tutorial', (num1, num2) => {
	console.log('tutorial event has occured');
	console.log(num1 + num2);
});

// Person class
class Person extends EventEmitter {
	constructor(name) {
		super();
		this._name = name;
	}

	get name() {
		return this._name;
	}
}

// Allan is an instance of the EventEmitter class because we extends it
let allan = new Person('Allan');
let christina = new Person('Christina');

christina.on('name', () => {
	console.log(`my name is ${christina.name}`);
})
allan.on('name', () => {
	console.log(`my name is ${allan.name}`);
})

// Triggers the listeners
eventEmitter.emit('tutorial', 1, 2);
allan.emit('name');
christina.emit('name');