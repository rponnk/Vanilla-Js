// const http = new EasyHTTP;

//get users - async way
// http.get(`http://jsonplaceholder.typicode.com/users`)
//     //what were pulling back
//     .then(data => console.log(data))
//     //if theres an error to catch it
//     .catch(err => console.log(err))

// //post request
// let data = {
//     name: "jeff",
//     title: "old town road"
// }

// http.post(`http://jsonplaceholder.typicode.com/users`, data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// data = {
//     name: "georgie",
//     title: ' yehaww'
// }
// //put - update
// http.put(`http://jsonplaceholder.typicode.com/users/1`, data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// //delete
// http.delete(`http://jsonplaceholder.typicode.com/users/1`)
//     .then(() => console.log('deleted'))
//     .catch(err => console.log(err));

//es7
// async function myFunc() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve(`Hello`), 1000);
//     });
//     let error = false;
//     if(!error) {
//         const res = await promise;
//         return res;
//     } else {
//         await Promise.reject(new Error(`Something went wrong`));
//     }

// }

// myFunc()
//     .then(res => console.log(res))
//     .catch(err => console.log(`${err}`));

async function getUsers() {
    //await response of the fetch call
    const response = await fetch
    (`http://jsonplaceholder.typicode.com/users`);

    //if promised is resolved this will run
    const data = await response.json();

    return data;
}

getUsers().then(users => console.log(users));