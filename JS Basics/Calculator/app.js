let workingNumber = "";
let workingOperand = "";
let workingExpression = '';
/*
10 +
11 - 
12 *
13 +/-
14 =
15 /
*/

const numOrOp = function () {
    let i = this.value
    if (i < 10) { getVal(i) }
    else { getOp(i) }
}

const getVal = function (n) {
    $('.entries').append(n)
    workingNumber += String(n)
}

const getOp = function (n) {
    n = Number(n)
    switch (n) {
        case 10:
            $('.entries').empty()
            $('.entries').append(`${workingNumber}+`)
            break;
        case 11:
            $('.entries').empty()
            $('.entries').append(`${workingNumber}-`)
            break;
        case 12:
            $('.entries').empty()
            $('.entries').append(`${workingNumber}*`)
            break;
        case 13:
            //needs to toggle
            $('.entries').empty()
            $('.entries').append(`${workingNumber} n is ${n}`)
            break;
        case 15:
            $('.entries').empty()
            $('.entries').append(`${workingNumber}/`)
            break;
        default:
            $('.entries').append("=")
            evaluate(n)
    }
}

//new line isn't working as expected, expect expections are wrong ;)
const evaluate = function (n) {
    $('.results').append(`${workingNumber} \nn ${n}`)
    $('.entries').empty()
    workingNumber = ''
}

$('button').on('click', numOrOp)
