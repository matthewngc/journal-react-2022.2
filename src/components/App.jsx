import React, { useState } from 'react'
import CategorySelection from './CategorySelection'
import Home from './Home'
import NewEntry from './NewEntry'
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import ShowEntry from './ShowEntry'

const seedEntries = [
  { category: 'Food', content: 'Pizza is awesome!'},
  { category: 'Work', content: 'Another day, another dollar'},
  { category: 'Coding', content: 'React is cool!'}
]

const App = () => {
  const [entries, setEntries] = useState(seedEntries)
  const nav = useNavigate()

  // HOC (higher-order commponents)
  const ShowEntryWrapper = () => {
    const { id } = useParams()
    const the_entry = entries[id]
    return the_entry ? <ShowEntry entry={the_entry} /> : <h4>Entry not found!</h4>
  }

  const addEntry = (category, content) => {
    const id = entries.length
    // Add a new entry
    const newEntry = {
      category: category,
      content: content
    }
    setEntries([...entries, newEntry])
    nav(`/entry/${id}`)
  }

  return (
    <>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home entries={entries} />} />
            <Route path='/category' element={<CategorySelection />} />
            <Route path="/entry/:id" element={<ShowEntryWrapper />} />
            <Route path='/entry/new/:category' element={<NewEntry addEntry={addEntry}/>} />
            <Route path='*' element={<h4>Page not found!</h4>} />
          </Routes>
    </>
  )
}

export default App