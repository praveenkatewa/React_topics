import React from 'react'
import { useState } from 'react'

function User() {
const [Name,setName]=useState('');
const [Email,setEmail]=useState('');
const [Datainfo,setDatainfo]=useState('');

const data= ()=>{
  // console.log(Name,Email);
  setDatainfo({Name,Email});
  setName('');
  setEmail('');

}




  return (
    <>
     <div>
     <div>Name: <input type='text' value={Name} placeholder='name' onChange={(e)=>setName(e.target.value)}/></div>
          
    <div>Email: <input type='text' value={Email}  placeholder='email ' onChange={(e)=>setEmail(e.target.value)}/></div>

   <button onClick={data} > sumit</button>

   <p>name:{Datainfo.Name}</p>
   <p>Email:{Datainfo.Email}</p>
   

           

     </div>
    </>
  )
}

export default User