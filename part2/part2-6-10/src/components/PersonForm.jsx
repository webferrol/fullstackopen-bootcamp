import { useState } from 'react'

/* eslint-disable react/prop-types */
export default function PersonForm (
  {
    onNewPerson
  }) {
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleChange = (setValue) => ({ currentTarget }) => {
    setValue(currentTarget.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!newName) return
    onNewPerson(newName, newPhone)
  }

  return (
    <form onSubmit={handleSubmit}>
    <h2 className="main-title title">Add a new</h2>
      <fieldset className="fields" aria-label="Fields" >
        <div className="field">
          <label htmlFor="name">
            name:
            <input
              onChange={handleChange(setNewName)}
              value = {newName}
              id="name"
              required
              type="text" />
          </label>
        </div>
        <div className="field">
          <label htmlFor="phone">
            Phone:
            <input
              onChange={handleChange(setNewPhone)}
              value = {newPhone}
              id="phone"
              type="tel" />
          </label>
        </div>
      </fieldset>
      <button type="submit">add</button>
    </form>
  )
}
