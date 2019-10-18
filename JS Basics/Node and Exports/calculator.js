// Require our operator methods from the operators file
// TODO: Open operations.js and add the relevant methods to the export file
const operations = require('./operations.js');

const x = 3;
const y = 4;

// Console logs x and y
console.log(`The value of x is ${x} and the value of y is ${y}`);

// Console logs the results of each operation
console.log(`The sum of ${x} and ${y} is`, operations.add(x, y));
console.log(`The difference of ${x} and ${y} is`, operations.subtract(x, y));
console.log(`The product of ${x} and ${y} is`, operations.multiply(x, y));
console.log(`The quotient of ${x} and ${y} is`, operations.divide(x, y));
console.log(`The remainder of ${x} divided by ${y} is`, operations.remainder(x, y));
console.log(`The value of ${x} raised to the ${y} power is`, operations.exp(x, y));

// CHALLENGE
// If you have time, try adding an extra method called 'algebra'
// This will take in a string expression and return the result of an alebraic equation
// Assume the input will always be of the form 'ax+b=c'
// Hint: You will need to also add an extra conditional for the operand 'algebra'
