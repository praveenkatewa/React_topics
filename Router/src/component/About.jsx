import {Link} from "react-router-dom"
 function About (){

  return <>
  <h1>this is About page</h1>
  <Link to="/" >go to home page</Link>
  <li> <Link to ="/User/Amit">Amit</Link></li>

    <li> <Link to ="/User/Raj">Raj</Link></li>


  </>
}
export default About;