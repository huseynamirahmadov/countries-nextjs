import React from 'react'
import Sort from './Sort'

const Header = async () => {

    const fetchCountries = async () => {
        const res = await fetch('https://restcountries.com/v3.1/all')
        return res.json()
    }
    const data = await fetchCountries()

  return (
    <header>
        <h1 className='text-center py-4 font-bold text-red-600 text-3xl'>Countries App</h1>
        <Sort data={data} />
    </header>
  )
}

export default Header