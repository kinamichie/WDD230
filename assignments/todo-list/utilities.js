//Create DOM manipulation helper functions
export default class utilitiesController {
    constuctor(parentId){
        this.parentElement = document.getElementById(parentId);
        this.ls = new ls();
        this.utilities = new utilities(parentId);

    }
    renderTodoList(parent,todos) {}

    renderAllTodo(todo) {
    const item = document.createElement('li');
    item.innerHTML = `
    <div class="list">
    id.innerHTML = <li>${todo.id}</li>
    content.innerHTML = <li>${todo.content}</li>
    completed.innerHTML = <li>${todo.completed}</li>
    </div>
    <div class="bottom">
        <div class="left"> 
        <p>${todo.left}</p>
        </div>
        <div class="all">
        <p>${todo.all}</p>
        </div>
        <div class="active">
        <p>${todo.active}</p>
        </div>
        <div class="completed">
        <p>${todo.completed}</p>
        </div>
    </div>
    <div class="newTodo">
        <input type="checkbox"  class="myCheck" onclick="completed()">
        <input type="text" id="myTask" placeholder="Task">
        <button onclick="addTodo() class="button">U+FF0B</button>
    </div>
     `
    return item; 
}
    renderActiveTodoFull(todo){
    const item = document.createElement('li');
    item.innerHTML = `
    id.innerHTML = <li>${todo.id}</li>
    content.innerHTML = <li>${todo.content}</li>
    completed.innerHTML = <li>${todo.completed}</li> `
    ;
    parent.innerHTML = '';
    parent.appendChild(item);
    }

    renderCompletedTodo(todo){

    }

}