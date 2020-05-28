//import helper functions
import utilities from './utilities.js';
import ls from './ls.js';

document.querySelector('#addBtn').onclick = newTodo;

function loadTodos(){
    const todoList = ls.getTodoList();

    todoList.forEach(todo => {
        const el = createTodoElement(todo)
        addToList(el);
    })
}

//default export for the module


function newTodo() {
    const todo = createTodo();
    const todoDiv = createTodoElement(todo);
    addToList(todoDiv);
    ls.saveTodo(todo);
}  

//create Todo()
function createTodo(){
    const input = document.querySelector('#todoInput');
    const newTodo = { id: Date.now(), content: input.value, completed: false}
    input.value = '';
    return newTodo;
}
//createtodoElement
function createTodoElement(todo) {
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //complete button
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');      
    todoContent.onclick = completeTodo;

    //todo content
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content');    

    //delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', todo.id);
    deleteBtn.classList.add('todo-delete-btn');
    deleteBtn.innerText = "X";
    deleteBtn.onclick = deleteTodo;


    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteBtn);

    return todoDiv;
}

function addToList(todoDiv){
    //Add to the document
    document.querySelector('#todos').appendChild(todoDiv);
}

//Event handlers
function deleteTodo(e) {
    const btn = e.currentTarget;
    ls.deleteTodo(btn.getAttribute('data-id'));
    document.querySelector('#todos').innerHTML = '';
    loadTodos();
}
//complete
function completeTodo(todo) {
    this.completed = false;
    if (!todo.completed) {
        completeBtn.setAttribute("class", "notDone")
        completeBtn.innterHTML = "&nbsp;&nbsp;";
    }
    else {completeBtn.setAttribute("class", "done")
        completeBtn.innerHTML = "&nbsp;&#10004;&nbsp;";
    }

}
//filter function 
jsonObj.forEach(function (element, index){
    if (element['completed'] === 'false'){
        console.log('found', element);
    }
})