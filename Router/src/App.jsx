

import Home from './component/Home'
import About from './component/About'

import { BrowserRouter ,Routes,Route,Navigate} from 'react-router-dom';
import NavBar from './component/NavBar';
import Sign from './component/signin';
import Page404 from './component/Page404';
import User from './component/User';
import Dropdown from './Droupdown';

import './App.css'
import work from './component/work';



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

    <Route path="/user/:name" element={<User/>}/>
    <Route path="/work" element={<work/>}/>
    <Route path="/Dropdown" element={<Dropdown/>}/>


    
    

    </Routes>

    </BrowserRouter>
    
    
    </>
  )
}

export default App



// hook 
//  use state
// use nav
// use effect
// use memo
// use callback
// 

// use selector

// uses dispath




// custom hook
// redux toolkit
// redux toolkit vs redux vs contact api

//  searching sorting lazy loading
// 


// youtube project clone
// 
