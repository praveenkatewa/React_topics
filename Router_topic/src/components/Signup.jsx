import React,{useState} from 'react'

const Signup = () => {
  const [name, setName] = useState("");
        const [email,setEmail]=useState("");


        const handleSubmit = (e) => {
          e.preventDefault()
          const signup = {
              name,email
          };



            // get data from  local form data
          const savedData = JSON.parse(localStorage.getItem("formData"));
          console.log(savedData);
          



          // store data
          // localStorage.setItem("formData", JSON.stringify(signup));
          // console.log(signup)


//  get data from local
          // const Signupdata = JSON.parse(localStorage.getItem("formData"));
          // console.log(Signupdata)

        
          
  };
  
 

  return (
    <div>
     <h1>this is signup page</h1>
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

            <button type="submit">Submit</button>

         

           
        </form>
      
    </div>
  )
}

export default Signup
