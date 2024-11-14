import {Link,NavLink} from 'react-router-dom'
function NavBar (){
  return <>
 
  <ul className='navBar'>
    <li><NavLink 
    style={({isActive})=>{return {backgroundColor: isActive ? 'green':'red'}}}
     className="navBar-link "  to ="/">Home</NavLink> </li>


    <li> <NavLink 
    style={({isActive})=>{return {backgroundColor: isActive ? 'green':'red'}}}
    className="navBar-link "  to ="/About">About</NavLink> </li>

    <li> <NavLink
    style={({isActive})=>{return {backgroundColor: isActive ? 'green':'red'}}}
      className="navBar-link " to ="/Contact">Contact</NavLink> </li>
    
  </ul>
 </>
  
}

export default NavBar;
