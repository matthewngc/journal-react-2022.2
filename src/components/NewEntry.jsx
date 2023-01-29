import React from 'react'
import { useParams } from 'react-router-dom'

const NewEntry = () => {
  const params = useParams()
  console.log(params)
  return (
    <h2>New Entry in  category</h2>
  )
}

export default NewEntry