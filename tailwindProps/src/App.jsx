import { useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {
  const [color, setColor] = useState('#123321')
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <h1 className='p-4 font-serif text-4xl uppercase text-center'>Click below buttons to change background colors</h1>
       <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white p-2 rounded-3xl'>
          <button onClick={() => {setColor('#ba5b5b')}} className='outline-none px-4 rounded-full text-white shadow-lg'style={{background:'red'}}>Red</button>
          <button onClick={() => {setColor('#67a0d6')}} className='outline-none px-4 rounded-full text-white shadow-lg'style={{backgroundColor:'blue'}}>Blue</button>
          <button onClick={() => {setColor('#73a36d')}} className='outline-none px-4 rounded-full text-white shadow-lg'style={{backgroundColor:'green'}}>Green</button>
          <button  onClick={() => {setColor('#dce0dc')}} className='outline-none px-4 rounded-full text-black shadow-lg'style={{backgroundColor:'white'}}>White</button>
          <button  onClick={() => {setColor('#d19671')}} className='outline-none px-4 rounded-full text-white shadow-lg'style={{backgroundColor:'orange'}}>Orange</button>
          <button  onClick={() => {setColor('#30302f')}} className='outline-none px-4 rounded-full text-white shadow-lg'style={{backgroundColor:'black'}}>Black</button>
          <button  onClick={() => {setColor('#d095db')}} className='outline-none px-4 rounded-full text-white shadow-lg'style={{backgroundColor:'violet'}}>Violet</button>
          <button  onClick={() => {setColor('#87a4c7')}} className='outline-none px-4 rounded-full text-white shadow-lg'style={{backgroundColor: '#5DE2E7'}}>SkyBlue</button>
        </div>
      </div>
    </div>
     
    
  )
}

export default App
