//Create DOM manipulation helper functions
/*export default class utilitiesController {
    constuctor(parentId){
        this.parentElement = document.getElementById(parentId);
        this.ls = new ls();
        this.utilities = new utilities(parentId);

    }*/
    renderTodoList(parent,todos) {}

    renderAllTodo(todo) {
    const item = document.createElement('li');
    item.innerHTML = `
    <div class="list">
    id.innerHTML = <li>${todo.id}</li>
    content.innerHTML = <li>
        <span class="notDone"></span>
        <span> </span>
        <span id="1" class"delete>&#1007</span>
        </li>
        </div>
    