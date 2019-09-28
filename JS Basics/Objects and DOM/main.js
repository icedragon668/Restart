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