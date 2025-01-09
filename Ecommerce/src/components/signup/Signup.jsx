import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [phone,setPhone]=useState("");
  const [declaration, setDeclaration] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Signup successful! Redirecting to login...');
    navigate('/login');

    const data = { name, email, password, gender, role, phone,declaration };

    // Store data in local storage
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
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

        {/* Gender Field */}
        <Form.Group className="mb-3">
          <Form.Label>Gender</Form.Label>
          <div>
            <Form.Check
              inline
              type="radio"
              name="gender"
              value="Male"
              label="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
            />
            <Form.Check
              inline
              type="radio"
              name="gender"
              value="Female"
              label="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
        </Form.Group>

        {/* Role Field */}
        <Form.Group className="mb-3">
          <Form.Label>Role</Form.Label>
          <Form.Select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select your role</option>
            <option value="Customer">Customer</option>
            <option value="Vendor">Vendor</option>
            <option value="Admin">Admin</option>
          </Form.Select>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formPhone">
  <Form.Label>Phone Number</Form.Label>
  <Form.Control
    type="tel"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    placeholder="Enter your phone number"
  />
</Form.Group>

        {/* Declaration Checkbox */}
        <Form.Group className="mb-3" controlId="formDeclaration">
          <Form.Check
            type="checkbox"
            label="I declare the above information is correct."
            checked={declaration}
            onChange={(e) => setDeclaration(e.target.checked)}
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



