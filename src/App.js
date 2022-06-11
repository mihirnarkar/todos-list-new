import './App.css';
import Header from './components/Header';
import { Todos } from './components/Todos';
import { Footer } from './components/Footer';
import { AddTodo } from './components/AddTodo';  //always use capital while naming otherwise it will not work
import React,{useState} from 'react'

function App() {
  let initTodo
  if(localStorage.getItem("todos")===null){
    initTodo = []
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    console.log("I am onDelete",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("todos",JSON.stringify(todos))
  }

  const addTodo = (title,desc) =>{
    console.log("I am adding this todo",title,desc);
    let sno
    if(todos.length==0){
      sno = 0
    }
    else{
      sno = todos[todos.length-1].sno+1
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc : desc,
    }
    setTodos([...todos,myTodo])
    console.log(myTodo)

    localStorage.setItem("todos",JSON.stringify(todos))
  }

  const [todos, setTodos] = useState(initTodo)

  return (
    <>
    {/* Using Navbar from Header component*/}
    <Header title="| MyTodo |" searchBar={false}/>


    {/* using forms to add todos */}
    <AddTodo addTodo={addTodo} />

    <div className="b-example-divider"></div>

    {/* Using Todos from Todos component */}
    <Todos todos={todos} onDelete={onDelete}/>


    {/* Using Footer from Footer compoennt*/}
    <Footer/>
    </>
  );
}

export default App;
