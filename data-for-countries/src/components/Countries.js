import React from 'react'
import Weather from './Weather'


const Countries = ({ countries, countrySearch, setCountrySearch }) => {
  let countriesToShow = countrySearch
  ? countries.filter(country => country.name.common.toLowerCase().includes(countrySearch.toLowerCase()))
  : []

  const handleShowButton = (event) => {
    setCountrySearch(countriesToShow[event.target.value].name.common)
  }

  if (countriesToShow.length > 10) {
    return (
      <div>
        Too many matches
      </div>
    )
  }
  if (countriesToShow.length === 1) {
      let getCapital = countriesToShow.map(country => 
        country.capital[0])
      let getCode = countriesToShow.map(country => 
        country.cca2)
    return (
      <div>
        {countriesToShow.map(country => 
          <div key={country.name.common}>
            <h1>{country.name.common}</h1> 
            <div>Capital: {country.capital}</div>
            <div>Population: {country.population}</div>
            <h2>Languages</h2>
            <ul>
              {Object.values(country.languages).map(language =>
                <li key={language}>{language}</li>
              )}
            </ul>
            <img src={country.flags.png} alt='' />
          </div>  
        )}
        <Weather city={getCapital[0]}
                 countryCode={getCode[0]}
                 />
      </div>
    )
  }
  return (
    <ul>
      {countriesToShow.map((country, index) => 
        <li key={country.name.common}>
          {country.name.common} 
          <button value={index} onClick={handleShowButton}>show</button>
        </li> 
      )}

    </ul>
  )
}


export default Countries