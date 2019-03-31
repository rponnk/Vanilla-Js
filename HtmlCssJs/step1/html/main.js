//this in global scope object

'use strict'
// this.table = "window table";
// //access this.table
// // const cleanTable = function(soap) {
// //     const innerFunction = (_soap)=> {
// //     console.log(`cleaning ${this.table} using ${_soap}`); //this is referring to global window.
// //     }
// //     innerFunction(soap);
// // }

// this.garage = {
//     table: "garage table"
// };

// //inside an object
// // let createRomm = function(name) {
// //     this.table = `${name}s table`
// // }

// //class w/ constructor
class createRomm {
    constructor(name) {
        this.table = `${name}s table`;
    }
    //better way to call a method without .call
    cleanTable(soap) {
        console.log(`cleaning ${this.table} using ${soap}`);
    }
}

class Car {
    constructor(name, brand, engine, doors) {
        this.name = name;
        this.brand = brand;
        this.engine = engine;
        this.doors = doors;
    }

    getMore() {
        console.log(`${this.brand} ${this.name} has a ${this.engine} engine and its a ${this.doors} door `);
    }
}

 let toyota = new Car("Camry", "Toyota", 1.5, 4);
 let rocksRoom = new createRomm("Rock");
 let johnsRoom = new createRomm("John");


rocksRoom.cleanTable("some soap");
toyota.getMore();

// cleanTable.call(rocksRoom, "oils");
// cleanTable.call(this.garage, "degreaser");
// cleanTable.call(this, "dawn");
// cleanTable.call(johnsRoom, "febreeze"); //because its a 'private variable'


// this.garage = {
//     table: "garage table",
//     cleanTable() {
//         console.log(`cleaning ${this.table}`) 
//     }
// };

// //inside an object

// let johnsRoom = {
//     table: "johns table",
//     cleanTable() {
//         console.log(`cleaning ${this.table}`)
//     }
// };

//access above object

/* cannot be accessed this way
            console.log(this.johnsRoom.table);
*/

//access it this way with a method/fuction in the obj

// let guess;
// let number = Math.floor(Math.random() * 10);

// const numberGame = function() {
//     guess = prompt("whats the number?");
//     if(Number(guess) > number) {
//         alert("too high try again");
//         numberGame();
//     } else if(Number(guess) < number) {
//         alert("too low try again");
//         numberGame();
//     } else {
//         alert("correct");
//     }
// }

// numberGame();

// let nums = 10;

// while(nums <= 8) {
//     console.log(nums);
//     nums += 5;
// }

// nums = "hello";
// for(let i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
//     if(nums[i] == nums[i - 1]) {
//         console.log(`${nums[i]} it repeated  itself`)
//     }
// }

const capitalize = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const isEven = function(num) {
    if(num % 2 === 0) {
        return true;
        console.log("true");
    } else {
        return false;
        console.log("false");
    }
}

function factorial(num) {
    let result = 1;
    for(let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

function strReplace(str) {
    let newStr = str.replace(/_/g, ">");
    return newStr;
}

    let num = 8;
    function doMath() {
        num +=1;
        console.log(num % 5 === 0);
        return num % 5 === 0;
    }
    num+=1;


console.log(doMath());

//pass functions to other functions
//setInterval(function, interval in ms);

let val;
// //Number to String
// val = String(555);
// //String to Number
// val = Number(val);

// val = parseInt("100.00");
// val = parseFloat("100.31");

// val = (true).toString();
// val = parseInt("100.00");

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);

//Math
//round up with Math.ceil
//round down with Math.round
//square with Math.sqrt
//absoulte with Math.abs


let tags = "web, dev, development, web development, javascript, html, css";

val = tags.split(",");

//replace
val = tags.replace(',', '|');

console.log(val);