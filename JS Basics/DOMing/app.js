const drinkList = [
    'Coffee: $5',
    'Espresso: $7',
    'Cappuccino: $6',
    'Latte: $4',
    'Tea: $3',
    'Ice Coffee: $6',
    'Ice Espresso: $8',
    'Ice Latte: $6',
    'Ice Tea: $4'
];

//using the dom lib, append this to the DOM

drinkFun = () => {
    $('#drinks').append('<ul id="DL">');
    drinkList.forEach(e => {
        $('#DL').append(`<li>${e}</li>`);
    });
    $('#drinks').append("</ul>")
}

rand1000 = () => {
    $('#bbbResult').text(Math.floor(Math.random(0)*1000+1))
}

drinkFun()
$('#bbb').on('click', rand1000)

//build a 9 number lotto-style generator
lottoFill = () => {
    $('#lottoResult').prepend(`<p>${lottoNumber()}</p>`)
}

lottoNumber = () => {
    let n = '';
    for (i=0; i<9; i++){
        n += Math.floor(Math.random()*10)
    }
    return n
}

$('#lotto').on('click', lottoFill)

//build a number guessing game (1-4 p vs c)
compPick = () => {
   return Math.floor(Math.random()*4+1)
}

guess = (e) => {
    let comp = compPick()
    let player = e
    if (comp == player) {
        $('#numberResult').text(`Comp:${comp} vs Player:${player} \nYou Win`)
    } else { $('#numberResult').text(`Comp:${comp} vs Player:${player} \nYou Lose`)}
}

$(".guess").on('click', guess)

///TESTING////
const valueGuess = function () {
    console.log(this.value)
}

$('button').on('click', valueGuess)
/*
    I think i let mysleft overthink this bit...
*/