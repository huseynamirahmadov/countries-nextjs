import React from 'react'
import CountryCard from './CountryCard'

const ShowCountries = async () => {

    const fetchCountries = async () => {
        const res = await fetch('https://restcountries.com/v3.1/all')
        return res.json()
    }
    const data = await fetchCountries()

  return (
    <div className='flex flex-wrap justify-center items-center gap-2 py-4'>
        {
            data?.map((country, i) => {
                return(
                    <CountryCard key={i} country={country} />
                )
            })
        }
    </div>
  )
}

export default ShowCountries