//make a function to multiply to numbers
const multiply = function (a,b) {console.log(a*b)}

//make a function to add to numbers
const add = function (a,b) {console.log(a+b)}

//make a function to concat two values
const concat = function(a,b) {console.log(String(a)+String(b))}

//make a function it test in the value is longer than 5
const fiveLong = function(a) {console.log(Boolean(a.length>5))}

//make a function to sum an array
const sumArray = function(a) {
    let sum = 0;
    for (i=0; i < a.length; i++) {
        sum += a[i]
    }
    console.log(sum)
}

//make a function to tell which of two values is greater
const greaterThan = function (a,b) {
    if (a>b) {
        console.log(a)
    } else {
         console.log(b)
        }
}

//make a function to display the first character in the given value
const firstLetter = function(a) {console.log(String(a).slice(0,1))}

//make a function to convet a number from F to C
const fToC = function(a) {console.log((a-32)/1.8)}

//runs the above functions
multiply(2,3)
add(2,3)
concat(2,3)
fiveLong(2)
sumArray([2,3])
greaterThan(2,3)
firstLetter(2)
fToC(32)

//create an object with names and phone numbers
const contacts = {
    //forgot, it's : not = >.<
    dan: "123-4567",
    bob: "847-5826",
    sam: "894-2203"
}
//log a number
console.log(contacts.bob)

//prompt for a name to log the number associated
const prop = prompt("Who's number do you want?");

//log the number
//this isn't right, is it?
//it needs bracket notation. not dot syntax >.<
//feeling a little sluggish remembering tonight
console.log(contacts[prop])

//make a nested object
const book = {
    dan: {
        number: "134-8847",
        address: "1234 gggd St.",
        state: "AH"
        },
    bob: {
        number: "836-9934",
        address: "1231 mfjfj Ave.",
        state: "AH"
        },
    sam: {
        number: "834-9984",
        address: "77 avav Ln.",
        state: "AH"
        }
}
//log an address from the object
console.log(book.dan.address)

//it occurs to me that i have been extremely poor in my documentation tonight
//like i mentioned before; sluggish
//edit: went back and added notation