document.getElementById('b1').addEventListener('click', getText);

document.getElementById('b2').addEventListener('click', getJson);

document.getElementById('b3').addEventListener('click', getApi);

//b1

function getText(e) {
    fetch("text.txt")
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        // console.log(data);
        document.getElementById('textOutput').innerText = `
            ${data}
        `
    })
    .catch(function(err){
        console.log(err);
    })
}

//b2
function getJson() {
    fetch("pck.json")
    //fetch file or url, then...
    //function with a response
    .then(function(res){
        //return whats inside the json file
        return res.json();
    })
    .then(function(data){
        
        //if array loop through
        let output ='';
        data.forEach(function(post){
            output += `<li>${post.name}</li>`;
        })
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    })
}


//b3
function getApi() {
    fetch(`http://jsonplaceholder.typicode.com/posts`)
    .then(function(res){
        return res.json();
    })
    //loop through
    .then(function(data){
        let output = '';
        data.forEach(function(data){
            output += `<li>${data.title}</li>`; 
        })
        //output it to the html body
        document.getElementById('ordered').innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    })
}