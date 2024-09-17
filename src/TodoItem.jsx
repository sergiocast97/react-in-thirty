// Props are the todo item object and toggle function
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }){

  return(
    <li className="flex items-center justify-between gap-4 w-full">
      <label className='flex items-center gap-4'>

        {/* Checkbox used to toggle status */}
        <input type="checkbox" checked={completed} onChange={e=> toggleTodo(id, e.target.checked )} className='input-checkbox' />
        
        <p className="input-selector-label">{title}</p>

      </label>

      {/* Delete button uses the delete function prop that's passed from the app */}
      <button onClick={() => deleteTodo(id)} className="btn btn-sm btn-link  btn-light">Delete</button>
    </li>
  )
}