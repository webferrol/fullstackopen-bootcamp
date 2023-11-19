import { useEffect, useState } from 'react'
import axios from 'axios'

export default function usePersons () {
  const [persons, setPersons] = useState([])

  const addPerson = payload => setPersons([...persons, payload])

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(
        response => {
          if (response.status === 200) setPersons(response.data)
        }
      )

    return () => {}
  }, [])

  return {
    persons,
    addPerson
  }
}
