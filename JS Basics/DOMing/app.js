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

set = () => {
    console.log(this.val())
}

compare = () => {
    let comp = compPick()
    console.log(this.val())
    if (comp == player) {
        console.log(`Comp:${comp} vs Player:${player} \nYou Win`)
    } else { console.log(`Comp:${comp} vs Player:${player} \nYou Lose`)}
}

$("#btn-1").on('click', set)
$("#btn-2").on('click', compare)
$("#btn-3").on('click', compare)
$("#btn-4").on('click', compare)