import React from 'react';
import { useNavigate } from 'react-router-dom';

const Done = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/dashboard');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Signup Done</h1>
      <button onClick={handleCancel} style={buttonStyle}>
        Cancel
      </button>
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  color: '#fff',
  backgroundColor: '#d9534f',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '20px'
};

export default Done;
