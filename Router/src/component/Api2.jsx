import React, { useState, useEffect } from 'react'
import axios from 'axios'


const APiFetch2 = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

 useEffect(()=>{
    fetch()
 },[])

 const fetch = async() =>{
   
    const result =  await axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1')

    setData(result.data.Search);
    console.log(result.data.Search)
    setLoading(false)
 }




    return (
        
      <div className="container mt-4">
      <h2 className="text-center mb-4">Movie List</h2>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="row">
        {data.length>0 && data.map((item) => (
            <div className="col-md-4 mb-4" key={item.imdbID}>
              <div className="card">
                <img
                  src={item.Poster}
                  alt={item.Title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.Title}</h5>
                  <p className="card-text">Year: {item.Year}</p>
                  <p className="card-text">Type: {item.Type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    
    )
}

export default APiFetch2