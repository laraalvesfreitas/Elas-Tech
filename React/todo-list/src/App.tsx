import { Header } from './components/Header/Header';
import "./styles/global.css"
import { Tasks } from './components/Tasks/Tasks';
import { Refs } from './components/Concepts/Refs';
import { Memoization } from './components/Concepts/Memoization';

function App() {
  return (
    
    <>
    <Header/>
    <Tasks/>

    {/* <Refs/> */}
    <Memoization financialData={{incomes: [50, 30, 40], outcomes: [80,90,10]}}/>
    
    </>
   
  );
}

export default App;
