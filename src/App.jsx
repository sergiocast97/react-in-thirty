// Importing react and necessary hooks
import { useState, useEffect } from 'react'

// Importing necessary components
import { NewTodoForm } from './NewTodoForm'
import { TodoList } from './TodoList'

export default function App(){

  // Creating a state for todos
  const [todos, setTodos] = useState(() => {

    // Retrieve todo list from Local Storage
    const localValue = localStorage.getItem("ITEMS")

    // If there's nothing, set to empty array
    if(localValue === null) return []

    // If local storage array is available, use it
    return JSON.parse(localValue)

  })

  // Effect runs on every update to todos array 
  useEffect(() => {
    // Sets current content to local storage
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  // Effect runs on every update to todos array 
  useEffect(() => {
    // Returns the number of uncompleted tasks left
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  // Adding a new todo item
  function addTodo(title) {
    // Add the new item
    setTodos((currentTodos) =>{
      // Return the array with the new item
      return [
        // Old array is destructured
        ...todos, 
        // New item is added
        { id: crypto.randomUUID(), title, completed: false, },
      ]
    })
  }

  // Toggles the state of the toddo item
  function toggleTodo(id, completed){
    setTodos(currentTodos=> {
      return currentTodos.map(todo => {
        if (todo.id === id){
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  // Delete individual items
  function deleteTodo(id){
    setTodos(currentTodos => {
      // Filter out selected ite, return list without it
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  // Clearing completed items
  function deleteCompletedTodos(){
    setTodos(currentTodos => {
      // Filter out completed todos, return list without them
      return currentTodos.filter(todo =>!todo.completed)
    })
  }

  // TODO add drag and drop to reorder

  return (
    // Fragment, i.e no div
    <>
      <div className="bg-theme-darkest text-theme-white dark">
        <div className="min-h-screen container-block ">
          <div className="flex flex-col items-start justify-center max-w-screen-sm gap-8 mx-auto">

            <h1 className="head-h1">ToDo List</h1>

            {/* Display how many todos items there is */}
            <p className="body-2xl text-theme-lightest">
              <span className="font-bold text-theme-white">{todos.filter(todo=>!todo.completed).length}</span> tasks left
            </p>

            {/* New Item Form */}
            <NewTodoForm onSubmit={addTodo} />

            {/* Todo List with todos array and toggle function as props */}
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

            {/* Clear completed todos button */}
            <button onClick={deleteCompletedTodos} className="btn btn-sm btn-line btn-light">Clear completed</button>

          </div>
        </div>
      </div>
    </>
  )
}