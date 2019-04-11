class User {
    constructor(fname,mname,lname,email) {
        this.fname = fname;
        this.mname = mname;
        this.lname = lname;
        this.email = email;
    }
}

class UI {
    addUser(person) {
        //grab where person is being pushed
        const userData = document.getElementById('userData');
        //create element
        const lis = document.createElement('tr');

        lis.innerHTML = `
        <td>${person.fname} ${person.mname} ${person.lname}</td>
        <td>${person.email}</td>
        <td><a href='#' class='delete'>x</a></td>
        `
        userData.appendChild(lis);
    }

    clearFields() {
        document.getElementById('fname').value = '';
        document.getElementById('mname').value = '';
        document.getElementById('lname').value = '';
        document.getElementById('email').value = '';
    }

    deleteUser(x) {
        if(x.className === 'delete') {
            x.parentElement.parentElement.remove();
        }

    }
}

let userForm = document.getElementById('userInput').addEventListener('submit', function(e){
    //grab values of the input
    const fname = document.getElementById('fname').value;
    const mname = document.getElementById('mname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;

    const newPerson = new User(fname,mname,lname,email);

    const ui = new UI();

    if(fname === '' || lname === '') {
    } else {
        ui.addUser(newPerson);
        ui.clearFields();
    }
    e.preventDefault();
});

document.getElementById('userData').addEventListener('click', function(e){

    const ui = new UI();

    ui.deleteUser(e.target);
    e.preventDefault();
});