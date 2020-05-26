import * as TodoController from './Todos.js';
import * as utilities from './utilities.js';

//Create an instance of our Todos class
//class todo {id: timestamp, content: String, completed: bool}
class TodoView  {
    constructor(id, content, completed){
    this.id = id;
    this.content = content;
    this.completed = false;  
    }  
}

//Add a variable to store our list of tasks to the Todos.js module. todoList = null
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('todo');



    const liMaker = text => {
        const li = document.getElementById('li');
        liMaker.textContent = text;
        ul.appendChild(li);
    }
    form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    liMaker(input.value);
    input.value = '';
})

let todoList = [];
localStorage.setTodo('todo', JSON.stringify(todoList));
const data=JSON.parse(localStorage.getTodos('todo'));

todoList.push(input.value);
localStorage.setTodo('todo', JSON.stringify(todosList));
data.forEach(todo => {
    liMaker(todo);
})




//Create saveTodo(task, key)
/*function saveTodo(task, key){

}

//Create getTodos(key) function
function getTodos(key){
    
}

//Complete Todos.addTodo()
//function Todos.addTodo(){

//}

//Bind Todos.addTodo to the Add button on our add todo form in the html
function addTodo(){
    var y =
    document.getElementsById("myTask").value;
    document.getElementsById("todo").innerHTML = y;
}

//Create the renderTodoList(list, element) function

//Complete Todos.listTodos()

//Complete Todos.completeTodo()
Function todos.completeTodos(){
    var x = document.getElementsByClassName("mycheck");
    x.checked = true;
}

//Complete Todos.removeTodo()

//Complete Todos.filterTodos()*/