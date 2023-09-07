import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserContext } from './UserContext'
import Home from './components/Home'
import Update from './components/Update'


function App() {
  const [value, setValue] = useState()

  return (
    <BrowserRouter>
      <UserContext.Provider value={{value, setValue}}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/update' element={<Update/>}/>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
