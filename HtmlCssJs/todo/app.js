class Item {
    constructor(todo) {
        this.todo = todo;
    }
}

class UI {
    addToList(todoAdd) {
        const added = document.getElementById('addToList');
        const tr = document.createElement('tr');

        tr.innerHTML = `
        <td>${todoAdd.todo}</td>
        <td><a href='#' class='delete'>x</a></td>`

        added.appendChild(tr);
    }

    removeFromList(x) {
        if(x.className === 'delete') {
            //access 2 levels above
            x.parentElement.parentElement.remove();
        }
    }
}

const todoForm = document.getElementById('todoForm').addEventListener('submit', function(e){
    const todo = document.getElementById('todo').value;
    const todoItem = new Item(todo);

    const ui = new UI();

    ui.addToList(todoItem);

    e.preventDefault();
});

document.getElementById('addToList').addEventListener('click', function(e){
    const ui = new UI();
    ui.removeFromList(e.target);

    e.preventDefault();
});