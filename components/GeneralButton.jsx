import Link from 'next/link'
import React from 'react'

const GeneralButton = ({ children, route}) => {
  return (
    <Link href={route}>
      <button className={`border-2 border-black rounded-lg p-2`}>{children}</button>
    </Link>
  )
}

export default GeneralButton