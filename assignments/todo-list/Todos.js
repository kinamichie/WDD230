//import helper functions
import utilities from './utilities.js';
import ls from './ls.js';


//add button
document.querySelector('#addBtn').onclick = newTodo;
loadTodos();

//load todos
function loadTodos(){
    const todoList = ls.getTodoList();
    todoList.forEach(todo => {
        const el = createTodoElement(todo)
        addToList(el);
    })
}

//default export for the module
function newTodo(){
    const todo = createTodo();
    const todoDiv = createTodoElement(todo);
    addToList(todoDiv);
    ls.saveTodo(todo);
}

//create todo
function createTodo(){
    const input = document.querySelector('#todoInput');
    const newTodo = {id: Date.now(), content: input.value, completed: false }
    input.value = "";
    return newTodo;
}

//create todo element
function createTodoElement(todo){
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
    const todoContent = document.createElement('div')
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content');
    todoContent.setAttribute('id', 'content');

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

//add to list
function addToList(todoDiv){
    document.querySelector('#todos').appendChild(todoDiv);
}

//Event handler
function deleteTodo(e){
    const btn = e.currentTarget;
    ls.deleteTodo(btn.getAttribute('data-id'));
    document.querySelector('#todos').innerHTML = '';
    loadTodos();
}

function completedTodo(e){
    var butn = e.currentTarget;
    var tTodolist = ls.getTodoList();
    console.log("tTodoList", tTodolist);

    tTodolist.forEach(item => {
        if(item.id == butn.getAttribute('com-id')){
        item.completed = !item.completed;
        if(item.completed){
            butn.innerText = "X";
            document.getElementById("content").style.textDecoration = "line-through";
        } else {
            butn.innerText="";
        }
    }
    });
    tTodolist = new tTodolist;
    ls.setCompleted('tTodolist', tTodolist);        
    
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
        
    
        document.querySelector('#todos').innerHTML = '';
        
        //loadTodos();
    }
    
    document.getElementById('completedBtn').addEventListener('click', comTodos);
    function comTodos() {
        var todoList = ls.getTodoList();
        var completedFilter = todoList.filter( element => element.completed == true);
        
        console.log(completedFilter);
       
        document.querySelector('#todos').innerHTML = completedFilter;
        //loadTodos();
    }
    
    
    
