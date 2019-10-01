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

/////////NEXT DAY CODE////////
//Block 1//
const dog = {
    isSleepy: false,
    isHungry: true,
    sound: "Woof!",
    name: "Spot",
    feed: function(){
        alert(`Feeding ${this.name}...`);
        this.isHungry = false;
        this.isSleepy = true;
        alert(`${this.name} is full and sleepy`)
    },
    sleep: function(){
        alert(`${this.name} is falling asleep...`);
        this.isSleepy = false;
        this.isHungry = true;
        alert(`${this.name} woke up hungry!`);

    },
    bark: function(){
        alert(this.sound);
    }
}
dog.bark();
dog.feed();
dog.sleep();
//I probably SHOULD be doing these as DOM renders not alerts :p

//Block 2 Instructions//
const name = prompt(`What's your name?`);
const color = prompt(`What's your favorite color?`);
const season = prompt(`What's you favorite season?`);
let interests = prompt(`
    What are your interests?
    \nSeperate items with a comma (,)
    \neg: "Hiking, Swimming, Fishing, etc.`);
//I'd love to get away from alerts AND prompts lol
//i feel... noobish

document.querySelector('#name').innerText = name;
document.querySelector('#color').innerText = color;
document.querySelector('#season').innerText = season;

interests = interests.split(",");
let interestList = '';
for (i = 0; i < interests.length; i++) {
    interestList += `<li>${interests[i]}</li>`
}
document.querySelector('#interests').innerHTML = interestList
/*
General - Prompt for info and render it to DOM
[bonus action]
1: name [h1, one word only]
2: color [h2, change background-color]
3: season [h2, must be a season]
4: interests [h2, must be a list of 2 or more]
*/