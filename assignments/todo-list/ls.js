function saveTodo(todo){
    const toDoList = getTodoList();
    toDoList.push(todo);
    localStorage.setItem('toDoList',JSON.stringify(toDoList));
}
//delete id list
function deleteTodo(id){
    const toDoList = getTodoList();
    const updatedTodos=toDoList.filter(todo =>todo.id !=id);
    localStorage.setItem('toDoList',JSON.stringify(updatedTodos));
}
//completed todo
/*function completedTodo(id){
    const toDoList = getTodoList();
    
    localStorage.removeItem("toDoList");
    const updatedTodos=toDoList.filter(todo =>todo.id ===id);
    localStorage.setItem('toDoList', JSON.stringify(updatedTodos));
}*/

//get todoList
function getTodoList(){
    const todoListString=localStorage.getItem('toDoList');
    let todoList = [];

    if(todoListString){
        todoList = JSON.parse(todoListString);
    } return todoList;
}

export default {
    saveTodo,
    getTodoList,
    //ompletedTodo,
    deleteTodo
}

