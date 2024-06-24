import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import Layout from './Pages/Layout.jsx'
import Home from './Pages/Home.jsx'
import State from './Pages/State.jsx'
import Effect from './Pages/Effect.jsx'
import Ref from  './Pages/Ref.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>} />    
          <Route path='/useState' element={<State/>} />
          <Route path='/useEffect' element={<Effect/>} />
          <Route path='/useRef' element={<Ref/>} />  
        </Route>
      </Routes>

      
    </>
  )
}

export default App


{/* <div>
<a href="https://vitejs.dev" target="_blank">
  <img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank">
  <img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div>
<h1>Vite + React</h1>
<div className="card">
<button onClick={() => setCount((count) => count + 1)}>
  count is {count}
</button>
<p>
  Edit <code>src/App.jsx</code> and save to test HMR
</p>
</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p>
//  */}