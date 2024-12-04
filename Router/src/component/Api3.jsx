import React, { useState, useEffect } from 'react';
import axios from 'axios';

const APiFetch3 = () => {
  const [data, setData] = useState([]); // State to store API data
  const [loading, setLoading] = useState(false); // State to handle loading

  // Fetch data from the API
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        'https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1'
      );
      console.log('API Response:', response.data);
      setData(response.data.Search || []); // Set the "Search" key from the API response
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  // UseEffect to call the fetch function once when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Toggle loading state
  const toggleLoading = () => {
    setLoading(!loading);
  };

  return (
    <div className="container mt-4">
      <button onClick={toggleLoading} className="btn btn-primary mb-3">
        Toggle Loading State
      </button>
      <h2 className="text-center mb-4">Movie List</h2>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="row">
          {data.map((item) => (
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
  );
};

export default APiFetch3;
