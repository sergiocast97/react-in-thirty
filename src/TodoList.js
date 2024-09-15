import React from 'react'
import Todo from './Todo'

// Props are the todo list and the toggleTodo function for todo items
export default function TodoList({ todos, toggleTodo }) {
  return (
    // Looping through todo list
    todos.map(todo => {
      // Todo item using key, todo item and toggle function as props
      return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
    })
  )
}
