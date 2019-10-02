$('.content').text('This is added text');
/*
what the $%^& was that??
I wrote the EXCACT same code four *&^% times...
no clue what happened there...
I guess that is an important reminder:
"Sometimes, you just have to start over"
*/

$('.content').html('<p>New Paragraph</p><p>Second Paragraph</p>');
//no issues here >.>

$('.content').addClass('blue');
$('.content').removeClass('blue');
$('.content').toggleClass('green')
$('.content').empty()

$('.content').text('Starter')
$('.content').append(', Appended')
$('.content').prepend('Prepended, ')

//sets a value
$('.content').val(5)

//reads that value
console.log($('.content').val())

//creates a function for "on" to use
const sayHi = function () {
    console.log('Hi')
}

//runs "on" on click
$('.content').on('click', sayHi)