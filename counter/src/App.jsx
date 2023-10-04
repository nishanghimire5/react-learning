import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[counter, setCounter] = useState(0)
  

const addValue = () => {

setCounter(counter + 1)
}
const removeValue = ()=>{
  setCounter(counter - 1)
}

  return (
  
      <div>
      <h1> chai and react</h1>
      <h2> counter value:{counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br/>
      <br/>


      <button
      onClick={removeValue}>remove value</button>

        </div>
    
  )
}

export default App
