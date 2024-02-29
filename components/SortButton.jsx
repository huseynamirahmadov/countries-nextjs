import Link from 'next/link'
import React from 'react'

const SortButton = ({ region }) => {

  return (
    <Link href={`/region/${region}`}>
      <button className='border-2 border-black rounded-lg p-2'>{region}</button>
    </Link>
  )
}

export default SortButton