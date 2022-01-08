import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Find from './components/Find'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countrySearch, setCountrySearch] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])


  return (
    <div>
        <Find 
          countrySearch={countrySearch}
          setCountrySearch={setCountrySearch}
        />
        <Countries 
          countries={countries}
          countrySearch={countrySearch}
          setCountrySearch={setCountrySearch} 
        />
    </div>
  )
}

export default App
