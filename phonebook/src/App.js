import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import Filter from './components/Filter'
import People from './components/People'
import Notification from './components/Notification'
import peopleService from './services/people'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [messageClass, setMessageClass] = useState('added')

  useEffect(() => {
    peopleService
      .getAll()
      .then(initialPeople => {
        setPersons(initialPeople)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification 
        message={message}
        messageClass={messageClass}
      />
      <Filter 
        filter={filter}
        setFilter={setFilter}
      />
      <h2>add a new</h2>
      <Form 
        persons={persons} 
        setPersons={setPersons} 
        newName={newName} 
        setNewName={setNewName} 
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        setMessage={setMessage}
        setMessageClass={setMessageClass}
      />
      <h2>Numbers</h2>
      <People 
        persons={persons}
        filter={filter}
        setPersons={setPersons}
      />
    </div>
  )
}

export default App
