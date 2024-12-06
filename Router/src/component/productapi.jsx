import React, { useState, useEffect } from 'react';
import abc from 'axios';

const APiFetchProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); 

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const result = await abc.get('https://fakestoreapi.com/products');
    console.log(`>>>>>Api`, result.data);
    setData(result.data);
  };

  const update = () => {
    setLoading(!loading);
  };

  const details = async (id) => {
    console.log(`User ID: ${id}`);
    const result = await abc.get(`https://fakestoreapi.com/products/${id}`);
    console.log(`apistore`, result.data);
    setSelectedItem(result.data); 
  };

  const closeModal = () => {
    setSelectedItem(null); 
  };

  return (
    <div className="container mt-4">
      <button onClick={update}>Click Me</button>
      <h2 className="text-center mb-4">Product List</h2>
      <div className="row">
        {data && data.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card">
                <img src={item.image} alt={item.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">Category: {item.category}</p>
                  <p className="card-text">Price: ${item.price}</p>
                  <p className="card-text">Rating: {item.rating.count}</p>
                  <button className="btn btn-primary" onClick={() => details(item.id)}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

  
      {selectedItem && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedItem.title}</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <img src={selectedItem.image} alt={selectedItem.title} className="img-fluid mb-3" />
                <p><strong>Category:</strong> {selectedItem.category}</p>
                <p><strong>Price:</strong> ${selectedItem.price}</p>
                <p><strong>Description:</strong> {selectedItem.description}</p>
                <p><strong>Rating:</strong> {selectedItem.rating.rate} ({selectedItem.rating.count} reviews)</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default APiFetchProduct;

