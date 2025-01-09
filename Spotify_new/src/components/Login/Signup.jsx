// ;

// import React, { useState } from 'react';
// import { Button, Form, Container } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom'; 

// const Signup = ({ handleClose }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Signup successful! Redirecting to login...');

//     const data = { name, email, password };
//     // Store data in local storage
//     localStorage.setItem('data', JSON.stringify(data));
//     console.log(data);

//     // Navigate to the login page
//     navigate('/login'); // Redirect to login page after signup
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
//       <div style={{ maxWidth: '400px', width: '100%' }}>
//         <h3 className="text-center mb-4">Sign Up</h3>
//         <Form onSubmit={handleSubmit}>
//           {/* Name Field */}
//           <Form.Group className="mb-3" controlId="formName">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter your name"
//             />
//           </Form.Group>

//           {/* Email Field */}
//           <Form.Group className="mb-3" controlId="formEmail">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//             />
//           </Form.Group>

//           {/* Password Field */}
//           <Form.Group className="mb-3" controlId="formPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit" className="w-100">
//             Submit
//           </Button>
//         </Form>
//       </div>
//     </Container>
//   );
// };

// export default Signup;



import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Signup successful! Redirecting to login...');
   

    const data = { name, email, password };

    // Store data in local storage
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
    navigate('/login');
  };

  return (
    <Container className="my-3">
      <h2 className="text-center mb-4">Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        {/* Name Field */}
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </Form.Group>

        {/* Email Field */}
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </Form.Group>

        {/* Password Field */}
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </Form.Group>


        {/* Submit Button */}
        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;