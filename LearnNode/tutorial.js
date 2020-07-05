const sum = (num1, num2) => num1 + num2;
const PI = 3.14;
class SomeMathObject {
	constructor() {
		console.log('object created');
	}
}
// exports the sum function, variables and objects
// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.SomeMathObject = SomeMathObject;

// This is the exact same thing but much cleaner
module.exports = {
	sum,
	PI,
	SomeMathObject,
}