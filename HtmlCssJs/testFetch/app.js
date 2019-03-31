document.getElementById('b1').addEventListener('click', getData);


function getData(){
    fetch(`http://jsonplaceholder.typicode.com/posts/`)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        //we want to loop through it then out put the data
        let output = '';
        data.forEach(function(data){
            output += `<p>Title: ${data.title}</p>
                       <p>Body: ${data.body}</p>
            `
            document.getElementById('output').innerHTML = output;
        })
    })
    .catch(function(err){
        alert(err);
    })
}