import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
  return (
    <div>
      <br></br>
        <h2>{todo.title}</h2>
        <p>{todo.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Remove</button>
        <br></br>
    </div>
    
  )
}
