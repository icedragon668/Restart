function testOne() {

    //empty array
    const studentListOne = [];
    //prompt 5 names
    for (i=0;i<5;i++) {
        const name = prompt(`Student Name? \n${i+1} of 5`);
        studentListOne.push(name);
    }
    
    //alert name 2
    alert(studentListOne[1]);
    // NOTE: read up on new[tab] [const name = new type(arguments);]

    //prompt for index
    const index = prompt('Chose a number 1-5');
    //alert name at index
    alert(`${studentListOne[index-1]}`)
}

function testTwo() {
    //array with 5 names
    const studentListTwo = [
        'James 1',
        'Fili 2',
        'Drake 3',
        'Hosa 4',
        'Jilbean 5'
    ];
    //promt for a name
    const name = prompt('Which Student?');
    const nameBoo = studentListTwo.includes(name);
    //alert true/false for student present
    alert(`${name} is in this class: ${nameBoo}`)
}

function testThree() {
    //loop to render 5-9
    for (i=5; i<10; i++) {
        alert(`from 5 to ${i} of 9`)
    }
    //seperate loop to render "piggywoo" five times
    //there's a better way.. JSX maybe? look into it
    //ie adding text to an alert (eg)
    for (let i = 0; i < 5; i++) {
        alert(`PIGGYWOO ${i+1} of 5`);
    }
    //decrement operator to render 10-0
    for (let i = 10; i >= 0; i--) {
        if (i === 0) {
            alert("Lift Off!")
        } else {
            alert(`COUNTDOWN: ${i}`);
        }
    }
}

function testFour() {
    const studentListFour = []
    //loop prompt 5 names
    for (let i = 0; i < 5; i++) {
        const name = prompt(`New Student Name? ${i+1} of 5`);
        //this feels like its backwards
        //apparently not
        //push names into "studentListFour" array
        studentListFour[i] = name
    }
    //render the five names
    alert(studentListFour)
}

function testFive() {
    //this is a better naming convention
    //consider cleaning this up
    //done, but pretty unneeded
    const studentListFive = [];
    //prompt for a number
    const number = prompt('How Many Students?');
    //prompt for that many names
    for (i=0; i<number; i++) {
        studentListFive[i] = prompt(`Student's name? ${i+1} of ${number}`)
    }
    //render all names
    const studentListFiveString = studentListFive.join(", ")
    alert(studentListFiveString)
    //render only names with an 'a'
}

    //add a boolean coercion to check for empty strings
//>>add checks for numbers and strings after

