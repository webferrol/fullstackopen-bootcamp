import { useState } from 'react'

// import initValue from './libs/persons'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filters from './components/Filters'
import usePersons from './hooks/usePersons'

function App () {
  const [searchValue, setSearchValue] = useState('')

  const { persons, addPerson } = usePersons()

  const handleSearch = value => {
    setSearchValue(value)
  }

  const handleNewPerson = (newName, newPhone) => {
    const isPerson = person => person.name.toLocaleLowerCase() === newName.toLocaleLowerCase()
    if (persons.some(isPerson)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    addPerson({ id: crypto.randomUUID(), name: newName, number: newPhone })
  }

  const filterPersons = () => persons.filter(
    person => person.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  )

  return (
    <main className="container">
      <h1>Phonebook</h1>
      <Filters onSearch={handleSearch} />
      <PersonForm onNewPerson={handleNewPerson} />
      <Persons persons={filterPersons()} />
    </main>
  )
}

export default App
