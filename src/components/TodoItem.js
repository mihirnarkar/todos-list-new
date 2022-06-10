import React from 'react'

export const TodoItem = ({todo}) => {
  return (
    <div>
      <br></br>
        <h2>{todo.title}</h2>
        <p>{todo.desc}</p>
    </div>
  )
}
