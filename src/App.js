import './App.css';
import Header from './components/Header';
import { Todos } from './components/Todos';
import { Footer } from './components/Footer';

function App() {
  let name = "Mihir" // Creating varaibles in react

  let todos = [
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
  ]

  return (
    <>
    {/* Using Navbar from Header component*/}
    <Header title="| MyTodo |" searchBar={false}/>


    {/* Using Todos from Todos component */}
    <Todos todos={todos}/>


    {/* Using Footer from Footer compoennt*/}
    <Footer/>
    </>
  );
}

export default App;
