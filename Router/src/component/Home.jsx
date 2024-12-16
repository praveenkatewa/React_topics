 import {Link,useNavigate} from 'react-router-dom'
 
 function Home(){
  const Navigate=useNavigate();

  const navToPage=(url)=> {
    Navigate(url)
  }

  return <>
  <h1>Home page </h1>
  <p>this is home page</p>
  <Link to="/Sign">Signin </Link><br></br>

  {/* <button onClick={()=>Navigate('/About')}>go to about page</button><br/>
  <button onClick={()=>Navigate('/Sign')}>go to signin page </button> */}

  <button onClick={()=>navToPage('/About')}>go to about page</button><br/>
  <button onClick={()=>navToPage('/Sign')}>go to signin page </button>

  <br>
    
  </br>

  <Link to="/APiFetch">APiFetch</Link>
  <Link to="/Api2">APiFetch2 </Link>
  <Link to="/Api4">APiFetch4 </Link>
  <Link to="/Api3">APiFetch3 </Link>
  <Link to="/Api5">APiFetch5 </Link>
  <Link to="/ApiProductview">APiproduct </Link>
  <Link to="/moment">moment</Link>
  <Link to="/ LazyLoading"> LazyLoading</Link>
  <Link to="/Todo"> todo</Link>


 

  </>

 }

 export default Home;