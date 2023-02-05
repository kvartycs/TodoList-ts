import React, { useState } from 'react'
import Header from './components/Header/Header'
import AddTodo from './components/Todo/AddTodo/AddTodo'
import TodoList from './components/Todo/TodoList/TodoList'
import AppContext from './Context'

const DEFAULT_TODO_LIST = [
  { id: 1, name: 'task 1', description: 'description 1', checked: false },
  { id: 2, name: 'task 2', description: 'description 2', checked: false },
  { id: 3, name: 'task 3', description: 'description 3', checked: false },
]

function App() {
  const [todos, setTodos] = useState(DEFAULT_TODO_LIST)

  return (
    <AppContext.Provider value={{ todos, setTodos }}>
      <div className="App">
        <div className="wrapper">
          <Header></Header>
          <AddTodo></AddTodo>
          <TodoList></TodoList>
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App
