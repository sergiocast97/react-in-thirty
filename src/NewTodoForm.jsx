import { useState } from 'react'

export function NewTodoForm({ onSubmit }){

  const [newItem, setNewItem] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    if(newItem === "") return
    onSubmit(newItem)
    //console.log(todos)
    setNewItem("")
  }

  return(
    <form onSubmit={handleSubmit} className="flex w-full gap-4">

      <input
        value={newItem}
        onChange={e => setNewItem(e.target.value)} 
        type="text"
        id="item"
        className="input-text"
      />

      {/* Add todo item button */}
      <div class="flex-shrink-0">
        <button class="btn btn-md btn-filled btn-light">Add item</button>
      </div>
    </form>
  )
}