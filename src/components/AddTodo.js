import React, { useState } from 'react'

export const AddTodo = (props) => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")

  const submit = (e) =>{
    e.preventDefault()
    if(!title || !desc){
      alert("Title or Description cannot be blank")
    }
    else{
    props.addTodo(title,desc)
    // settitle[""]
    // setdesc[""]
    }
  }
  return (
    <div>
    <div className="containerTodo">
    <h2>Add your todos here: </h2>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="todoTitle" className="form-label">Enter Title :</label>
          <input type="text" className="form-control" value={title} onChange={(e)=>{settitle(e.target.value)}} id="todoTitle" aria-describedby="todoTitle" />
        </div>
        <div className="mb-3">
          <label htmlFor="todoDesc" className="form-label">Enter description  :</label>
          <textarea className="form-control" value={desc} onChange={(e)=>{setdesc(e.target.value)}} id="todoDesc" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-success">Add</button>
      </form>
    </div>

    </div>
  )
}
