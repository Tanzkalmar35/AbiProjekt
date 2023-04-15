import React from 'react'

function TableTempRH() {
  return (
    <div className=' grid-cols-3 flex justify-between m-40 ring-8 ring-black'>
        <ul className='col-1 pr-10 bg-blue-400 '>
            <li className='bg-blue-400'>Temp:</li>
            <li className='bg-blue-400'>RH:</li>
        </ul>
        <ul className='col-2 bg-blue-500 ring-4 ring-black pr-10 pl-10  '>
            <li className='bg-blue-500'>04</li>
            <li className='bg-blue-500'>40&</li>
        </ul>
        <ul className='col-2 pr-10 pl-10 bg-blue-400  ring-black ring-4  '>
            <li className='bg-blue-400'>Good</li>
            <li className='bg-blue-400'>Bad</li>
        </ul>

    </div>
  )
}

export default TableTempRH