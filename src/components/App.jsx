import React, { useState } from 'react'
import CategorySelection from './CategorySelection'
import Home from './Home'
import NewEntry from './NewEntry'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'

const App = () => {
  const [entries, setEntries] = useState([])

  return (
    <>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category' element={<CategorySelection />} />
            <Route path='/entry/new/:category' element={<NewEntry entries={entries} setEntries={setEntries }/>} />
            <Route path='*' element={<h4>Page not found!</h4>} />
          </Routes>
        </BrowserRouter>
        {/* <Home />
        <CategorySelection />
        <NewEntry /> */}
    </>
  )
}

export default App