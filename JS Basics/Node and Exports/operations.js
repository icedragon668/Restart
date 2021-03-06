/* export these functions
The value of x is 3 and the value of y is 4
The sum of 3 and 4 is 7
The difference of 3 and 4 is -1
The product of 3 and 4 is 12
The quotient of 3 and 4 is 0.75
The remainder of 3 divided by 4 is 3
The value of 3 raised to the 4 power is 81
*/

module.exports = {
add: (x,y) => { return parseFloat(x + y) },
subtract: (x,y) => { return parseFloat(x - y) },
multiply: (x,y) => { return parseFloat(x * y) },
divide: (x,y) => { return parseFloat(x / y) },
remainder: (x,y) => { return parseFloat(x % y) },
exp: (x,y) => { return parseFloat(x ** y) },
}