import React from 'react'
import { useState } from 'react'

import { useDispatch } from 'react-redux';
import { setData } from '../features/counter/feildSlice';


const Header = () => {
  
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const dispatch=useDispatch();

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(name,email)
    dispatch(setData({name,email}))
    alert('data save')
    setName(''),
    setEmail('')
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='name'
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
      <input
        type='text'
        placeholder='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
      <button type='submit'>sumit</button>


      </form>
    </div>
  )
}

export default Header