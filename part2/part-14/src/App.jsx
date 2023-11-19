/* eslint-disable react/prop-types */
import axios from 'axios'
import { useState } from 'react'

const COUNTRIES_URL = 'https://restcountries.com/v3.1/all'

function Country ({ country }) {
  if (!country) return
  const { name: { common }, capital, population, languages, flags } = country
  return (
  <article>
    <header>
      <h2>{common}</h2>
      <p>capital {capital} </p>
      <p>population {population}</p>
    </header>
    <aside>
      <h3>Languages</h3>
      <ol>
        {
         Object.values(languages).map(lang => (
          <li key={lang}>{lang}</li>
         ))
        }
      </ol>
      <img src={flags?.svg} width={150} alt="" />
    </aside>
  </article>)
}

function App () {
  const [countries, setCountries] = useState([])

  const handleSearch = e => {
    e.preventDefault()
    const { elements } = e.currentTarget
    const { value } = elements.namedItem('search')
    searchCountries(value)
  }

  const searchCountries = value => {
    axios(COUNTRIES_URL)
      .then(response => {
        // console.log(response.data)
        const filter = response.data.filter(country => country.name.common.toLowerCase().includes(value.toLowerCase()))
        setCountries(filter)
      })
  }

  return (
    <form onSubmit={handleSearch}>
      <search role="search">
        <label htmlFor="find-countries">Find countries <input name='search' id='find-countries' type="search" /></label>
      </search>
      <div>
        {
          countries.length > 10
            ? 'Too many matches, specify another filter'
            : countries.length > 1
              ? countries.map(({ name }) => (
                <div key={name.common}>{name.common}</div>
              ))
              : <Country country={countries[0]} />
        }
      </div>
    </form>
  )
}

export default App
