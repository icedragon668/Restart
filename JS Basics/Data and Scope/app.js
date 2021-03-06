const todoList =[
    {
      tasks: {
        grocery: {
          produce: ['apple', 'broccoli', 'peach'],
          drinks: {
            sodas: ['pepsi', 'diet coke'],
            juices: ['orange']
          }
        },
        errands: {
          household: ['grocery store', 'hardware store'],
          personal: ['pick up art supplies']
        },
        dueToday: {
          work: [
            {
              task: 'call Sam',
              time: '8:20pm'
            },
            {
              task: 'submit expense report',
              time: '8:00am'
            }
          ],
          personal: [
            {
              task: 'hair appt',
              time: '2:15pm'
            },
            {
              task: 'drop off Charlie',
              time: '8:00am'
            }
          ]
        } 
      }
    }
  ];
  
  // 1. Append `apple` to the screen to the `#groceries` div.
//  document.querySelectorAll("#groceries").forEach(e=>{e.innerHTML+=todoList[0].tasks.grocery.produce[0]})
  // 2. Append `pick up art supplies` to the screen to the `#groceries` div. 
//  document.querySelectorAll('#groceries').forEach(e=>e.innerHTML+=todoList[0].tasks.errands.personal[0])
  // 3. Append `diet coke` to the screen to the `#errands` div. 
//  document.querySelectorAll('#errands').forEach(e=>e.innerHTML+=todoList[0].tasks.grocery.drinks.sodas[1])
  // 4. Append `hair appt  at 2:15pm` to the screen to the `#calendar` div. 
//  document.querySelectorAll('#calendar').forEach(e=>e.innerHTML+=`<p>${todoList[0].tasks.dueToday.personal[0].task} at ${todoList[0].tasks.dueToday.personal[0].time}</p>`)
  // 5. Update the time to `submit expense report` to `8:30am` and append the results to the `#calendar` div.
//  todoList[0].tasks.dueToday.work[1].time = `8:30am`
//  document.querySelectorAll('#calendar').forEach(e=>e.innerHTML+=`<p>${todoList[0].tasks.dueToday.work[1].task} at ${todoList[0].tasks.dueToday.work[1].time}</p>`)
  // 6. Add a task of `mow lawn` with a time of `5:30pm` to the `personal` array in `dueToday`. 
//   todoList[0].tasks.dueToday.personal.push({task: 'mow lawn', time: '5:30pm'})
//   document.querySelectorAll('#calendar').forEach(e=>e.innerHTML+=`<p>${todoList[0].tasks.dueToday.personal[2].task} at ${todoList[0].tasks.dueToday.personal[2].time}</p>`)
  // 7. Render all time tasks due today to the `#calendar` div. 
//  document.querySelectorAll('#calendar').forEach(e=>e.innerHTML='')
 
//  for (i=0; i < todoList[0].tasks.dueToday.work.length; i++) {
//     document.querySelectorAll('#calendar').forEach(e=>e.innerHTML+=`<p>${todoList[0].tasks.dueToday.work[i].task} at ${todoList[0].tasks.dueToday.work[i].time}</p>`)}
 
//  for (i=0; i < todoList[0].tasks.dueToday.personal.length; i++) {
//     document.querySelectorAll('#calendar').forEach(e=>e.innerHTML+=`<p>${todoList[0].tasks.dueToday.personal[i].task} at ${todoList[0].tasks.dueToday.personal[i].time}</p>`)}

//Refactor//
const toDo = todoList[0].tasks

const append = function(s,c){
    document.querySelectorAll(s).forEach(e=>e.innerHTML+=c)
}

append('#groceries', `<p>${toDo.grocery.produce[0]}</p>`)
append('#groceries', `<p>${toDo.errands.personal[0]}</p>`)
append('#errands', `<p>${toDo.grocery.drinks.sodas[1]}</p>`)
append('#calendar', `<p>${toDo.dueToday.personal[0].task} at ${toDo.dueToday.personal[0].time}</p>`)

toDo.dueToday.work[1].time = '8:30am'
append('#calendar', `<p>${toDo.dueToday.work[1].task} at ${toDo.dueToday.work[1].time}</p>`)

toDo.dueToday.personal.push({task: 'mow lawn', time: '5:30pm'})
append('#calendar', `<p>${toDo.dueToday.personal[2].task} at ${toDo.dueToday.personal[2].time}</p>`)

document.querySelectorAll('#calendar').forEach(e=>e.innerHTML='')

for (i=0; i<toDo.dueToday.work.length;i++){
    append('#calendar', `<p>${toDo.dueToday.work[i].task} at ${toDo.dueToday.work[i].time}</p>`)
}
for (i=0; i<toDo.dueToday.personal.length;i++){
    append('#calendar', `<p>${toDo.dueToday.personal[i].task} at ${toDo.dueToday.personal[i].time}</p>`)
}
