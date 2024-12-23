import React from 'react';
import useApiFetch from './useApiFetch';

function Products() {
  const { data, error, loading } = useApiFetch('https://fakestoreapi.com/products');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error......</p>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data && data.map((product) => (
          <li key={product.id}>
          <img src={product.image} height='50' />
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
