// import React from "react";
// import { Container, Row, Col, Nav, Form, Button } from 'react-bootstrap';


// function Footer() {
//   return (
  

//    <>
//         <footer className="py-5">
//       <Container>
//         <Row>
//           <Col xs={2}>
//             <h5>Section</h5>
//             <Nav className="flex-column">
//               <Nav.Item className="mb-2">
//                 <Nav.Link href="#" className="p-0 text-muted">Home</Nav.Link>
//               </Nav.Item>
//               <Nav.Item className="mb-2">
//                 <Nav.Link href="#" className="p-0 text-muted">Features</Nav.Link>
//               </Nav.Item>
//               <Nav.Item className="mb-2">
//                 <Nav.Link href="#" className="p-0 text-muted">Pricing</Nav.Link>
//               </Nav.Item>
//               <Nav.Item className="mb-2">
//                 <Nav.Link href="#" className="p-0 text-muted">FAQs</Nav.Link>
//               </Nav.Item>
//               <Nav.Item className="mb-2">
//                 <Nav.Link href="#" className="p-0 text-muted">About</Nav.Link>
//               </Nav.Item>
//             </Nav>
//           </Col>

//           <Col xs={2}>
//             <h5>Section</h5>
//             <Nav className="flex-column">
//               <Nav.Item className="mb-2">
//                 <Nav.Link href="#" className="p-0 text-muted">Home</Nav.Link>
//               </Nav.Item>
//               <Nav.Item className="mb-2">
//                 <Nav.Link href="#" className="p-0 text-muted">Features</Nav.Link>
//               </Nav.Item>
//               <Nav.Item className="mb-2">
//                 <Nav.Link href="#" className="p-0 text-muted">Pricing</Nav.Link>
//               </Nav.Item>
//               <Nav.Item className="mb-2">
//                 <Nav.Link href="#" className="p-0 text-muted">FAQs</Nav.Link>
//               </Nav.Item>
//               <Nav.Item className="mb-2">
//                 <Nav.Link href="#" className="p-0 text-muted">About</Nav.Link>
//               </Nav.Item>
//             </Nav>
//           </Col>

//           <Col xs={2}>
//             <h5>Section</h5>
//             <Nav className="flex-column">
//               <Nav.Item className="mb-2">
//                 <Nav.Link href="#" className="p-0 text-muted">Home</Nav.Link>
//               </Nav.Item>
//               <Nav.Item className="mb-2">
//                 <Nav.Link href="#" className="p-0 text-muted">Features</Nav.Link>
//               </Nav.Item>
//               <Nav.Item className="mb-2">
//                 <Nav.Link href="#" className="p-0 text-muted">Pricing</Nav.Link>
//               </Nav.Item>
//               <Nav.Item className="mb-2">
//                 <Nav.Link href="#" className="p-0 text-muted">FAQs</Nav.Link>
//               </Nav.Item>
//               <Nav.Item className="mb-2">
//                 <Nav.Link href="#" className="p-0 text-muted">About</Nav.Link>
//               </Nav.Item>
//             </Nav>
//           </Col>

//           <Col xs={4} className="offset-1">
//             <Form>
//               <h5>Subscribe to our newsletter</h5>
//               <p>Monthly digest of what's new and exciting from us.</p>
//               <div className="d-flex w-100 gap-2">
//                 <Form.Label htmlFor="newsletter1" visuallyHidden>Email address</Form.Label>
//                 <Form.Control id="newsletter1" type="text" placeholder="Email address" />
//                 <Button variant="primary" type="button">Subscribe</Button>
//               </div>
//             </Form>
//           </Col>
//         </Row>

//         <div className="d-flex justify-content-between py-4 my-4 border-top">
//           <p>© 2021 Company, Inc. All rights reserved.</p>
//           <ul className="list-unstyled d-flex">
//             <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
//             <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
//             <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
//           </ul>
//         </div>
//       </Container>
//     </footer>
//    </>
    
//   );
// }

// export default Footer;




import React from "react";
import { Container, Row, Col, Nav } from 'react-bootstrap';

function Footer() {
  return (
    <>
      <footer className="py-3" style={{ backgroundColor: '#343a40', color: '#fff' }}>
        <Container>
          <Row>
            <Col xs={12} sm={6} md={3}>
              <h6>Quick Links</h6>
              <Nav className="flex-column">
                <Nav.Item className="mb-1">
                  <Nav.Link href="#" className="p-0 text-muted">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-1">
                  <Nav.Link href="#" className="p-0 text-muted">Features</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-1">
                  <Nav.Link href="#" className="p-0 text-muted">Pricing</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-1">
                  <Nav.Link href="#" className="p-0 text-muted">FAQs</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-1">
                  <Nav.Link href="#" className="p-0 text-muted">About</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col xs={12} sm={6} md={3}>
              <h6>Customer Service</h6>
              <Nav className="flex-column">
                <Nav.Item className="mb-1">
                  <Nav.Link href="#" className="p-0 text-muted">Contact Us</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-1">
                  <Nav.Link href="#" className="p-0 text-muted">Support</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-1">
                  <Nav.Link href="#" className="p-0 text-muted">Returns</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-1">
                  <Nav.Link href="#" className="p-0 text-muted">Shipping Info</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-1">
                  <Nav.Link href="#" className="p-0 text-muted">Order Tracking</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col xs={12} sm={6} md={3}>
              <h6>Legal</h6>
              <Nav className="flex-column">
                <Nav.Item className="mb-1">
                  <Nav.Link href="#" className="p-0 text-muted">Privacy Policy</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-1">
                  <Nav.Link href="#" className="p-0 text-muted">Terms of Service</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-1">
                  <Nav.Link href="#" className="p-0 text-muted">Cookie Policy</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            {/* Google Map Embed Section */}
            <Col xs={12} sm={12} md={3}>
              <h6>Our Location</h6>
              <div
                className="embed-responsive"
                style={{
                  position: "relative",
                  paddingBottom: "40%",  // Reduced padding to make it smaller
                  height: "0",
                  overflow: "hidden",
                  maxWidth: "100%",
                  height: "100%",
                  marginBottom: '15px',
                  borderRadius: '8px',
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1469354.2542803065!2d75.71914204218751!3d26.91243341750276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4f419e3b04db%3A0x44a043f004d2c24f!2sJaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sus!4v1678304286467!5m2!1sen!2sus"
                  style={{
                    border: 0,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: '8px',
                  }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </Col>
          </Row>

          <div className="d-flex justify-content-between py-3 my-3 border-top" style={{ borderColor: '#565656' }}>
            <p>© 2021 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-light" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#twitter"></use>
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-light" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-light" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#facebook"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
