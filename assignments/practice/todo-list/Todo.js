//import helper functions
import utilities from './utilities.js';
import ls from './ls.js';
//check load local storage 


//loadTodos();
//add button
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
    completeBtn.setAttribute('type', 'checkbox');
    completeBtn.setAttribute('com-id', todo.id);
    completeBtn.onclick = completedTodo;  
     
    //todo content
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content'); 
    todoContent.setAttribute('id', 'content')   

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

//complete button

function completedTodo(ev){ 
    var butn = ev.currentTarget; 
    var tTodolist = ls.getTodoList();
    
    console.log("tTodoList", tTodolist);    

    tTodolist.forEach(item => {
        if (item.id == butn.getAttribute('com-id')){
            item.completed = !item.completed;
            if(item.completed){
                butn.innerText = "X";
                document.getElementById('content').style.textDecoration='line-through';
                
            }else {
                butn.innerText= "";
                document.getElementById('content').style.textDecoration='none';
                
            }                
        }
    });    
    
            
    }
    

    //filter function

document.getElementById('allBtn').addEventListener("click", allTodos);

function allTodos() {
    document.querySelector('#todos').innerHTML = '';
    loadTodos();
}

document.getElementById('activeBtn').addEventListener('click', activeTodos);
function activeTodos(){
    var todoList = ls.getTodoList();
    var activeFilter = todoList.filter( element => element.completed == false);
    
    console.log(activeFilter);
    return this.activeTodos;
}

document.getElementById('completedBtn').addEventListener('click', comTodos);
function comTodos() {
    var todoList = ls.getTodoList();
    var completedFilter = todoList.filter( element => element.completed == true);
    
    console.log(completedFilter);
}



