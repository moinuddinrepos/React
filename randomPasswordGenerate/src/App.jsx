import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

    //Ref Hook for copying text
    const passwordRef = useRef(null)

    const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (num) {
      str += "0123456789"
    }
    if (character) {
      str += "@#$%&*"
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      // console.log(char);
      pass += str.charAt(char)
    }
    setPassword(pass)
      }, [length,num,character, setPassword])

    //optimization for copyText
    const copyPassword = useCallback(() => {
      window.navigator.clipboard.writeText(password)
      passwordRef.current?.select()
      // passwordRef.current?.setSelectionRange(0,4) // to show select text upto 4
  }, [password])

  //useEffect

  useEffect(() => {
    passwordGenerator()
  }, [length, num, character, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-4 my-8 text-black bg-gray-400'>
      <h1 className='text-3xl uppercase text-center p-4 text-black'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-black'>
          <input className='outline-none w-full p-3 m-2 rounded-lg' readOnly type="text" name="" 
          value={password} ref={passwordRef} placeholder='Password' />
          <button onClick={copyPassword} className='outline-none text-white shrink-0 px-3 py-0.5 hover:bg-slate-500 hover:rounded-lg hover:m-2 duration-300'>COPY</button>
        </div>
        <div className='flex text-sm gap-x-2'>
        <div className='bg-black text-white flex justify-center gap-4 p-3 rounded-lg mb-4 '>
        <div className='flex items-center gap-x-1'>
            <input onChange={(e) => {
              setLength(e.target.value)
            }} className='cursor-pointer' type="range" min={8} max={20} value={length} />
            <label>Length: {length}</label>
          </div>
          <div>
            <input type="checkbox" defaultChecked={num} id='numInput' onChange={() => {
              setNum((prev) => !prev)
            }} />
            <label htmlFor="numInput"> Numbers</label>
          </div>
          <div className=''>
            <input onChange={() => {
              setCharacter((prev) => !prev)
            }} type="checkbox" id='charInput' defaultChecked={character} />
            <label htmlFor="charInput"> Characters</label>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
