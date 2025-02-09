import abc from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ApiProductViews = () => {
  const [data,setData]=useState([]);
  const[loading,setLoading]=useState(false);
  const[selectedItem,setSelectedItem]=useState(null);

  const[selectedRating,setSelectedRating]=useState(null);

  const[search,setSearch]=useState("");


  useEffect(()=>{
    fetch()

  },[]);



  const fetch =async()=>{
    const result=await abc.get('https://fakestoreapi.com/products');
    console.log(`api1>>>>`,result.data);
    setData(result.data);
  };


  const update =async()=>{
    setLoading(!loading);
  };


  const details = async (id) => {
    console.log(`User ID: ${id}`);
    const result = await abc.get(`https://fakestoreapi.com/products/${id}`);
    console.log(`apistore`, result.data);
    setSelectedItem(result.data); 
  };


const Rating= async (id) =>{
  const result=await abc.get(`https://fakestoreapi.com/products/${id}`);
  setSelectedRating(result.data);
  console.log(`rating`,result.data)
}


  const closeModal = () => {
    setSelectedItem(null); 
    setSelectedRating(null)
  
  };
  // console.log(selectedItem?.id);

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  




  return (
    <div>
    <div>
    <input type='text' placeholder='search' value={search}
    onChange={(e)=>setSearch(e.target.value)} /> 
    

    </div>
   
    <button onClick={update}>loading</button>
    
     
    
    <h2>product list</h2>

    {  loading ? (<p>loading..</p>):(
      data && filteredData.map((item)=><div key={item.id}>
    <div >
     <LazyLoadImage
        src={item.image}
        effect="blur"
    wrapperProps={{
        
        style: {transitionDelay: "2s"},
    }}
          /> 


      {/* <img src={item.image} alt={item.title}/> */}
    </div>
    <h5>{item.title}</h5>
    <p>Category:{item.category}</p>
    <p>Price: ${item.price}</p>
    <p>Rating: {item.rating.count}</p>
    <button onClick={() => details(item.id)}>view details</button>



    </div>)) }


    {selectedItem && (
      <div  className="modal"style={{ display: 'block', width: 700,  padding: 30 }}> 
      
      <Modal.Dialog> 
        <Modal.Header > 
          <Modal.Title> 
          <h4>{selectedItem.title}</h4> 
          
          </Modal.Title> 
        </Modal.Header> 
        <Modal.Body> 
         <div>
         {/* <LazyLoadImage
        src={selectedItem.image}
        effect="blur"
    wrapperProps={{
        // If you need to, you can tweak the effect transition using the wrapper style.
        style: {transitionDelay: "2s"},
    }}
         /> */}
         <img src={selectedItem.image} alt={selectedItem.title} className="img-fluid mb-3" />
         <p>Category: {selectedItem.category}</p>
                <p>Price: ${selectedItem.price}</p>
                <p>Description: {selectedItem.description}</p>
                <p>Rating: {selectedItem.rating.rate} ({selectedItem.rating.count} reviews)</p>

         </div> 
        </Modal.Body> 
        <Modal.Footer> 
          
        <button type="button" className="btn btn-secondary" onClick={closeModal}> Close </button>
                <button  type="button" className="btn btn-danger" onClick={() => Rating(selectedItem.id)}>Rating</button>
        </Modal.Footer> 
      </Modal.Dialog> 
    </div> 
    )}

    {selectedRating && 
        <div  className="modal"style={{ display: 'block', width: 700,  padding: 30 }}> 
      
      <Modal.Dialog> 
        <Modal.Header > 
          <Modal.Title> 
          <h4>{selectedItem.title}</h4> 
          
          </Modal.Title> 
        </Modal.Header> 
        <Modal.Body> 
        <div>
        <p>Rating:{ selectedRating.rating.rate}</p>
        </div>

         
        </Modal.Body> 
        <Modal.Footer> 
          
        <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>
                
        </Modal.Footer> 
      </Modal.Dialog> 
    </div> 
   
    

    

    }


      
    </div>
   

  )
}

export default ApiProductViews







