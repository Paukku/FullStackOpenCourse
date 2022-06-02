import { useState, useEffect } from 'react'
import Persons from './Persons'
import PersonForm from './PersonForm'
import Filter from './Filter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [foundNames, setFoundNames] = useState(persons)

  useEffect(() => {
    console.log('effect')
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }, [])

  const addName =(event) => {
    event.preventDefault()
    const sameName = persons.filter(person => person.name === newName).length

    if(sameName > 0) {
      alert(`${newName} is already added to phonebook`)
    }
    else{   
      const nameObject = {name: newName, number: newNumber}
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
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
      setFoundNames(results)
    }
    else {
      
      setFoundNames(persons)
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
      <Persons persons={foundNames}  />
    </div>
  )

}

export default App