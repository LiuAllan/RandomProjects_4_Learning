// importing the JS file
const tutorial = require('./tutorial')

//tutorial consists of an object with all of our exports
// {
//   sum: [Function: sum],
//   PI: 3.14,
//   SomeMathObject: [Function: SomeMathObject]
// }
console.log(tutorial);

// using the exports
console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());
