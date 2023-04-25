import React from 'react'
import O2_chart from '../single_charts/O2_chart'
import TempChart from '../single_charts/tempChart'

const Temperature = () => {
  return (
    <>
    <div className='text-7xl'>Here will be the temperature and humidity chart later</div>
    <table className='flex justify-center pt-36'>
      <tbody>
        <tr>
          <td className='pr-10'><O2_chart></O2_chart></td>
          <td className='pl-10'><TempChart></TempChart></td>
        </tr>
      </tbody>
    </table>
    
    
    </>
  )
}

export default Temperature