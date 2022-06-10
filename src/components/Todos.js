import React from 'react'
import {TodoItem} from "./TodoItem"

export const Todos = (props) => {
  return (
    <div className='container'>
        <h1>Todos List: </h1>
        <TodoItem todo={props.todos[0]}/>
    </div>
  )
}
