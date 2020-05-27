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
    let todoList = {};

    if (todoListString){
    todoList = JSON.parse(todoListString);
         
    } return todoList;
}
//export
export default {
    saveTodo,
    getTodoList,
    deleteTodo
}