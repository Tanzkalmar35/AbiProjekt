import React from 'react'
import RHChart from '../single_charts/RHChart'
import TempChart from '../single_charts/tempChart'

const Temperature = () => {
  return (
    <>
    <div className='text-7xl'>Here will be the temperature and humidity chart later</div>
    <table className='flex justify-center pt-36'>
      <tbody>
        <tr>
          <td className='pr-10'><RHChart></RHChart></td>
          <td className='pl-10'><TempChart></TempChart></td>
        </tr>
      </tbody>
    </table>
    
    
    </>
  )
}

export default Temperature