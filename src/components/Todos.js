import React from 'react'
import {TodoItem} from "./TodoItem"

export const Todos = (props) => {
  return (
    <div className='container'>
        <h1 className='text-center my-3'>Todos List: </h1>
        {props.todos.map((todo)=>{
          return (
            <>
            <h4>Your todo list is here: </h4>
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
          </>
          )
        })}
    </div>
  )
}
