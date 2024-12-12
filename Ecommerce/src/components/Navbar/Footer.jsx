import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <Container>
        <Row>
          <Col>
            <p className="mb-0 text-center">
              &copy; {new Date().getFullYear()} E-Commerce Website. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
