import React from 'react';
import { useSelector } from 'react-redux';

const Apiproducts = () => {
  const data = useSelector((state) => state.product.items);
 
console.log(data)

  return (
    <>
      <div >
    
        { data.length>0&&data.map((item) => (
          <div  key={item.id}>
            <div >
              <img src={item.image} alt={item.title} />
              <div >
                <h5 >{item.title}</h5>
                <p >Category: {item.category}</p>
                <p >Price: {item.price}</p>
                <p >Rating: {item.rating.count}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Apiproducts;
