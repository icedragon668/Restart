// 12

function testOne() {

    //empty array
    const newStudents = [];
    //prompt 5 names
    for (i=0;i<5;i++) {
        const name = prompt(`Student Name? \n${i+1} of 5`);
        newStudents.push(name);
    }
    
    //alert name 2
    alert(newStudents[1]);
    // NOTE: read up on new[tab] [const name = new type(arguments);]

    //prompt for index
    const index = prompt('Chose a number 1-5');
    //alert name at index
    alert(`${newStudents[index-1]}`)
}

function testTwo() {
    //array with 5 names
    const studentArray = [
        'James 1',
        'Fili 2',
        'Drake 3',
        'Hosa 4',
        'Jilbean 5'
    ];
    //promt for a name
    const name = prompt('Which Student?');
    const nameBoo = studentArray.includes(name);
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
    for (let i = 10; i > 0; i--) {
        alert(`COUNTDOWN: ${i}`);
        
    }
}

//loop prompt 5 names
//push names into "studentList" array
//render the five names

//prompt for a number
//prompt for that many names
//render all names
//render only names with an 'a'

//add a boolean coercion to check for empty strings
//add checks for numbers and strings after

//initialize the array
//arry.push(value)

