

import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
    const {name,email} = useSelector((state)=> state.data)
  return (

    <div>
<p>My Name :{name}</p>
<p>My email :{email}</p>
    </div>
  )
}

export default Footer