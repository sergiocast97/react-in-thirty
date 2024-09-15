// Importing react and necessary hooks
import React, { useState, useRef, useEffect } from "react"

// Import the TodoList component
import TodoList from './TodoList'

// Importing UUID to generate random IDs
import { v4 as uuidv4 } from 'uuid'

// Local Storage key where the todos will be stored
const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {

  // Creating a state for todos, defaulting to an empty array
  const [todos, setTodos ] = useState([])

  // Creating a ref for the textbox content
  const todoNameRef = useRef()

  // Effect runs on every reload, it restores the todos from local storage
  useEffect(() => {
    // Get array from the local storage
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // Not working on restrict mode
    if (storedTodos) setTodos(storedTodos) 
  }, [])

  // Effect runs on every update to todos array, sets current content to local storage 
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  // Toggles the state of the toddo item
  function toggleTodo(id){
    // Copy content from todo list
    const newTodos = [...todos]
    // Finds the todo item using the ID
    const todo = newTodos.find(todo => todo.id === id)
    // Toggles the item's complete status
    todo.complete = !todo.complete
    // Update the todo list
    setTodos(newTodos)
  }

  // Adding a new todo item
  function handleAddTodo(e){
    // Get the textbox's content through its ref
    const name = todoNameRef.current.value
    // If textbox is empty, do nothing
    if (name === '') return
    // Add the new item
    setTodos(prevTodos => {
      // Return the array with the new item
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  // Clearing completed items
  function handleClearTodos(){
    // Filter out completed todos
    const newTodos = todos.filter(todo => !todo.complete)
    // Update todo list with old list
    setTodos(newTodos)
  }

  return (
    // Fragment, i.e no div
    <>
      <div className="bg-theme-darkest text-theme-white dark">
        <div className="min-h-screen container-block ">
          <div className="mx-auto gap-8 flex flex-col items-start justify-center max-w-screen-sm">

            <h1 className="head-h1">ToDo List</h1>

            {/* Display how many todos items there is */}
            <p className="body-2xl text-theme-lightest">
              <span className="font-bold text-theme-white">{todos.filter(todo=> !todo.complete ).length }</span> tasks left
            </p>

            <div className="flex w-full gap-4">
              
              {/* Textbox with ref */}
              <input ref={todoNameRef} type="text" className="input-text" />

              {/* Add todo item button */}
              <div class="flex-shrink-0">
                <button onClick={handleAddTodo} class="btn btn-md btn-filled btn-light">Add item</button>
              </div>
              
            </div>

            <div className="flex flex-col items-start gap-2">
              {/* Todo List with todos array and toggle function as props */}
              <TodoList todos={ todos } toggleTodo={toggleTodo} />
            </div>

            {/* Clear completed todos button */}
            <button onClick={handleClearTodos} class="btn btn-sm btn-line btn-light">Clear completed</button>
        
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
