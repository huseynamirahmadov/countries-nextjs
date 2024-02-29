import React from 'react'
import SortButton from './SortButton'
import GeneralButton from './GeneralButton'

const Sort = ({ data }) => {
  const regions = [...new Set(data.map(item => item.region))]

  return (
    <div>
      <div className='flex justify-center items-center gap-4'>
        <GeneralButton route={'/'}>
          All countries
        </GeneralButton>
        {
          regions.map((region, i) => {
            return <SortButton key={i} region={region} />
          })
        }
      </div>
    </div>
  )
}

export default Sort