import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [name, setName] = useState("");
        const [email,setEmail]=useState("");
        const[password,setPassword]=useState("");
        const navigate = useNavigate();

       
        const storedUser = JSON.parse(localStorage.getItem('data'));

        const handleSubmit = (e) => {
          e.preventDefault()
         
         
          const signup = {
              name,email,password
          };

 if (storedUser.email === email && storedUser.password === password) {
           
            alert('Login successful!');
            navigate('/Done');
          } else {
            alert('Email or password is incorrect.');
          }
         
          // navigate('/Done');
           
  };
  
 

  return (
    <div>
     <h1>this is login page</h1>
     <form  onSubmit={handleSubmit}>
            <div style={{margin:'50px'}}>
                <label>Name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />
            </div>

            <div style={{margin:'50px'}}>
                <label>Email: </label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email id"
                />
            </div>
            <div style={{margin:'50px'}}>
                <label>Password: </label>
                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
            </div>

            <button type="submit">Submit</button>

         

           
        </form>
      
    </div>
  )
}

export default Login
