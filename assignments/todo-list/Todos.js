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
    //todoContent.onclick = completeTodo;

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
//render list

function renderTodoList(todo) {
    const list = document.querySelector('todoList');
    list.insertAdjacentHTML('beforeend', `
      <div class="todos" data-key="${todo.id}">
        <button id="${todo.id}" type="checkbox" class="complete-btn"></button>
        <label for="${todo.id}" class="tick js-tick"></label>
        <div>${todo.text}</div>
        <button class="todo-delete-button delete-todo">
         </button>
      </li>
    `);
  }
    
    renderTodoList(todos);
  

//completed todos function
/*function completeTodo(todo) {
        if (!todo.completed) {
        completeBtn.setAttribute('data-completed', todo.notCompleted)
        completeBtn.innterHTML = "&nbsp;&nbsp;";
    }
    else {completeBtn.setAttribute('data-completed', todo.completed)
        completeBtn.innerHTML = "&nbsp;&#10004;&nbsp;";
    }

}*/
//filter functions

function filterTodo(todo){

    const todoFiltersDiv = document.createElement('div');
    todoFiltersDiv.classList.add('todoFilters');

    //tasks left
    const tasksLeft = document.createElement('div');
    tasksLeft.classList.add('tasks-left');    
    
    //show all todos
    const showAllBtn = document.createElement('button');
    showAllBtn.setAttribute('data-content', todo.content);
    showAllBtn.classList.add('showAllTodos');
    showAllBtn.onclick = showAllTodos;    

    //active button
    const activeBtn = document.createElement('button');
    activeBtn.setAttribute('data-notCompleted', todo.completed);
    activeBtn.classList.add('active-btn');
    activeBtn.onclick = activeTodos;

    //completed button
    const doneBtn = document.createElement('button');
    doneBtn.setAttribute('data-done', todo.completed);
    doneBtn.classList.add('done-btn');
    doneBtn.onclick = doneTodos;

    todoFiltersDiv.appendChild(tasksLeft);
    todoFiltersDiv.appendChild(showAllBtn);
    todoFiltersDiv.appendChild(activeBtn);
    todoFiltersDiv.appendChild(doneBtn);

    return todoFiltersDiv;
}