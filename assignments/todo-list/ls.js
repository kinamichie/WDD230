//create an array of the todo list
const toDoList = [{
    id: "Date",
    content: "Task",
    completed: true
},
{
    id: "Date",
    content: "Task",
    completed: false
}];
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
