import './App.css';
import { Header } from "./Components/Header"; // também poderia ficar entre aspas simples
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Header/>
        <main>
          <Home/>
        </main>
      
      <h4> Ok! Operando normal.</h4>
    </>
  );
}

export default App;
