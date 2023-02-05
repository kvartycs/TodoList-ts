import { log } from 'console'
import React, { useContext, useState } from 'react'
import AppContext from '../../../Context'
import styles from './TodoItem.module.scss'

interface ItemProps {
  title: string
  description: string
  id: number
  checked: boolean
}

const TodoItem = ({ title, description, checked, id }: ItemProps) => {
  const { setTodos, todos } = useContext(AppContext)
  const [todoIdForEdit, setTodoIdForEdit] = useState<null | number>(null)
  const [titleValue, setTitleValue] = useState('')
  const [descriptionValue, setDescriptionValue] = useState('')

  const onClickDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const onClickEdit = (id: number) => {
    setTodoIdForEdit(id)
  }
  const onClickSave = (id: number) => {
    const newTodo = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.name = titleValue
        todo.description = descriptionValue
      }
      return todo
    })
    setTodos(newTodo)
    setTodoIdForEdit(null)
  }

  const onClickChecked = () => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) return { ...todo, checked: !todo.checked }
        return todo
      })
    )
  }
  return todoIdForEdit === id ? (
    <div className={styles.item_edit}>
      <div className="">
        <p>name</p>
        <input
          type="text"
          placeholder="name"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
      </div>
      <div className="">
        <p>description</p>
        <input
          type="text"
          placeholder={description}
          value={descriptionValue}
          onChange={(e) => setDescriptionValue(e.target.value)}
        />
      </div>
      <div className="">
        <button className={styles.save} onClick={() => onClickSave(id)}>
          Save
        </button>
      </div>
    </div>
  ) : (
    <div className={styles.item}>
      <span
        style={checked ? { textDecorationLine: 'line-through' } : {}}
        className={styles.title}
        onClick={onClickChecked}
      >
        {title}
      </span>
      <p>{description}</p>
      <div className={styles.btns}>
        <button className={styles.edit} onClick={() => onClickEdit(id)}>
          Edit
        </button>
        <button className={styles.delete} onClick={() => onClickDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default TodoItem
