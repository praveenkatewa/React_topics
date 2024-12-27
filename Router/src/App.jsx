

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
import APiFetch from './component/Api';

import APiFetch2 from './component/Api2';
// import APiFetch3 from './component/Api3';
import APiFetch4 from './component/api4';
import Fetch3 from './component/Api3'
import Api5 from './component/api5';
import APiFetchProduct from './component/productapi';
import APiProductView from './component/ApiProductViews';
import Apitest from './component/Apitest';
import Moment from './component/moment';
import  LazyLoading from './component/LazyLoading'
import Todo from './component/Todo';
// import  Exercises from './component/Youtube';

import  useDarkMode from './component/useDarkMode';
import Dark from './component/Dark';



function App() {
 

  const [isDarkMode, toggleDarkMode] = useDarkMode();


  return (



    

  
    

    
    <>


<address>
      <h2>B-35 - Second Floor - next to Vasant Bahar colony Gopalpura bypass, Tonk Rd, Gopal Pura Mode, Jaipur, Rajasthan 302018</h2>
  
    </address>
    <div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.292358767129!2d75.79166017489321!3d26.86245096224982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc961d37854b3%3A0x835ffe73fd8bda3f!2sREGex%20Software%20%7C%20Best%20IT%20TRAINING%20AND%20PLACEMENT%20GAURANTEE%20%7C%20IT%20Training%20Institute%20in%20Jaipur%20%7C%20DATASCIENCE%20%7C%20C%2B%2B%20%7C%20JAVA%20%7C%20MERN!5e0!3m2!1sen!2sin!4v1735267151603!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  
    </div>

<div>
      <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={toggleDarkMode}>
        Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
    <Dark/>


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
    <Route path="/APiFetch" element={<APiFetch/>}/>
    <Route path="/Api2" element={<APiFetch2/>}/>
    <Route path="/Api3" element={<Fetch3/>}/>
    <Route path="/Api4" element={<APiFetch4/>}/>
    <Route path="/Api5" element={<Api5/>}/>
    <Route path="/Productapi" element={<APiFetchProduct/>}/>
    <Route path="/ApiProductview" element={<APiProductView/>}/>
    <Route path="/ApiFetchtest" element={<Apitest/>}/>
    <Route path="/Todo" element={<Todo/>}/>
    {/* <Route path="/Exercises" element={<Exercises/>}/> */}

    <Route path="/moment" element={<Moment/>}/>
    
    <Route path="/useDarkMode" element={<useDarkMode/>}/>

    <Route path="/ LazyLoading" element={<LazyLoading/>}/>


    
    

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
