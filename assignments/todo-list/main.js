/*function todo (id, content, completed) {
    this.id = id;
    this.content = content;
    this.complete = false;
}
const todoList = new Array();
windows.onload = newTask;

function newTask(){
    const plusButton 
}*/
//set up local storage
/*function getTodoData() {
    if (localStorage){
        for (var i = 0; i < localStorage.length; i++){
            var key = localStorage.key(i);
            if (key.substring(0, 4) == "todo"){
                var item = localStorage.getItem(key);
                var todoList = JS.parse(item);
                todos.push(todoList);
            }
        } addTodosToPage();
    } else {
        console.log("Error");
    }
}
const todoObject = {
    id: "May 10",
    content: "Task",
    completed: true
}

//add to-dos to page
function addToPage(){
    const ul = document.getElementById("list");

}*/

const finish = document.createElement("LI");
var i;
for (i = 0; i<finish.length; i++) {
    const span = document.createElement("SPAN")
    const plus = document.createTextNode("\u00D7");
    span.className ="done";
    span.appendChild(plus);
    finish[i].appendChild(span);

}
const done = document.getElementsByClassName('done');
var i;
for (i = 0; i<done.length; i++){
    done[i].onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
    }
}
 // Add a "checked" symbol when clicking on a list item
var myList = document.createElement('ul');
myList.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//Create a new list
function newItem() {
const li = document.createElement("li");
const taskItem = document.getElementById("newInput").value;
const task = document.createTextNode(taskItem);
li.appendChild(task);
if(taskItem ===''){
    alert("Please enter a to-do");
} else {
    document.getElementById("myList").appendChild(li);

}
document.getElementById("newInput").value = "";

const span = document.createElement("SPAN");
const plus = document.createTextNode("\u00D7")
span.className = "done";
span.appendChild(plus);
li.appendChild(span);

for (i=0; i<done.length; i++){
    close[i].onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
    }
}
}



/*window.addEventListener('load',loadData);

function loadData(){
    const myList = document.getElementById('myList');
    myList.innerHTML='';
    myList.scrollTo(0,0);
    document.querySelector('#myTitle').innerText="Todos";

    //hide back button
    document.querySelector('#backButton').hidden = true;

}

//set up local storage
function getTodoItems() {
    if (localStorage){
        for (var i = 0; i < localStorage.length; i++){
            var key = localStorage.key(i);
            if (key.substring(0, 4) == "todo"){
                var item = localStorage.getItem(key);
                var todoItem = JSON.parse(item);
                todos.push(todoItem);
            }
        } addTodosToPage();
    } else {
        console.log("Error");
    }
}

//Create a new list
function newTask() {
const li = document.createElement("li");
const taskItem = document.getElementById("newInput").value;
const task = document.createTextNode(taskItem);
li.appendChild(task);
document.getElementById("newInput");
}*/
