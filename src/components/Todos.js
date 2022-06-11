import React from 'react'
import {TodoItem} from "./TodoItem"

export const Todos = (props) => {


  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  }

  return (
    <div className='container' style={myStyle}>
        {/* <h1 className='text-center my-3'>Todos List: </h1>
        {/* {props.todos.length===0? "No todos to display": */}
        {/* props.todos.map((todo)=>{
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        }) */}
        {/* } } */}
        <h1 className="text-center my-3">Todos List: </h1>
        {props.todos.length===0? <span className="badge text-bg-secondary"><h4>No todos to display! Add some</h4></span>:
        props.todos.map((todo)=>{
          return(
            <>
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
          </>
          )
        })
        }
    </div>
  )
}
