import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Api5 = () => {
  const [user,setUsers]=useState([]);
  const[loading,setLoading]=useState(false);

  useEffect(()=>{
    fetchuser()
  },[])

  const fetchuser=async()=>{
    const result=await axios.get('https://dummyjson.com/users')
    setUsers(result.data.users);
    console.log(result.data.users)

  }
  // fetchuser()

  const load =async() =>{
    setLoading(!loading)
  }
  
  return (
  <div>
    <button onClick={load}>load </button>

    {user.map((user)=>
    <div key={user.id}>
    <h3>{user.firstName} {user.lastName}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Age: {user.age}</p>
          <p>Gender: {user.gender}</p>
          <p>Address: {user.address.address}, {user.address.city}</p>
      
    </div>
    )}


      
    </div>
  )
}

export default Api5
