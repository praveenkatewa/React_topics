import{Link} from"react-router-dom"



function Header() {
  return (
    <div>
      <h1>this is header</h1>
      
      <Link to={"/Dashboard"}>Dashboard</Link>
      <Link to={"/Login"}>Login</Link>
      <Link to={"/Signup"}>Signup</Link>
      <Link to={"/About"}>About</Link>
      <Link to={"/Contact"}>Contact</Link>
      
     
    </div>
  )
}

export default Header