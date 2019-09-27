//Block 1
const classList = ['Math', 'Science', 'English', 'Music', 'Intro to Programming', 'Basketweaving'];

// 1. Prompt the user for the name of a class they would like to update.
const oldClass = prompt(`Which class would you like to replace? \n${classList}`)
// 2. Prompt the user for a new class name.
const newClass = prompt('What class would you like to take instead?')
// 3. Replace the old class name with the new one.
// Do the above without writing a for loop.
if (classList.includes(oldClass)) {
    classList[classList.indexOf(oldClass)] = newClass;
}
alert(classList)

// Block 2
// Prompt the user for a username and store the response in a variable.
const user = prompt(`Enter your username`)
// Prompt the user for a password and store this data.
const pass = prompt(`Enter your password`)
// If the `username` equals "admin" and the `password` equals "1234", then alert "Welcome to the admin page".
if (user === "admin" && pass === "1234") {
    alert('Welcome to the admin page')
// If the `username` equals "average joe" and the `password` equals "jsRocks", then alert "Welcome to the user landing page".
} else if (user === "joe" && pass === "jsRocks") {
    alert('Welcome to the user landing page');
} else {
// Otherwise alert "Invalid username and password, refresh the page to try again"
    alert('Invalid username and password, refresh the page to try again.')
}

// Block 3
// Start by creating a new function called `multiplyFunc`.
let answer;
// `multiplyFunc` should take in one parameter. 
// Re-write the `multiplyFunc` so that it will console log the taken parameter multiplied by `3`.
const multiplyFunc = function (input) {answer = input * 3}
let number = prompt('What would you like to multiply by 3?')
// Finally, call your function passing in any argument you wish.
multiplyFunc(number);
// Within the code block, you should simply console log out the parameter.
//didn't, meh
alert(answer);

// Block 4
// Open your editor and create a file named `function.js`.

// In this activity we will create 3 functions.

// 1. Our first function will accept 1 parameter (a number) and multiply it by itself and return the new value.
let doubleNumber;
const double = (doubleNumber) => doubleNumber*doubleNumber;
// 2. Our next function will accept 2 parameters (both strings: a first name and a last name) and return the name in the following format: lastName, firstName. 
let firstName="";
let lastName="";
const formalName = (firstName, lastName) => String(lastName + ", " + firstName);
//   * e.g. given the arguments ("Arya", "Stark"), the function should return "Stark, Arya".
// 3. Our last function will accept 1 parameter (number) and return a boolean: true if the number is even, and false if the number is false.
let evenOrOdd;
const evenness = (evenOrOdd) => Boolean(!evenOrOdd%2);
// Be sure to call all of your functions after defining them and log all of your results in the console.
alert(double(3) + " is 3 doubled.");
//>>>> I am unhappy with my commit messages tonight >.<
alert(formalName("Marty", "McFly"))
//well, that didn't go as planned. forgot that modulo of even is 0/false >.<
alert(evenness(7) + ": 7 is even")
/////////////////////////////////////////////////////////////////////////////

// Block 5

const numList1 = [1, 4, 5, 6, 2, 3, 1, 7, 6, 8];
const numList2 = [10, 9, 77, 9, 2, 1, 0, 82, 2];
const numList3 = [1, 14, 66, 543, 2, 1, 5, 674];
const numList4 = [9, 6, 3, 2, 1, 6, 7, 8, 8, 7];
const numList5 = [4.2, 5.1, 3, 0, 0, 453, 2.43];

const arraySum = (array) => {
    let sum;
    for (i=0; i < array.length; i++){
        sum += array[i]
    }
    return sum
}

alert(arraySum(numList1))

/*
You'll now do what's called `refactoring` which means to restructure existing code. 

Open up `index.html` and create a new function that will accept an array as a paremeter.

What this function will do is take the parameter passed in and loop over it.

As it looks through the numbers, it will add up all of the numbers in the array, and return the sum of all of the numbers.

After you finish, call the new function 5 times, passing in a different array each time.
refactor:

let sum = 0;

for (let i = 0; i < numList1.length; i++){
  sum = sum + numList1[i];
}

console.log(sum);

sum = 0;

for (let i = 0; i < numList2.length; i++){
  sum = sum + numList2[i];
}

console.log(sum);

sum = 0;

for (let i = 0; i < numList3.length; i++){
  sum = sum + numList3[i];
}

console.log(sum);

sum = 0;

for (let i = 0; i < numList4.length; i++){
  sum = sum + numList4[i];
}

console.log(sum);
*/