/*2//replace element

//create element
const newHeading = document.createElement('h2');
//add id
newHeading.id = 'task-title';
//new text node - doing append child, 
newHeading.appendChild(document.createTextNode('New Tasks'));

//get the old heading
const oldHeading = document.querySelector('#task-title');
//Parent
const cardAction = document.querySelector('.card-action');
//replace - replaceChild(what you want, what you want to replace);
cardAction.replaceChild(newHeading, oldHeading);
//remove element
const lis = document.querySelectorAll('ul li');
const list = document.querySelector('ul');

//remove items
// lis[0].remove();

//remove by child element
//list.removeChild(lis[3]);

//classes and attr
const firstLi = document.querySelector('li:first-child');
//grab child inside
const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;
val = link.classList[0];
val = link.classList.add('test');
val = link.classList.remove('test');
val = link;
//setting the attr to the tag
val = link.getAttribute('href');
link.setAttribute('href', 'http://google.com');
val = link;

const clearTask = document.querySelector('.clear-tasks');
//clear tasks 
// clearTask.addEventListener('click', function(e){
//     list.remove();
//     //prevents from it redirecting if no link
//     e.preventDefault();
// });
const onClick = function(e) {
    list.remove();
    e.preventDefault();
    
}

clearTask.addEventListener('click', onClick);

console.log(clearTask);*/

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// clearBtn.addEventListener('click', runEvent);

//double click
// clearBtn.addEventListener('dblclick', runEvent);

//Mouse Up
// clearBtn.addEventListener('mouseup', runEvent);

//Mouse down
// clearBtn.addEventListener('mousedown', runEvent);

//mouse over
// clearBtn.addEventListener('mouseover', runEvent);

//mouse move
// card.addEventListener('mousemove', runEvent);

// //Event Handler
// function runEvent(e) {
//     console.log(`EVENT TYPE ${e.type}`);
//     // e.preventDefault();

//     heading.innerHTML = `MouseX: ${e.offsetX} mouseY: ${e.offsetY}`

//     document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX/e.offsetY})`
// }

// const form = document.querySelector('form');
// const taskInput = document.querySelector('#task');

// form.addEventListener('submit', runEvent);
// taskInput.value = '';


// taskInput.addEventListener('blur', runEvent);

// function runEvent(e) {
//     console.log(`EVENT TYPE: ${e.type}`);
//     heading.innerText = e.target.value;
//     // console.log(taskInput.value);
//     //e.preventDefault();
// }

//const delItem = document.querySelector('.delete-item'); delItem.addEventListener('click', deleteItem);

//search in body
// const lis = document.querySelectorAll('ul li');
// const list = document.querySelector('ul');

// document.body.addEventListener('click', deleteItem);

// function deleteItem(e) {
//     // if(e.target.parentElement.className === 'delete-item secondary-content') {
//     //     console.log(`delete item`);
        
//     // }
//     if(e.target.parentElement.classList.contains('delete-item')) {
//         console.log('deleted item');
//         e.target.parentElement.parentElement.remove();
//     }

// }
