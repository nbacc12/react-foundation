import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import Layout from './Pages/Layout.jsx'
import Home from './Pages/Home.jsx'
import State from './Pages/State.jsx'
import Effect from './Pages/Effect/Effect_page.jsx'
import Ref from  './Pages/Ref.jsx'
import Context from './Pages/Context.jsx'
import Reducer from './Pages/Reducer.jsx'
import Callback from './Pages/Callback.jsx'
import Memo from './Pages/Memo.jsx'

import Fetch from './Pages/Fetch/Fetch_page.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>} />    
          <Route path='/useState' element={<State/>} />
          <Route path='/useEffect' element={<Effect/>} />
          <Route path='/useRef' element={<Ref/>} />  
          <Route path='/useContext' element={<Context/>} /> 
          <Route path='/useReducer' element={<Reducer/>} /> 
          <Route path='/useCallback' element={<Callback/>} /> 
          <Route path='/useMemo' element={<Memo/>} /> 
          <Route path='/fetch' element={<Fetch />} /> 
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