
import React from "react";

import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import NavbarE from "./components/Navbar/Navbar";
import MainSection from "./components/Navbar/Main";
import Footer from "./components/Navbar/Footer";
import Signup from "./components/signup/Signup";
import Login from "./components/signup/Login";
import APiFetchProduct from "./components/Product page/Productapi"


function App() {
  

  return (
    <div className="page-wrapper">
    <NavbarE />

    <div className="page-content">

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/APiFetchProduct" element={<APiFetchProduct/>}/>
      </Routes>

    </BrowserRouter>
    </div>
    
    <Footer/>
     
    </div>
       
  
  )
}

export default App
