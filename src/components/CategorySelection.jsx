import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CategorySelection = () => {
    const [categories, setCategories] = useState(['Food', 'Coding', 'Work', 'Other'])
  
    return (
        <>
            <h2>Please select a category:</h2>
            <ul>
                {categories.map((cat, index) => (
                    <li key={index}>
                        <Link to='/entry/new'>{cat}</Link>
                    </li>
                ))}
            </ul>
        </>
  )
}

export default CategorySelection