// components/Login.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginData } from '../features/counter/signupSlice'; 

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  
  const user = useSelector((state) => state.auth.user); 

 

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (user && user.name === name && user.password === password) {
    
      dispatch(setLoginData({ name, password }));

      alert('Login Successful');
    } else {
      alert('Invalid credentials');
    }

   
    setName('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      
      
    </div>
  );
};

export default Login;
