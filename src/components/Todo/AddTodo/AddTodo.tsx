import React, { useContext, useRef, useState } from 'react'
import AppContext from '../../../Context'
import styles from './AddTodo.module.scss'

const AddTodo = () => {
  const { todos, setTodos } = useContext(AppContext)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const onClickAdd = () => {
    setTodos([
      ...todos,
      {
        id: Math.random(),
        name,
        description,
        checked: false,
      },
    ])
    setName('')
    setDescription('')
  }

  return (
    <div className={styles.form}>
      <div className={styles.inp}>
        <div className="">
          <p>name</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="">
          <p>description</p>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name=""
            id=""
          />
        </div>
      </div>
      <div className={styles.btn_wrapper}>
        <button onClick={onClickAdd} className={styles.btn}>
          Add
        </button>
      </div>
    </div>
  )
}

export default AddTodo
