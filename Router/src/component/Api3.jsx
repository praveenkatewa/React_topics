
import React, { useState,useEffect } from 'react'
import axios from 'axios'


const Fetch3 = () => {
  const[data,setdata]=useState([ ])
  const [loading, setLoading] = useState(true); 
  
  useEffect(()=>{
    fetchData()
  },[])
  
  const fetchData=async()=>{
    const result=await axios.get('https://dummyjson.com/carts')
    setdata(result.data.carts)
    console.log(result.data.carts)
  }
  const updateData=()=>{
    setLoading(!loading);

  }

  

  
  return (
    <div>
         <button onClick={updateData}>click me </button>

            { data.map((item)=>
            <div key={item.id}>
            <p>Title: {item.userId}</p>
            <p>Total: {item.total}</p>
            <p>Discounted Total: {item.discountedTotal}</p>
            <p>Quantity: {item.totalQuantity}</p>
            <img
                src={item.image}
                alt={item.image}
                style={{ height: '100px', objectFit: 'cover' }}
              />
                </div>
            )}
      
    </div>
  )
}

export default Fetch3