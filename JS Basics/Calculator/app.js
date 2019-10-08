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
    if (this.value < 10) {getVal}
    else {getOp}
}

const getVal = function() {
    $('.entries').append(this.value)
}

const evaluate = function() {
    $('results').append(workingExpression+"\n")
    $('entries').empty()
}

const getOp = function(){
    $('results').append(this.value+"\n")
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
