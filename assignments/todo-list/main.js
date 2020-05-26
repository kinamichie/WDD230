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
var todos = new Array();

//Create saveTodo(task, key)
localStorage.saveTodo(task, key);


//Create getTodoItems(key) function
 var data = localStorage.getItem('task');
//Complete Todos.addTodo()

//function Todos.addTodo()
function addTodo() {
    var ul = document.getElementById("todoList");
    var li = createNewTodo(todoItem);
    ul.appendChild(li);
    document.forms[0].reset;
}


//Bind Todos.addTodo to the Add button on our add todo form in the html
function CreateNewTodo(todoItem) {
    var li = document.getElementById("li");
    var spanTodo = document.getElementById("newTodo");
    spanTodo.innerHTML =  todoItem.content + todoItem.dueDate;

    var spanDone = document.createElement("span");
    if (!todoItem.done) {
        spanDone.setAttribute("class", "notDone")
        spanDone.innterHTML = "&nbsp;&nbsp;";
    }
    else {spanDone.setAttribute("class", "done")
        spandDone.innerHTML = "&nbsp;&#10004;&nbsp;";
    }




//Create the renderTodoList(list, element) function

//Complete Todos.listTodos()

//Complete Todos.completeTodo()


//Complete Todos.removeTodo()
var spanDelete = document.createElement("span");
spanDelete.setAttribute("class", "delete");
spanDelete.innerHTML = "&nbsp,&#10007;&nbsp;";

spanDelete.onclick = deleteItem;

li.appendChild(spanDone);
li.appendChild(spanTodo);
li.appendChild(spanDelete);

return li;
}

function getFormData() {
    var task = document.getElementById("todo").value;
    if (checkInputText(task, "Please enter a task")) 
    return;

    var date = document.getElementById("dueDate").value;
    if (checkInputText(date, "Please enter a due date")) 
    return;

    var id = (new Date()).getTime();
    var todoItem = new Todo(id, task);
    todos.push(todoItem);
    addTodo(todoItem);
    saveTodoItem(todoItem);
    }

   
      
//Complete Todos.filterTodos()*/