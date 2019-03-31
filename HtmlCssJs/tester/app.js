//User class
class User {
    constructor(fullName, email, password) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
    }
}

class UI {
    addUser(users) {
    //grab id or element where data is being pushed
    const userList = document.getElementById("liData");
    //create element
    const lis = document.createElement('tr');

    lis.innerHTML = `
        <td>${users.fullName}</td>
        <td>${users.email}</td>
    `    
    userList.appendChild(lis);
    } 

    //clear fields
    clearFields() {
        document.getElementById('fullName').value = '';
        document.getElementById("email").value = '';
        document.getElementById("password").value = '';
    }
}


//grab form
let userForm = document.getElementById('userData').addEventListener('submit', function(e){
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //represent the user
    const newUser = new User(fullName, email, password);

    //represent the ui
    const ui = new UI();

    ui.addUser(newUser);
    ui.clearFields();

    e.preventDefault();
});



