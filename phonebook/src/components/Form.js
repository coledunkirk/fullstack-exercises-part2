import React from 'react'
import peopleService from '../services/people'

const Form = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber, setMessage, setMessageClass }) => {
  const updateInfo = (personsObject) => {
    if (window.confirm(
      `${personsObject.name} is already added to the phonebook. Do you want to replace the old number with a new one?`
      )) {
      const id = persons.filter(person => person.name.toLowerCase() === newName.toLowerCase())[0].id
      peopleService
        .update(id, personsObject)
        .then(updatedPerson => {
          setPersons(persons.map(person => person.id !== id ? person : updatedPerson))
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          setMessageClass('error')
          setMessage(`${personsObject.name} has already been removed from the server`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }
  
  const addInfo = (event) => {
    event.preventDefault()
    const personsObject = {
      name: newName,
      number: newNumber
    }
    console.log(personsObject)
    personsObject.name === '' || personsObject.number === ''
    ? alert('Please enter a name and number')
    : persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    ?  updateInfo(personsObject)
    : peopleService
        .create(personsObject)
        .then(newPerson => {
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNumber('')
          setMessageClass('added')
          setMessage(
            `Added ${newPerson.name}`
          )
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <form onSubmit={addInfo}>
      <div>
        name: <input 
            value={newName}
            onChange={handleNameChange}
          />
      </div>
      <div>
        number: <input 
              value={newNumber}
              onChange={handleNumberChange}
            />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
  </form>
  )
}

export default Form