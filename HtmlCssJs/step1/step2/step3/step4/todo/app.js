//set local storage
// localStorage.setItem('name', 'John');
// //set session storage
// sessionStorage.setItem('name', 'Beth');

//remove
// localStorage.removeItem('name'); localStorage.clear();


//call input and add task button
// const addTask = document.querySelector('.add-task');
// const task = document.querySelector('#task');


// taskInput.addEventListener('keydown', addTaskList);
// addTask.addEventListener('click', addTaskList);

// function addTaskList(e) {
//     console.log(e.target.value);
//     // e.preventDefault();
// }

// document.querySelector('form').addEventListener('submit', function(e) {
//     const task = document.getElementById('task').value;

//     let tasks;
//     //if tasks in local storage is equal to null
//     if(localStorage.getItem('tasks') === null) {
//         //make tasks an empty array
//         tasks = [];
//     } else {
//         //if tasks is an array run this - JSON.parse turns string into object
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }
//     tasks.push(task);
//     //add to the local storage - turn back to string
//     localStorage.setItem('tasks', JSON.stringify(task));


//    e.preventDefault(); 
// });

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
  
    let tasks;
  
    if(localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  
    tasks.push(task);
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
  
    alert('Task saved');
  
    e.preventDefault();
  });
  
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  
//   tasks.forEach(function(task){
//     console.log(task);
//   });