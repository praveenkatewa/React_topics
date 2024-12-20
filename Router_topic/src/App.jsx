
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Home from "./components/Home"
import Calculator from "./components/calculator"
import Form from "./components/Form"
import Signup from "./components/Signup"
import DisplayToggleComponent  from './components/DisplayToggleComponent'



function App() {
  

  return (
    <>
<div>
     
      <DisplayToggleComponent />
    </div>

    <BrowserRouter>

    <Header/>
     
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/Header" element={<Header/>}></Route>
          <Route path="/cal" element={<Calculator/>}></Route>
          <Route path="/form" element={<Form/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
          
         



        </Routes>
     
        </BrowserRouter>
  
        </>
    
  )
}

export default App
