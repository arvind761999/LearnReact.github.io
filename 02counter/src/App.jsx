import { useState } from 'react' // Hook lane ke liye we have to import this library
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setCounter] = useState(15)

//  let counter = 15
  
const addValue = () => {
  // if(counter < 20){
  //   counter++;
  //   setCounter(counter);
  // }

 
    // counter++;
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
   

}

const removeValue = () => {
  if(counter > 0){
    counter--;
  setCounter(counter);
 
}
}

  return (
    <>
    <h1>Arvind Singh Thakur</h1>
    <h2>Counter value : {counter} </h2>
    <button onClick={addValue}>
    Add Value{counter}
    </button>
    <br />
    <button onClick = {removeValue}>Remove Value{counter}</button>

    <p>Footer {counter}</p>
    </>
  )
}

export default App
