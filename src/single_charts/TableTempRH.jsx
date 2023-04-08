import React from 'react'

function TableTempRH() {
  return (
    <div className='grid-cols-3 flex justify-between m-40 ring-8 ring-black'>
        <ul className='col-1  pr-10 '>
            <li className='bg-blue-400'>Temp</li>
            <li className='bg-blue-400'>RH</li>
        </ul>
        <ul className='col-1 pr-5 pl-5 bg-blue-500 ring-black ring-4  '>
            <li className='bg-blue-500'>0</li>
            <li className='bg-blue-500'>0</li>
        </ul>
        <ul className='col-2 pr-10 pl-10 bg-blue-400 ring-black ring-4  '>
            <li className='bg-blue-400'>Good</li>
            <li className='bg-blue-400'>Bad</li>
        </ul>

    </div>
  )
}

export default TableTempRH