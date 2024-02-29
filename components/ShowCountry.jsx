import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaMapMarkedAlt } from "react-icons/fa"

const ShowCountry = async ({ params }) => {

    const fetchCountry = async () => {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${params.country}`)
        return res.json()
    }

    const data = await fetchCountry()

    return (
        <div className='my-5 border-black border-y-2'>
            {
                data.map((country, i) => {
                    return (
                        <div className='flex flex-col items-center' key={i}>
                            <div className='flex justify-center pt-4'>
                                <Image width={300} height={200} alt={country?.flags?.alt} src={country?.flags?.png} />
                            </div>
                            <div className='text-2xl pt-4'>
                                <span className='font-bold'>Official name:</span> {country?.name?.official}
                            </div>
                            <div className='text-2xl pt-4'>
                                <span className='font-bold'>Common name:</span> {country?.name?.common}
                            </div>
                            <div className='text-lg pt-4'>
                                {
                                    country?.unMember ? 'A member of United Nations' : 'Not a member of the United Nations'
                                }
                            </div>
                            <div className='pt-4'>
                                <span className='font-bold'>Region: </span> {country?.region}
                            </div>
                            <div className='pt-4'>
                                <span className='font-bold'>Subregion: </span> {country?.subregion}
                            </div>
                            <div className='pt-4'>
                                <span className='font-bold'>Population: </span> {country?.population}
                            </div>
                            <div className='pt-4'>
                                <Link target='_blank' href={country?.maps?.googleMaps}>
                                    <FaMapMarkedAlt size={50} />
                                </Link>
                            </div>
                            <div className='py-4'>
                                <div className='font-bold text-2xl text-center'>Borders</div>
                                <div className='flex gap-2 justify-center items-center'>
                                {
                                    country?.borders ? country?.borders?.map((border, i) => {
                                        return (
                                            <div className='' key={i}>
                                                <Link href={`/country/${border}`}>{border}</Link>
                                            </div>
                                        )
                                    }) : 'There are no borders'
                                }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShowCountry