
import { BrowserRouter ,Route,Routes} from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Home from "./components/Home"
import Calculator from "./components/calculator"

function App() {
  

  return (
    <>
    <Header/>
     
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/Header" element={<Header/>}></Route>
          <Route path="/cal" element={<Calculator/>}></Route>



        </Routes>
     
  
      
    </>
  )
}

export default App
