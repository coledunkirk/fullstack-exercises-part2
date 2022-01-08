import React from 'react'
import Info from './Info'
import peopleService from '../services/people'

const People = ({ persons, filter, setPersons }) => {
  const handleDelete = id => {
    if (window.confirm('Are you sure you want to delete this person?')) {
      peopleService
        .deletePerson(id)
      setPersons(persons.filter(person => person.id !== id))
    }
  }

  const personsToShow = filter
  ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  : persons
  
  return (
    <ul>
      {personsToShow.map(person =>
        <Info 
          key={person.name} 
          name={person.name} 
          number={person.number} 
          deletePerson={() => handleDelete(person.id)}
        />
      )}
  </ul>
  )
}

export default People