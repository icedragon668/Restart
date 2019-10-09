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
 document.querySelectorAll("#groceries").forEach(e=>{e.innerHTML+=todoList[0].tasks.grocery.produce[0]})
  // 2. Append `pick up art supplies` to the screen to the `#groceries` div. 
 document.querySelectorAll('#groceries').forEach(e=>e.innerHTML+=todoList[0].tasks.errands.personal[0])
  // 3. Append `diet coke` to the screen to the `#errands` div. 
 document.querySelectorAll('#errands').forEach(e=>e.innerHTML+=todoList[0].tasks.grocery.drinks.sodas[1])
  // 4. Append `hair appt  at 2:15pm` to the screen to the `#calendar` div. 
 document.querySelectorAll('#calendar').forEach(e=>e.innerHTML+=`<p>${todoList[0].tasks.dueToday.personal[0].task} at ${todoList[0].tasks.dueToday.personal[0].time}</p>`)
  // 5. Update the time to `submit expense report` to `8:30am` and append the results to the `#calendar` div.
 todoList[0].tasks.dueToday.work[1].time = `8:30am`
 document.querySelectorAll('#calendar').forEach(e=>e.innerHTML+=`<p>${todoList[0].tasks.dueToday.work[1].task} at ${todoList[0].tasks.dueToday.work[1].time}</p>`)
  // 6. Add a task of `mow lawn` with a time of `5:30pm` to the `personal` array in `dueToday`. 
 
  // 7. Render all time tasks due today to the `#calendar` div. 
 