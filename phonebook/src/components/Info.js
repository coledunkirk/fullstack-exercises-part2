import React from 'react'

const Info = ({ name, number, deletePerson }) => {
  return (
    <li>
      <div>{name} {number}</div>
      <button onClick={deletePerson}>delete</button>
    </li>
  )
}

export default Info