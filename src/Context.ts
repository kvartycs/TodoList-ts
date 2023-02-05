import { createContext } from 'react'

type TodoItem = {
  id: number
  name: string
  description: string
  checked?: boolean
}

interface IApp {
  todos: TodoItem[]
  setTodos?: any
}

const AppContext = createContext<IApp>({ todos: [] })
export default AppContext
