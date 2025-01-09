import React, { useState } from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';

const SignupModal = ({ showModal, handleClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Signup successful! Redirecting to login...');
    handleClose(); // Close the modal after submission
    // Navigate to login or do additional actions as needed
    const data = { name, email, password };
    // Store data in local storage
    localStorage.setItem('data', JSON.stringify(data));
    console.log(data);
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
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

           
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </Form.Group>

           
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </Form.Group>

           
            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default SignupModal;
