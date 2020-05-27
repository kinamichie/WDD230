//Create DOM manipulation helper functions
/*export default class utilitiesController {
    constuctor(parentId){
        this.parentElement = document.getElementById(parentId);
        this.ls = new ls();
        this.utilities = new utilities(parentId);

    }*/
    //renderTodoList(parent,todos) {}

    //renderAllTodo(todo);
    const item = document.createElement('li');
    item.innerHTML = `
        <li>box</li>
        <li>task</li>
        <li>checkmark</li>
        `
    
    return item;
    