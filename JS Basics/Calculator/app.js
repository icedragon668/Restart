let workingNumber="";
let workingOperand="";
let workingExpression='';
/*
10 +
11 - 
12 *
13 /
14 +/-
15 =
*/

const numOrOp = function(){
    let i = this.value
    if (i < 10) {getVal(i)}
    else {getOp(i)}
}

const getVal = function(n) {
    $('.entries').append(n)
    workingNumber += String(n)
}

const getOp = function(n){
    $('.entries').append(n+"getOp")
    $('.results').append(n+"\ngetOp")
    switch (n){
        case 10:
                $('entries').append("+")
            break;
        default:
            $('.entries').append("=")
            evaluate(n)
    }
}

//new line isn't working as expected, expect expections are wrong ;)
const evaluate = function(n) {
    $('.results').append(`${workingNumber} \nevaluate`)
    $('.entries').empty()
    workingNumber=''
}

$('button').on('click', numOrOp)
