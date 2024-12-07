import React,{useState,useEffect} from 'react'
import axios from'axios';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';



const Apitest = () => {
const[data,setData]=useState([]);
const[loading,setLoading]=useState(false);
const[selectedItem,setSelectedItem]=useState(null);
const[search,setSearch]=useState("");


useEffect(()=>{
  ApiFetch()

},[]);

const ApiFetch=async()=>{
  const result=await axios.get('https://dummyjson.com/products');
  // console.log(result.data.products)
  setData(result.data.products)
};

const load=async()=>{
  setLoading(!loading)

}
const details =async(id)=>{
  console.log(`User ID: ${id}`);
    const result = await axios.get(`https://dummyjson.com/products/${id}`);
    console.log(`apidetails>>id>>`, result.data);
    setSelectedItem(result.data); 


}


const closeModal = () => {
  setSelectedItem(null); 
  

};


const filteredData = data.filter((item) =>
  item.title.toLowerCase().includes(search.toLowerCase())
);

  return (
    
    <div>
      <div>
        <input type="text"placeholder="Search product" value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    <button onClick={load}>loading</button>
    <h2>products</h2>
    {loading ?(<p>loading..</p>):(
      data && filteredData.map((item)=><div key={item.id}>
        <div>
          <img  src={item.thumbnail} alt={item.title}/>
        </div>
        <h5>title:{item.title}</h5>
        <p >Category: {item.category}</p>
       <p >Price: ${item.price}</p>
       <p>discountPercentage:{item.discountPercentage}</p>

       <button onClick={() => details(item.id)}>view details</button>
      </div>) )}


      {selectedItem && (
        <div
          className="modal" style={{ display: "block", width: 700, padding: 30 }}
        >
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>
                <h4>{selectedItem.title}</h4>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <img
                  src={selectedItem.images} alt={selectedItem.title}
                  className="img-fluid mb-3"
                />
                <p>Category: {selectedItem.category}</p>
                <p>Price: ${selectedItem.price}</p>
                <p>Description: {selectedItem.description}</p>
                <p>Rating: {selectedItem.rating}</p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>Close  </button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}
    </div>
  )
}

export default Apitest
