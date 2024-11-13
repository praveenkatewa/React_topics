

import Home from './component/Home'
import About from './component/About'

import { BrowserRouter ,Routes,Route,Navigate} from 'react-router-dom';
import NavBar from './component/NavBar';
import Sign from './component/signin';
import Page404 from './component/Page404';



function App() {


  return (
    <>
    <BrowserRouter>
    <NavBar/>
   

    <Routes>
    

    <Route path="/" element={<Home/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Sign" element={<Sign/>}></Route>
    {/* <Route path ="/*" element={<Page404/>} /> */}
    <Route path="/*" element={<Navigate to="/About"/>}/>

    
    

    </Routes>

    </BrowserRouter>
    
    
    </>
  )
}

export default App
