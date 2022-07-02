import { useState, useEffect } from 'react'
import Persons from './Persons'
import PersonForm from './PersonForm'
import Filter from './Filter'
import axios from 'axios'
import NumberService from './NumberService'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')


  useEffect(() => {
    NumberService
    .getAll()
    .then(phoneNumbers => {
      setPersons(phoneNumbers)
    })
  }, [])

  const addName =(event) => {
    event.preventDefault()
    const sameName = persons.filter(person => person.name === newName).length
    

    if(sameName > 0) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const nameObject = {name: newName, number: newNumber}
        const id = persons.filter((person) => person.name === newName)
        .map(person => person.id)

        NumberService
        .update(id, nameObject)
        .then(phoneNumbers => {
          console.log(newName)
          setPersons(persons.map(person => person.name !== newName ? person : phoneNumbers))
          setNewName('')
          setNewNumber('')
        })
      }
    }
    else{   
      const nameObject = {name: newName, number: newNumber}

      NumberService
    .create(nameObject)
    .then(returnedNumbers => {
      setPersons(persons.concat(returnedNumbers))
      setNewName('')
      setNewNumber('')
    })
    }
  }

  const deleteName = (event) => {
    const value = parseInt(event.target.value)    
    const name = persons.filter(search => search.id === value).map(filt => filt.name)
    
    if(window.confirm(`Delete ${name}?`)) {
      NumberService.deletePerson(value)
      .then(() => {
        setPersons(persons.filter((person) => person.id !== value))
      })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
    
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    const keyword = event.target.value
    setFilterName(keyword)
    
    
    if(keyword !== '') {
      const results = persons.filter((name) => {
        return name.name.toLowerCase().startsWith(keyword.toLowerCase())
      })
      setPersons(results)
    }
    else {
      NumberService
      .getAll()
      .then(returnedNumbers => {
        setPersons(returnedNumbers)

      })
    }
    

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Filter</h3>
      <Filter filterName={filterName} handleFilter={handleFilter}/>
      <h3>Add a new person</h3>
     <PersonForm newName = {newName} newNumber={newNumber} addName={addName} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons persons={persons} deleteName={deleteName}  />
    </div>
  )

}

export default App