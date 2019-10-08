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
    if (Number(this.value) < 10) {getVal}
    else {getOp}
}

const getVal = function() {
    $('.entries').append(this.value+"getVal")
}

const evaluate = function() {
    $('.entries').append(this.value+"evaluate")
    $('.results').append(workingExpression+"\navaluate")
    $('.entries').empty()
}

const getOp = function(){
    $('.entries').append(this.value+"getOp")
    $('.results').append(this.value+"\ngetOp")
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
