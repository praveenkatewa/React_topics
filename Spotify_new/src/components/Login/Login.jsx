// import React, { useState } from 'react';
// import { Button, Form, Container } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const storedUser = JSON.parse(localStorage.getItem('data'));

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (storedUser?.email === email && storedUser?.password === password) {
//       alert('Login successful!');

//       // Store the logged in user data and login time
//       localStorage.setItem("loggedInUser", JSON.stringify({
//         name: storedUser.name,
//         phone: storedUser.phone
//       }));

//       const currentTime = new Date().toLocaleString();
//       localStorage.setItem("loginTime", currentTime);

//       // Navigate to the product page
//       navigate('/Display');
//     } else {
//       alert('Email or password is incorrect.');
//     }
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
//       <div style={{ maxWidth: '400px', width: '100%' }}>
//         <h3 className="text-center mb-4">Login</h3>
//         <Form onSubmit={handleSubmit}>
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

// export default Login;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem('data'));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (storedUser?.email === email && storedUser?.password === password) {
      alert('Login successful!');

      // Store user info in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify({
        name: storedUser.name,
        phone: storedUser.phone
      }));

      // Store the login time
      const currentTime = new Date().toLocaleString();
      localStorage.setItem("loginTime", currentTime);

      
      navigate('/Display');
    } else {
      alert('Email or password is incorrect.');
    }
  };

  return (
    <Container className="my-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">Login</h2>
      <Form onSubmit={handleSubmit}>
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

export default Login;
