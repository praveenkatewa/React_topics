import React from 'react'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function Protected(props){
  const{Component}=props;

  const Navigate=useNavigate();
  useEffect(() => {
    let login = localStorage.getItem('login');
    if (!login) {
      Navigate('/Dashboard');
    }
  }, []);


  return (
    <div>
      {/* <Component/> */}
    </div>
  )
}
export default Protected





