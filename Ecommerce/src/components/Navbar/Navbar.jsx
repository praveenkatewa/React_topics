import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";

function NavbarE() {
  


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        
        <Navbar.Brand href="/">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.26rAEhQ_3jCCjcR55BmtIQHaFj&pid=Api&P=0&h=220"  height="50" width="100" />
        </Navbar.Brand>
        


        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
         
          <Nav className="ms-auto">
           
          
          </Nav>

        
          <Button variant="primary" href="/signup" className="ms-3">
            Sign Up
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarE;

