import React from 'react'

function TableTempRH() {
  return (
    <div className='grid-cols-3 flex  justify-between m-40 ring-8 ring-white'>
        <ul className='col-1'>
            <li className='bg-blue-400'>Temp</li>
            <li className='bg-blue-400'>RH</li>
        </ul>
        <ul className='col-2 col-1 pr-10 bg-blue-500'>
            <li className='bg-blue-500'>0</li>
            <li className='bg-blue-500'>0</li>
        </ul>
        <ul className='col-2 col-1 pr-10 bg-blue-400'>
            <li className='bg-blue-400'>Good</li>
            <li className='bg-blue-400'>Bad</li>
        </ul>

    </div>
  )
}

export default TableTempRH