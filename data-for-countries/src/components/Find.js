import React from 'react'

const Find = ({ countrySearch, setCountrySearch }) => {
  const handleCountrySearch = (event) => {
    setCountrySearch(event.target.value)
  }

  return (
    <div>
      Find Countries <input 
                      value={countrySearch}
                      onChange={handleCountrySearch}
                    />
    </div>
  )
}

export default Find