import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Todos } from './components/Todos';
import { Footer } from './components/Footer';

function App() {
  let name = "Mihir" // Creating varaibles in react
  return (
    <>
    {/* Using Navbar from Header component*/}
    <Header/>


    {/* Using Todos from Todos component */}
    <Todos/>


    {/* Using Footer from Footer compoennt*/}
    <Footer/>
    </>
  );
}

export default App;
