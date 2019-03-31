const http = new easyHttps;

//get
http.get(`http://jsonplaceholder.typicode.com/posts`, function(err, response){
    if(err) {
        console.log(err);
    } else {
        console.log(response);
    }
});

//post
const data = {
    title: 'custom post',
    body: 'custom post'
};
// http.post(`http://jsonplaceholder.typicode.com/posts`, data, function(err, post){
// if(err) {
//     console.log(err);
// } else {
//     console.log(post);
// }
// });

//put
// http.put(`http://jsonplaceholder.typicode.com/posts/7`, 
// data, function(err, post){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

//delete

http.delete(`http://jsonplaceholder.typicode.com/posts/1`, 
function(err, response){
    if(!err) {
        console.log(response);
    } else {
        console.log(err);
    }
});