'use client'
import React from 'react'
import CountUp from 'react-countup'

const Population = ({country}) => {
  return (
    <CountUp start={0} end={country?.population} duration={2.5} />
  )
}

export default Population