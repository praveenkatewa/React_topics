import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function MainSection() {
  return (
    <Container className="text-center my-5">
      <Row className="align-items-center">
      
        <Col md={6} className="text-md-start text-center">
          <h1>Welcome to E-Commerce Shopping</h1>
          <p className="mt-4">
            Discover the best deals on a wide range of products! From electronics to fashion, we have everything you need.
            Enjoy a seamless shopping experience with fast delivery and exceptional customer service.
          </p>
         
        </Col>

        
        <Col md={6}>
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.h341XOlO_Q0qO89YMPIAyAHaEK&pid=Api&P=0&h=220" height="100%" width="100%"
            alt="E-Commerce Banner"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default MainSection;
