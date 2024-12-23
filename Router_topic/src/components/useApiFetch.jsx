import { useState, useEffect } from 'react';
import axios from 'axios';

function useApiFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
   
    try {
      const result = await axios.get('https://fakestoreapi.com/products');
      console.log(`Data:`, result.data);
      setData(result.data);
    } catch (err) {
      setError(err.message );
    } 
      setLoading(false);
    
  };

  return { data, error, loading };
}

export default useApiFetch;
