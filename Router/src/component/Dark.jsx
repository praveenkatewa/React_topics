import React from 'react'
import UseToggle from './UseToggle'


const Dark = () => {
  const[darkMode,setDarkMode]=UseToggle()
  
  const appStyle={
    backgroundColor : darkMode ?'black' :'white',
    color: darkMode ? 'white' :'black'
  }
  return (
    <div style={appStyle}>
    <h1>{darkMode ? 'dark':'light'}</h1>
    <button onClick={setDarkMode}>
      Switch to{darkMode ? 'light':'dark'}
    </button>
      
    </div>
  )
}

export default Dark
