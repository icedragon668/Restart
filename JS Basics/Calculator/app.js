/*////NOTES////
needs a bool to determine operand v number
bool allows operands to change.
 ie if bool is op-set, the operands[i] = op
can i just use one array and the parse it?
*/


let workingNumber = "";
let workingOperand = "";
let workingExpression = '';
const numbers = [];
const operands = [];

const numOrOp = function () {
    //negation needs a special case
    let i = this.value
    if (i == 13) {
        workingNumber = workingNumber * -1
        $('.entries').empty()
        $('.entries').append(`${workingNumber}`)
    }
    else if (i < 10) { getVal(i) }
    else { getOp(i) }
}

const getVal = function (n) {
    $('.entries').append(n)
    workingNumber += String(n)
}

const getOp = function (n) {
    //workingOperand is supposed to be used here
    //wait until next number to push it
    numbers.push(workingNumber)
    n = Number(n)
    switch (n) {
        case 10:
            operands.push("+")
            $('.entries').empty()
            $('.entries').append(`${workingNumber}+`)
            break;
        case 11:
            operands.push("-")
            $('.entries').empty()
            $('.entries').append(`${workingNumber}-`)
            break;
        case 12:
            operands.push("*")
            $('.entries').empty()
            $('.entries').append(`${workingNumber}*`)
            break;
        case 15:
            operands.push("/")
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
