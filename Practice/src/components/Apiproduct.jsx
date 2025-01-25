import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from "../App/productapiSlice";
import Apiproducts from "./Apiproducts";

const Apiproduct = () => {
  const [data,setData]=useState([])
  const dispatch=useDispatch();
  
  useEffect(()=>{
    fetch()

  },[])

  const fetch = async()=>{
    const response= await axios.get('https://fakestoreapi.com/products')
    setData(response.data)
    // console.log(">>>>>>>>",data)
    // console.log(">>>>>>>>>>>",response.data)
    dispatch(setProducts(response.data));


  }

  // const fetch = async () => {
  //   try {
  //     const response = await axios.get('https://fakestoreapi.com/products');
  //     setData(response.data);
  //     console.log("Response Data: ", response.data);

      
  //     dispatch(setData(response.data));
  //   } catch (error) {
  //     console.error("Error fetching data: ", error);
  //   }
  // };


  return (

   <>
     <div>Products</div>
     <div>
      {data.map((item)=>(
        <div  key={item.id}>
        <div>
        {/* <img src={item.image}/> */}
       

        </div>

        </div>
      ))}
     </div>
   </>

  )
}

export default Apiproduct