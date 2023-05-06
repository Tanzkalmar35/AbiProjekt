import React from 'react'
import {Switch} from "antd";

const Settings = () => {

  const [showText, setShowText] = React.useState(false)
  const [currentColorMode, setMode] = React.useState(false)

  function toggleShowText() {
    setShowText(!showText)
    console.log(showText)
  }

  function handleModeChange() {
    setMode(!currentColorMode)
    const app = document.getElementById("app").style.backgroundColor = currentColorMode ? "#212121" : "#fff";
    app.style.color = currentColorMode ? "#fff" : "#212121";
  }

  return (
    <>
      <div className=' text-white'>
        <div className='pb-10 text-center text-purple-500 text-5xl'>Settings</div>

        <table className=' flex justify-center mt-32 '>
          <tbody>
            <tr className=''>
              <td className='mt-10 pr-10 text-5xl'>Dark Mode</td>
              <Switch className="bg-white" onChange={() => {handleModeChange()
                console.log(currentColorMode)}}/>
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
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Settings