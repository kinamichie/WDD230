//Create DOM manipulation helper functions
export default class utilitiesController {
    constuctor(parentId){
        this.parentElement = document.getElementById(parentId);
        this.ls = new ls();
        this.utilities = new utilities(parentId);

    }
    renderTodoList(parent,todos) {}

    renderOneTodo(todo) {
    const item = document.createElement('li');
    item.innerHTML = `
    id.innerHTML = <li>${todo.id}</li>
    content.innerHTML = <li>${todo.content}</li>
    completed.innerHTML = <li>${todo.completed}</li> `
    return item; 
}
    renderOneTodoFull(todo){
    const item = document.createElement('li');
    item.innerHTML = `
    id.innerHTML = <li>${todo.id}</li>
    content.innerHTML = <li>${todo.content}</li>
    completed.innerHTML = <li>${todo.completed}</li> `
    ;
    parent.innerHTML = '';
    parent.appendChild(item);
    }

}