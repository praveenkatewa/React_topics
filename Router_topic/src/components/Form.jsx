
import React, { useState } from 'react';

const Form = () => {
        const [name, setName] = useState("");
        const [email,setEmail]=useState("");
        const [password,setPassword]=useState("");
        const [gender, setGender] = useState("");
        const [role, setRole] = useState("");
        const [declaration, setDeclaration] = useState(false);
    
        const handleSubmit = (e) => {
            e.preventDefault()
            const data = {
                name,email,password,gender,role,declaration
            };
    
    // to store data in local data
    localStorage.setItem("formData", JSON.stringify(data));
    console.log(data);

    // localStorage.setItem("meraformkadata",JSON.stringify({
    //     h:"hvhv",
    //     "hvh":"jhvv"
    // }));
    // console.log(data);

    // to store data in session
    // sessionStorage.setItem("formData", JSON.stringify(data));
    // console.log(data);
    
        };

        //  to get data from localstorage

//         const savedData = JSON.parse(localStorage.getItem("formData"));
// console.log(savedData);





  return (
    <div>
    <h1>this is form page</h1>
    <form onSubmit={handleSubmit}>
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
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
            </div>

            <div style={{margin:'50px'}}>
                <label>Gender: </label>
                <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={(e) => setGender(e.target.value)}
                />
                Male
                <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={(e) => setGender(e.target.value)}
                />
                Female
            </div>

            <div style={{margin:'50px'}}>
                <label>Role: </label>
               
                <select  onChange={(e) => setRole(e.target.value)}>
                value ={role}
                    <option value="">Select a role</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Manager">Manager</option>
                </select>
            </div>

            <div style={{margin:'50px'}}>
                <label>
                    <input
                    checked={declaration}
                        type="checkbox"
                        onChange={(e) => setDeclaration(e.target.checked)}
                    />
                    I declare the above information is correct.
                </label>
            </div>

            <button type="submit">Submit</button>
        </form>
      
    </div>
  )
}

export default Form
