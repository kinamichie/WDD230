//import helper functions
import ls from './ls.js';
import utilities from './utilities.js';

//default export for the module

export default class TodosController {
    constuctor(parentId){
        this.parentElement = document.getElementById(parentId);
        this.ls = new ls();
        this.utilities = new utilities(parentId);

    }
    showTodoList() {
        const todoList = this.ls.getAllTodos;
        this.utilities.renderTodoList(this.parentElement,todoList);
        this.addTodoListener();
    }
}
    function showOneTodo(todoContent) {
        const todo = this.ls.getTodoByName(todoContent);
        this.utilities.renderOneTodoFull(
            this.parentElement,
            todo).ontouch=() => {
                this.showTodoList();
            };

    function addTodoListener() {
            const childrenArray=Array.from(this.parentElement.children);
            childrenArray.forEach(child=>{
                child.addEventListener('touchend',e=>{
                    this.showOneTodo(e.currentTarget.dataset.content);
                });
            });
        }
    
}