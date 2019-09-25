console.log('sup')

function MyFunction() {
    let num
    num = 7482/281
    //I am pretty clearly rusty on the basics
    //I cannot remember how to do this without template literals
    // alert(`7482 divided by 281 is ${num}`);
    // alert('blah', num); //nope
    //alert(num + 'blah') //nope
    //damn, had to look it up :p
    //leaving the "incorrect" in as a reminder
    alert('7482 divided by 281 is ' + num);
    alert('3.14 times 5 divided by 3 is ' + 3.14 * 5 /3)
    alert('the remainder of 281 divided by 9 is ' + 281 % 9)
    //fun! i haven't used parseInt before ;p
    alert('281 divided by 9 is ' + parseInt(281/9) + ' remainder ' + 281%9)
}


/*
3. The remainder of 281 divided by 9 (You may need to look up the modulo operator)
4. 18 divided by 0
5. The remainder of 10 divided by 0 (You may need to look up the modulo operator)
*/