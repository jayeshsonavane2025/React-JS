import logo from './logo.svg';

import './App.css';
import Header from './MyComponents/Header';
 
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
function App() {
  let myVariable = 345;
  return (
    <>
      <Header title="My Todos List" searchBar={true} /> 
      <Todos />
      <Footer/> 
      </>
     );
}

export default App;
