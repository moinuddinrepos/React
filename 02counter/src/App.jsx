import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(1)

  //creating function for adding value
  const addVal = () => {
   setCounter(counter + 1)

     // contition for not more then counter = 20
     if (counter == 20 ) {
      // console.log('max limit reach');
      alert('Max num limit is reached')
      setCounter(counter = 0)
    }
  }

  //creating function for decreassing value
  const removeVal = () => {
    setCounter(counter - 1)

      // conditio for val can't be negetive
      if (counter===0) {
        alert('Value shoud not be 0')
        setCounter(counter = 0)
      }

  }


  return (
    <>
      <h1>Hooks Learning</h1>
      <h4>useState</h4>
      <h2>Counter value: {counter}</h2>
      <button onClick={addVal}>Add value</button>
      <button onClick={removeVal}>Remove value</button>
    </>
  )
}

export default App
