import {TodoItem} from "./TodoItem";

// Props are the todo list and the toggleTodo function for todo items
export function TodoList({ todos, toggleTodo, deleteTodo }){
  return(
    <ul className="flex flex-col items-start w-full gap-2">

      {/* If no todos, return no todos */}
      {todos.length === 0 && "No Todos"}

      {/* Looping through todo list */}
      {todos.map((todo) => {
        return(
          // Todo item using key, todo item and toggle function as props
          <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        )
      })}
    </ul>
  )
}