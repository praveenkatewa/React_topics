import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className='app-container'>
      <Routes>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>

      <Route path="/" element={<Login/>}/>

      </Routes>
    </div>  
    </Router>
    
  );
}

export default App
