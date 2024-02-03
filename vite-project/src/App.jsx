//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import './App.css'
import Login from './login'; //-----

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className = 'text-white h-[100vh] flex justify-center items-center bg-cover'>
      <Routes>
        <Route path='login' element={ <Login/>}/>
        <Route path='Register' element={ <Register/>}/>
      </Routes>
    </div>
  )
}

export default App
