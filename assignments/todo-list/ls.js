function saveTodo(todo) {
    const toDoList = getTodoList();
    toDoList.push(todo);
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}
//delete id list
function deleteTodo(id) {
    const toDoList = getTodoList();

    const updatedTodos = toDoList.filter( todo => todo.id != id)
    localStorage.setItem('toDoList', JSON.stringify(updatedTodos));
}
//get todoList
function getTodoList() {
    const todoListString = localStorage.getItem('toDoList');
    let todoList = [];

    if (todoListString){
    todoList = JSON.parse(todoListString);
         
    } return todoList;
}
//get completed
function getTodo(id){
    const toDoList = getTodoList();
    const targetTodoList = toDoList.filter( todo => todo.id != id);
    return targetTodoList;
}

function setCompleted(id, value){
    const toDoList = getTodoList();

    const updatedTodos = toDoList.filter( todo => todo.id != id)
    toDoList.completed = value;
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

//export
export default {
    saveTodo,
    getTodoList,
    deleteTodo,
    setCompleted,
    getTodo
}