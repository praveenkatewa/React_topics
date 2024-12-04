import React, { useState, useEffect } from 'react'
import abc from 'axios'


const APiFetch4 = () => {
    const [data, setData] = useState([]);
    
    const [loading, setLoading] = useState(false);

 useEffect(()=>{
    fetch()
 },[])

 const fetch = async() =>{
    const result =  await abc.get('https://restcountries.com/v3.1/all')
    console.log(`>>>>>Api`,result.data);
    setData(result.data);
 }
//  fetch()
console.log(`>>>>>>>>loading>>>>>>>>`,loading);

 const update = async() =>{
    setLoading(!loading)
 }



    return (
      <div>
   <button onClick={update}>click me </button>
      <h2>Country List</h2>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map((country) => (
            <div key={country.cca3}>
              <h3>{country.name.common}</h3>
              <img
                src={country.flags.png}
                alt={country.name.common}
                style={{ height: '100px', objectFit: 'cover' }}
              />
              <p>Region: {country.region}</p>
              <p>Subregion: {country.subregion}</p>
              <p>Population: {country.population}</p>
            </div>
          ))
        )}
      </div>
    </div>
      
    
    )
}

export default APiFetch4