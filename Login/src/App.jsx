import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Done from './components/Done';
import Protected from './components/Protected';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Dashboard" element={<Dashboard/>} />

          <Route path="/About" element={<Protected Component={Dashboard} />} />
          <Route path="/Contact" element={<Protected Component={Dashboard} />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Done" element={<Done/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
