import React from 'react'

// Props are the todo item object and toggle function
export default function Todo({ todo, toggleTodo }) {

  // Function to handle the toggle function
  function handleTodoClick(){
    // Toggle the item using its ID to find correct one
    toggleTodo(todo.id)
  }
  
  return (
    <div>
        <label className='flex items-center gap-4'>
            {/* Checkbox used to toggle status */}
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} className='input-checkbox'></input>
            <p className="input-selector-label">{ todo.name }</p>
        </label>
    </div>
  )
}
