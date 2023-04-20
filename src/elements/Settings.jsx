import React from 'react'

const Settings = () => {
  return (
    <div className='text-5xl text-white'>
      <div className='pb-10 text-center text-purple-500'>Settings</div>
      
      <table className=' flex justify-center '>
        <tbody>
          <tr className=''>
            <td className='pt-10 pr-10'>Dark Mode</td>
            <td className='pt-10'>Button later here</td>
          </tr>
          <tr >
            <td className='pt-10 pr-10'>Benachrichtigungen</td>
            <td className='pt-10'><button>How to?</button></td>
          </tr>
          <tr>
            <td className='pt-10 pr-10'>Connected Units</td>
            <td className='pt-10'><button>How to?</button></td>
          </tr>
          <tr>
            <td className='pt-10 pr-10'>Help</td>
            <td className='pt-10'><button>Help will be added later</button></td>
          </tr>
          <tr>
            <td className='pt-10 pr-10'>About Us</td>
            <td className='pt-10'><button>Among US</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Settings