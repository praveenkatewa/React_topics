
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupData } from '../features/counter/signupSlice';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password,setPassword]=useState('');
    const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    dispatch(signupData({ name, email,password }));
    alert('Data saved!');
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
