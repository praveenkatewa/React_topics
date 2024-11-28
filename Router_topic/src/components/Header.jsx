
import{Link} from"react-router-dom"



function Header() {
  return (
    <div>
      <h1>this is header</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/Contact"}>Contact</Link>
      <Link to={"/Cal"}>Calculator</Link>
      <Link to={"/form"}>Form</Link>
      <Link to={"/Signup"}>Signup</Link>
     
    </div>
  )
}

export default Header