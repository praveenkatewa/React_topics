import React, { useState, useEffect } from 'react'
import abc from 'axios'

const APiFetch = () => {
    const [data, setData] = useState([]);
    
    const [loading, setLoading] = useState(false);

 useEffect(()=>{
    fetch()
 },[])

 const fetch = async() =>{
    const result =  await abc.get('https://fakestoreapi.com/products')
    console.log(`>>>>>Api`,result.data);
    setData(result.data);
 }
//  fetch()
console.log(`>>>>>>>>loading>>>>>>>>`,loading);

 const update = async() =>{
    setLoading(!loading)
 }



    return (
        
        <div className="container mt-4">
           <button onClick={update}>click me </button>
          <h2 className="text-center mb-4">Product List</h2>
        <div className="row">
          {data && data.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card">
                <img src={item.image} alt={item.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">Category: {item.category}</p>
                  <p className="card-text">Price: {item.price}</p>
                  <p className="card-text">Rating: {item.rating.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        
      
    
    )
}

export default APiFetch