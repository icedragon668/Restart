const multiply = function (a,b) {console.log(a*b)}
const add = function (a,b) {console.log(a+b)}
const concat = function(a,b) {console.log(String(a)+String(b))}
const fiveLong = function(a) {console.log(Boolean(a.length>5))}
const sumArray = function(a) {
    let sum = 0;
    for (i=0; i < a.length; i++) {
        sum += a[i]
    }
    console.log(sum)
}
const greaterThan = function (a,b) {
    if (a>b) {
        console.log(a)
    } else {
         console.log(b)
        }
}
const firstLetter = function(a) {console.log(String(a).slice(0,1))}
const fToC = function(a) {console.log((a-32)/1.8)}

multiply(2,3)
add(2,3)
concat(2,3)
fiveLong(2)
sumArray([2,3])
greaterThan(2,3)
firstLetter(2)
fToC(32)

const contacts = {
    dan = "123-4567",
    bob = "847-5826",
    sam = "894-2203"
}
console.log(contacts.bob)
const prop = prompt("Who's number do you want?");
//this isn't right, is it?
console.log(contacts.prop)