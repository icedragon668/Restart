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
    $('.entries').append(this.value+"numOrOp")
    let i = this.value
    if (i < 10) {getVal(i)}
    else {getOp(i)}
}

const getVal = function(n) {
    $('.entries').append(n+"getVal")
}

const evaluate = function(n) {
    $('.entries').append(n+"evaluate")
    $('.results').append(workingExpression+"\navaluate")
    $('.entries').empty()
}

const getOp = function(n){
    $('.entries').append(n+"getOp")
    $('.results').append(n+"\ngetOp")
    // switch (this.value){
    //     case 10:
    //         console.log("plus!")
    //         break;
    //     default:
    //         $('entries').append("=")
    //         evaluate()
    // }
}

$('button').on('click', numOrOp)
