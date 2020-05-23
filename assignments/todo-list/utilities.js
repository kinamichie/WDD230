//Create DOM manipulation helper functions
function renderTodoList(parent,todos) {}

function renderOneTodo(todo) {
    const item = document.createElement('li');
    id.innerHTML = <li>${todo.id}</li>
    content.innerHTML = <li>${todo.content}</li>
    completed.innerHTML = <li>${todo.completed}</li> 
    return item; 
}
function renderOneTodoFull(todo){
    const item = document.createElement('li');
    
    id.innerHTML = <li>${todo.id}</li>
    content.innerHTML = <li>${todo.content}</li>
    completed.innerHTML = <li>${todo.completed}</li> 
    ;
    parent.innerHTML = '';
    parent.appendChild(item);
    }

export default utilities;