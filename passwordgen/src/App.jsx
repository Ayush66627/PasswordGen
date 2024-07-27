
import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
      const [length, setLength] = useState(8)
      const [password, setpassword] = useState("")
      const [number, setNumber] = useState(false)
      const [character, setCharacter] = useState(false)

      const passwordRef = useRef(null)


     const passwordgen = useCallback(() => {
          let pass = ""
          let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
       
          if (number) str += "0123456789"
          if (character) str += "!@#$%^&*()_+"

          for (let i = 1; i <= length; i++) {
              let char = Math.floor(Math.random() * str.length + 1)
              pass += str.charAt(char)
          }
             
              setpassword(pass)

     }, [length, character, number, setpassword])
        
       const copypassword = useCallback(()=> {
        passwordRef.current.select()
        passwordRef.current.setSelectionRange()
        window.navigator.clipboard.writeText(password)
       }, [password])

     useEffect(()=>{
       passwordgen()
     }, [length, character. number, passwordgen])
        
   return(
    <>
       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-3 py-3 my-10 text-black bg-slate-900'>
        <h1 className='text-white text-center my-3 text-lg'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text'
          value = {password}
          className='outline-none w-full py-2 px-3'
          placeholder='password'
          readOnly
          ref = {passwordRef}
          />


          <button onClick={copypassword} className='outline-none bg-blue-900 px-3 py-0.5 shrink-0'>Copy</button>

        </div>

        <div className='flex text-sm gap-x-2'>

          <div className='flex items-center gap-x-1'>

            <input  type='range' min={6} max={50} value={length}

            className='cursor-pointer'

            onChange={(e)=> {setLength(e.target.value)}}

            />
            <label className='text-orange-400 mx-3 cursor-pointer'>Length: {length}</label>

          </div>
          <div className='flex items-center gap-x-1'>

            <input className='text-orange-400 cursor-pointer'

            type="checkbox" defaultChecked={number} id="numberInput" onChange={()=>{

              setNumber((prev) => !prev)

            }}/>
            <label className='text-orange-400 cursor-pointer' htmlFor="numberInput">Numbers</label>

          </div>

          <input className='text-orange-400 cursor-pointer'


            type="checkbox" defaultChecked={character} id="characterInput" onChange={()=>{

              setCharacter((prev) => !prev)
            }}/>

            <label className='text-orange-400 cursor-pointer' htmlFor="characterInput">Characters</label>

        </div>
       </div>
      
    </>
  )
}

export default App
