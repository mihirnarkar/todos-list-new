import './App.css';
import Header from './components/Header';
import { Todos } from './components/Todos';
import { Footer } from './components/Footer';
import React,{useState} from 'react'

function App() {
  let name = "Mihir" // Creating varaibles in react

  const onDelete = (todo) => {
    console.log("I am onDelete",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get the job done1"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the market to get the job done2"
    },
    {
      sno: 3,
      title: "Go to the shop",
      desc: "You need to go to the market to get the job done3"
    }
  ])

  return (
    <>
    {/* Using Navbar from Header component*/}
    <Header title="| MyTodo |" searchBar={true}/>


    {/* Using Todos from Todos component */}
    <Todos todos={todos} onDelete={onDelete}/>


    {/* Using Footer from Footer compoennt*/}
    <Footer/>
    </>
  );
}

export default App;
