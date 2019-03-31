//before es6 - functione expression
const sayHello = function() {
    console.log(`Hello there`);
}

sayHello();

const sayHelloAgain = () => {console.log(`saying hello again`);}

sayHelloAgain();

const retObjLiteral = () => ({name: "kenny"});

console.log(retObjLiteral());

const funWithParam = (name) => console.log(`Hello ${name}`);

funWithParam("Charlie");

const users = ['nate', 'ollie', 'zues'];

const nameLengths = users.map((char)=> char.length);

console.log(nameLengths);