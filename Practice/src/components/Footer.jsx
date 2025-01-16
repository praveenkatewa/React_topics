import React from 'react'
import { useSelector } from 'react-redux';

const Footer = () => {
  const {name,email}=useSelector((state)=>state.data)

  return (
    <div>
      <p>
        my name:{name}
      </p>
      <p>
        my email:{email}
      </p>
    </div>
  )
}

export default Footer