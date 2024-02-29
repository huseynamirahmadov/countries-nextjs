import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Population from './Population'
import TextClip from '../utils/TextClip'


const CountryCard = ({ country }) => {

    return (
        <Link href={`/country/${country.cca2}`}>
            <div className='border-2 border-black flex flex-col justify-between items-center p-4 cursor-pointer'>
                <div className='w-[250px] h-[150px]  relative'>
                    <Image className='object-cover' fill src={country?.flags?.png} alt={country?.flags?.alt} />
                </div>
                <div>
                    <TextClip size={20}>
                        {country?.name?.common}
                    </TextClip>
                </div>
                <div className='flex gap-1'>
                    <div>Population:</div>
                    <Population country={country} />
                </div>
            </div>
        </Link>
    )
}

export default CountryCard