import React, { useState, useContext } from 'react'
import AppContext from '../../../Context'
import TodoItem from '../TodoItem/TodoItem'
import styles from './TodoList.module.scss'

interface ITodoItem {
  id: number
  name: string
  description: string
  checked: boolean
}

const TodoList = () => {
  const { todos } = useContext(AppContext)

  return (
    <div className={styles.list}>
      <h3>{todos.length} task(s) remaining</h3>
      {todos.map((todo: any) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.name}
          description={todo.description}
          checked={todo.checked}
        ></TodoItem>
      ))}
    </div>
  )
}

export default TodoList
