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
    completeBtn.setAttribute('type', 'checkbox');
    completeBtn.setAttribute('check', todo.completed);
    completeBtn.classList.add('complete-btn'); 
    completeBtn.onclick = check();  
    

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
function check(){ 
    var text = document.getElementById('check');
    if (todo.completed == true){
        text.style.display="line-through";
    } else {
        text.style.display="none";
    }
}   


 
//filter functions

function createTodoFilter(todo){

    const todoFiltersDiv = document.createElement('div');
    todoFiltersDiv.classList.add('todo-filters');

    //tasks left
    const tasksLeft = document.createElement('div');
    tasksLeft.classList.add('tasks-left');    
    
    //show all todos
    const showAllBtn = document.createElement('button');
    showAllBtn.setAttribute('data-content', todo.content);
    showAllBtn.classList.add('showAllTodos');
    showAllBtn.innerText = "All";
    showAllBtn.onclick = showAllTodos;    

    //active button
    const activeBtn = document.createElement('button');
    activeBtn.setAttribute('data-notCompleted', todo.completed);
    activeBtn.classList.add('active-btn');
    activeBtn.innerText = "Active";
    activeBtn.onclick = activeTodos;

    //completed button
    const doneBtn = document.createElement('button');
    doneBtn.setAttribute('data-done', todo.completed);
    doneBtn.classList.add('done-btn');
    doneBtn.innerText = "Completed";
    doneBtn.onclick = doneTodos;

    todoFiltersDiv.appendChild(tasksLeft);
    todoFiltersDiv.appendChild(showAllBtn);
    todoFiltersDiv.appendChild(activeBtn);
    todoFiltersDiv.appendChild(doneBtn);

    return todoFiltersDiv;
}

function showAllTodos(){
    var allList  = [];
    for (var i = 0; i< todoList.length; i++){
        allList.push(todo[i]);
    }
}

function activeTodos() {
    var activeList = [];
    for (var i = 0; i< todoList.length; i++){
        if (todo[i].complete === 'false'){
            activeList.push(todo[i]);
        }
    }    
    }

function doneTodos() {
    var doneList = [];
    for (var i = 0; i< todoList.length; i++){
        if (todo[i].complete !== 'false'){
            doneList.push(todo[i]);
        }
    }
}