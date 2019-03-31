const posts = [
    {title: 'post one', body: 'this is one'},
    {title: 'post two', body: 'this is two'}
];

//Async Way
function createPost(post) {
//create promise
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);
            let error = false;
            if(!error) {
                resolve();
            } else {
                reject(`something went wrong`);
            }
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

createPost({title: 'Old town road', body: 'bubble gum'})
.then(getPost)
.catch(function(error){
    console.log(error);
});