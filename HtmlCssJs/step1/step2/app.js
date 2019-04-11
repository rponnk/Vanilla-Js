console.log("working");

const name = "rock";
const age = 27;
const job = "web developer";
const city = "Madison";
let html;

// with/o template strings (es5)
// html = '<ul><li>'+ name +'</li><li>'+ age + '</li><li>'+ job +'</li></ul>';

//with template literals/strings
html = `
<ul>
    <li>${name}</li>
    <li>${age}</li>
    <li>${job}</li>
    <li>${city}</li>
</ul>`


document.querySelector('body').innerHTML = html;

const numbs = [43,23,25,26,27,28];
const numbers = new Array(22,23,24,25,26);
const fruits = ['apple', 'oranges', 'peaches'];
const mixed = new Array('a', 12, 2, 3, {name: 'rock'}, Date());

let val;

for(let i = 0; i < mixed.length; i++) {
    console.log(mixed[i]);
}
val = numbers.length;
val = Array.isArray(numbers); //check if array
//push, pop, shift, unshift
//splice(grab from one point, end at another)
// numbs.splice(2, 4);

//reverse an array
numbers.reverse();
val = numbers.concat(numbs);
val = fruits.sort();

//for numbers- sorting
val = numbers.sort(function(x,y){
    return x-y;
    //desc
    //return y-x
});

let dog = {
    name: 'ollie',
    age: 3,
    color: 'Redish tan',
    alive: true,
    getBirthYr: function() {
        return new Date().getFullYear() - this.age;
    }
}

val = `I have a dog, he is ${dog.age}`;
val = dog.getBirthYr();

//iife -Imediate Invokable Function Expressions

(function(name) {
    console.log(`hello ${name}`);
})('Brad');

const cars = ['ford', 'chevy', 'honda'];

cars.forEach(function(cars){
    console.log(cars);
});

//map
const users = [
    {name: 'Olly', age: 2 },
    {name: 'Ogre', age: 4 },
    {name: 'Donk', age: 3 },
    {name: 'Key', age: 2 }
]

const userAge = users.map(function(user){
    return user.age;
});

console.log(userAge);

//for in loop, used on objects
const demo = {
    firstName: 'john',
    lName: 'doe',
    age: 30
}

for(let x in demo) {
    console.log(`${x} : ${demo[x]}`);
}

//Window

//Confirm
// if(confirm('are you sure')) {
//     console.log('yes');
// } else {
//     console.log('no');
// }

//outwidth and height
let outWidth = window.outerWidth;

//scroll bar with scrolly or scrollX

// if(outWidth < 500) {
//       alert(`Currently At ${outWidth}`);
// }
    



console.log(val);

