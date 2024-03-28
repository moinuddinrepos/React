import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h1 className='p-4 bg-gray-500'>React Router</h1>
    <Header/>
    <Outlet/>
    <Footer/>
   </>
  )
}

export default App
