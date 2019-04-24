//grab search input
const searchUser = document.getElementById('searchUser');
//event listener
searchUser.addEventListener('keyup', (e)=> {
    //get the text from searchbox
    const userText = e.target.value;
    if(userText.length > 0) {
        console.log(userText);
    }
    e.preventDefault();
});

//incomplete
