const readline = require('readline');

// Takes in an object with configuration file.
// process is a global variable given by NodeJS
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

// question(string, function)
rl.question(`What is ${ num1 } + ${ num2 }? \n`, 
	(userInput) => {
		console.log(userInput);

		//Trim gets rid of the trailing white space
		if(userInput.trim() == answer)
		{
			// close the application
			rl.close();
		}
		else {
			//setting the prompt message
			rl.setPrompt('Incorrect response, please try again\n');
			// call the prompt
			rl.prompt();
			//listen for user input. Listener 'line' will keep executing until the answer is correct
			rl.on('line', (userInput) => {
				if(userInput.trim() == answer)
					rl.close();
				else {
					rl.setPrompt(`Your answer of ${ userInput} is incorrect. Try again. \n`);
					rl.prompt();
				}
			})
		}
	}
);

// function executes only when the readline interface closes
// This works because rl.close() is actually an eventEmitter!
rl.on('close', () => {
	console.log('Correct answer');
});