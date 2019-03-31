const posts = [
    {title: 'post one', body: 'this is one'},
    {title: 'post two', body: 'this is two'}
];

/* This is synchronous way
function createPost(post) {
    setTimeout(function(){
        posts.push(post);
    }, 2000);
}

function getPost() {
    setTimeout(function(){
        let outpost='';
        posts.forEach(function(post){
            outpost += `<li>${post.title}</li>`
        });
        document.body.innerHTML = outpost;
    }, 1000);
}



createPost({title: 'Old town road', body: 'bubble gum'});

getPost();

*/

//Async Way
function createPost(post) {
//create promise
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);
            resolve();
        }, 500);
    });
}

function getPost() {
    setTimeout(function(){
        let outpost='';
        posts.forEach(function(post){
            outpost += `<li>${post.title}</li>`
        });
        document.body.innerHTML = outpost;
    }, 500);
}

createPost({title: 'Old town road', body: 'bubble gum'}).then(getPost);