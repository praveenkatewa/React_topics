import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Done from './components/Done';


function App() {
  return (
    <Router>
      <div className='app-container'>
      <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Done" element={<Done/>}/>
      


      </Routes>
    </div>  
    </Router>
    
  );
}

export default App
