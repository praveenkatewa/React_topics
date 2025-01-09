
import React, { useState } from "react";
import { Navbar, Nav, Button, Container, Modal } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import moment from "moment";




function NavbarE() {
  const [showUserModal, setShowUserModal] = useState(false);
  

  
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const loginTime = localStorage.getItem("loginTime");
  const formattedLoginTime = moment(loginTime).format("LLLL");

  const handleUserIconClick = () => {
    setShowUserModal(true);
  };

  const handleCloseModal = () => {
    setShowUserModal(false); 
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("loginTime"); 

   
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.26rAEhQ_3jCCjcR55BmtIQHaFj&pid=Api&P=0&h=220"
              height="50"
              width="100"
              alt="Brand"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              
              {loggedInUser && (
                <FaUserCircle
                  size={30}
                  className="cursor-pointer"
                  onClick={handleUserIconClick}
                />
              )}
            </Nav>
            <Button variant="primary" href="/signup" className="ms-3">
              Sign Up
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Modal show={showUserModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>User Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loggedInUser ? (
            <div>
              <p><strong>Name:</strong> {loggedInUser.name}</p>
              <p><strong>Phone:</strong> {loggedInUser.phone}</p>
              <p><strong>Logged in at:</strong> {formattedLoginTime}</p>
            </div>
          ) : (
            <p>No user data available.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NavbarE;

