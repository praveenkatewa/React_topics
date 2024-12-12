import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";

const Apitest = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [search, setSearch] = useState("");
  const [sortCriteria, setSortCriteria] = useState("");

  useEffect(() => {
    ApiFetch();
  }, []);

  const ApiFetch = async () => {
    const result = await axios.get("https://dummyjson.com/products");
    setData(result.data.products);
  };

  const load = () => {
    setLoading(!loading);
  };

  const details = async (id) => {
    console.log(`User ID: ${id}`);
    const result = await axios.get(`https://dummyjson.com/products/${id}`);
    console.log(`apidetails>>id>>`, result.data);
    setSelectedItem(result.data);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortCriteria === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortCriteria === "price") {
      return a.price - b.price;
    } else if (sortCriteria === "discount") {
      return a.discountPercentage - b.discountPercentage;
    } else {
      return 0;
    }
  });

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Product API</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Button variant="secondary" onClick={load} className="me-2">
                {loading ? "Stop Loading" : "Load Data"}
              </Button>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search product"
                className="me-2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Form.Select
                className="me-2"
                onChange={(e) => setSortCriteria(e.target.value)}
                value={sortCriteria}
              >
                <option value="">Sort By</option>
                <option value="title">Title</option>
                <option value="price">Price</option>
                <option value="discount">Discount</option>
              </Form.Select>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <h2>Products</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="row">
            {sortedData.map((item) => (
              <div className="col-md-4 mb-4" key={item.id}>
                <div className="card">
                  <img
                    src={item.thumbnail}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Category: {item.category}</p>
                    <p className="card-text">Price: ${item.price}</p>
                    <p className="card-text">
                      Discount Percentage: {item.discountPercentage}%
                    </p>
                    <Button
                      variant="primary"
                      onClick={() => details(item.id)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedItem && (
          <Modal show onHide={closeModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>{selectedItem.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedItem.images}
                alt={selectedItem.title}
                className="img-fluid mb-3"
              />
              <p>Category: {selectedItem.category}</p>
              <p>Price: ${selectedItem.price}</p>
              <p>Description: {selectedItem.description}</p>
              <p>Rating: {selectedItem.rating}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
    </div>
  );
};

export default Apitest;