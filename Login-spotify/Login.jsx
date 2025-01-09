import React, { useState } from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ showLoginModal, handleCloseLoginModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
  const storedUser = JSON.parse(localStorage.getItem('data'));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (storedUser?.email === email && storedUser?.password === password) {
      alert('Login successful!');

      // Store the logged in user data and login time
      localStorage.setItem("loggedInUser", JSON.stringify({
        name: storedUser.name,
        phone: storedUser.phone
      }));

      const currentTime = new Date().toLocaleString();
      localStorage.setItem("loginTime", currentTime);

      // Navigate to the product page
      navigate('/Display');
    } else {
      alert('Email or password is incorrect.');
    }
  };

  return (
    <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
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
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;


