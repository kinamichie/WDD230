//create an array of the todo list
let toDoList = [];
//create local storage helper functions

export default class ToDos {
    constructor(elementId) {
        this.parentElement=document.getElementById(elementID);
        this.backButton=this.buildBackButton();
    }
    //Return list of tasks
    getAllTodos(){
        return toDoList;
    }
    //Get todos by completed
    getTodosByContent(todoContent){
        return this.getAllTodos().find(todo.content===todo.Content);
    }
}
