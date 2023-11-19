/* eslint-disable react/prop-types */
export default function Persons ({ persons }) {
  return (
    <section>
    <h2>Numbers</h2>
    {
      persons.map(person => (
        <div key={crypto.randomUUID()}>{person.name} {person?.phone}</div>
      ))
    }
  </section>
  )
}
