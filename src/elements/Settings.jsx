import React from 'react'

const Settings = () => {

  const [showText, setShowText] = React.useState(false)

  function toggleShowText() {
    setShowText(!showText)
    console.log(showText)
  }

  function Text() {
    if (showText) {
      return <div class="py-8  max-w-xl mx-auto text-purple-500">
        <p class="mb-4">We are a team of students who are passionate about environmental sustainability and technology. Our project, an environmental monitoring system, was created as part of our P5 school project to raise awareness about air quality, temperature, and humidity in our community.</p>
        <p class="mb-4">Our team consists of [insert names and roles of team members], who worked together to design, build, and program the system. We utilized cutting-edge technology, such as the ESP, ENS160+AHT21 sensor, and Firebase, to create a reliable and accurate system that can collect and store data.</p>
        <p class="mb-4">Through this project, we hope to inspire others to take action towards creating a more sustainable future. We believe that by using technology to monitor and analyze environmental data, we can make informed decisions and take steps to reduce our environmental impact.</p>
        <p class="mb-4">Thank you for your support, and we hope our project can make a positive difference in our community and beyond.</p>
      </div>

    }
  }

  return (
    <>
      <div className=' text-white'>
        <div className='pb-10 text-center text-purple-500 text-5xl'>Settings</div>

        <table className=' flex justify-center '>
          <tbody>
            <tr className=''>
              <td className='pt-10 pr-10 text-5xl'>Dark Mode</td>
              <td className='pt-10 text-5xl'>Button later here</td>
            </tr>
            <tr >
              <td className='pt-10 pr-10 text-5xl'>Benachrichtigungen</td>
              <td className='pt-10 text-5xl'><button>How to?</button></td>
            </tr>
            <tr>
              <td className='pt-10 pr-10 text-5xl'>Connected Units</td>
              <td className='pt-10 text-5xl'><button>How to?</button></td>
            </tr>
            <tr>
              <td className='pt-10 pr-10 text-5xl'>Help</td>
              <td className='pt-10 text-5xl'><button>Help will be added later</button></td>
            </tr>
            <tr>
              <td className='pt-10 pr-4  text-5xl fixed' >
                <p onClick={toggleShowText}>About Us</p>
              </td>
              <td><div>{Text()}</div></td>
              

            </tr>

          </tbody>
        </table>

        
      </div>
      
    </>
  )
}

export default Settings