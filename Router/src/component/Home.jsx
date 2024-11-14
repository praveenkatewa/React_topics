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


 

  </>

 }

 export default Home;