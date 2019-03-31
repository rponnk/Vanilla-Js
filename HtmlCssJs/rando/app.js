//this - OOP

//CONSTRUCTOR
// function Person(name = 'john', dob) {
//     this.name = name;
//     // this.age = age;
//     this.birthday = new Date(dob);
//     this.getAge = function() {
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return ageDate.getUTCFullYear() - 1970;
//     }

// }

// const olly = new Person('Ollie', '05/27/1991');

// console.log(olly);

//PROTOTYPES
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.greeting = function() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
// }

// const p1 = new Person('John', 'Doe');
// console.log(p1.greeting());

// function Customer(firstName, lastName, phone, member) {
//     Person.call(this, firstName, lastName);
    
//     this.phone = phone;
//     this.member = member;
    
// }

// //Inherit prototype methods
// Customer.prototype = Object.create(Person.prototype);

// Customer.prototype.contructor = Customer;

// Customer.prototype.greeting = function() {
//     return `Hello there ${this.firstName} ${this.lastName} welcome to the buisness`;
// }

//ES5

// const cus1 = new Customer("Tom", "Shanks", "6192489958", "standard");

// console.log(cus1.greeting());

// const personPrototypes = {
//     greeting: function() {
//          return `Hello there ${this.firstName} ${this.lastName}`;
//     },
//     getsMarried: function(newLastName) {
//         this.lastName = newLastName;
//     }
// }

// const mary = Object.create(personPrototypes);
// mary.firstName = 'mary';
// mary.lastName = 'Jane';
// mary.age = 30;

// mary.getsMarried("Jeff");
// console.log(mary.greeting());
// console.log(mary);

// const brad = Object.create(personPrototypes, {
//     firstName: {value: "brad"},
//     lastName: {value: 'jeff'}
// });

// console.log(brad.greeting());

//Classes - ES6
// class Person {
//     constructor(name, dob) {
//         this.name = name;
//         this.birthdate = new Date(dob);
//     }

//     greeting() {
//         return `Hello there ${this.name}`;
//     }

//     calcAge() {
//         const diff = Date.now() - this.birthdate.getTime();
//         const ageDate = new Date(diff);
//         return `${this.name} is ${Math.abs(ageDate.getUTCFullYear() - 1970)} years old`;
//     }

//     getsMarried(newName) {
//         this.name = newName;
//     } 
//     static sqNum(num) {
//         return num * num;
//     }
// }

// const mary = new Person('chicken', "september 21 1992");

// mary.getsMarried("Rover");

// console.log(mary.greeting());

// console.log(Person.sqNum(2));

// const h1 = document.createElement('h1');

// const body = document.querySelector('body');

// const clicker = document.querySelector('#clicker');

// clicker.addEventListener('click', function(e){
//     body.innerHTML = `
//     <h1>Hello World</h1>
// `
// });

// const userOne = {
//     firstName: "jeff",
//     lastName: "micheals"
// }

// const userTwo = {
//     firstName: "jarry",
//     lastName: "daniels"
// }

// const fullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// const jeff = fullName.bind(userOne);

// console.log(jeff());

class User {
    constructor(name) {
        this.name = name;
    }
}

class UI {
    addUserInput(name) {
        const userData = document.querySelector('#userData');
        const inputName = document.getElementById('name').value;
        //create an element
        const div = document.createElement('div');

        div.innerHTML = `
            <p>${name.name}</p>
        `
        userData.appendChild(div);

    }

    clearInput() {
        document.getElementById('name').value = '';
    }
}

let userInput = document.querySelector('#userInput').addEventListener('submit', function(e){
    const name = document.getElementById('name').value;

    const user = new User(name);
    const ui = new UI();

    ui.addUserInput(user);

    ui.clearInput();

    e.preventDefault();
});

