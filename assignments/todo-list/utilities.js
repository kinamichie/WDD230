//

export default  {
    renderShowAllTodos(todoList, listElement) {
        let list = document.querySelector('todoList');
        let currentInnerHTML = element.innerHTML;

        todoList.forEach(buildTodoHTML);

         function buildTodoHTML(todo, index){
         currentInnerHTML = element.innerHTML
         let displayedTodo =  `
          <div class="todos">
            <button type="checkbox" class="complete-btn">${todo.completed}</button>
            <div>${todo.content}</div>
            <button  id= "data-id" class="todo-delete-button">X</button>
          </div>
          <div class="todo-filters">
            <div class="tasks-left">${todo.active} + "tasks left"</div>  
            <button id="data-content" class="showAllTodos">All</button>
            <button id="data-notCompleted" class="active-btn">Active</button>
            <button id="data-done" class="done-btn">Completed</button>  
          </div>`              
          
          currentInnerHTML =+ displayedTodo;
          element.innerHTML = currentInnerHTML;
      }        
}
}

   