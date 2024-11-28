import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the App</h1>
      
      <div style={{ marginTop: '20px' }}>
      <Link to="/Signup" style={{ textDecoration: 'none', marginRight: '30px' }}>
          <button style={buttonStyle}>Signup</button>
        </Link> 

        <Link to="/Login" style={{ textDecoration: 'none' }}>
          <button style={buttonStyle}>Login</button>
        </Link>

       
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  color: '#fff',
  backgroundColor: '#007bff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Dashboard;
