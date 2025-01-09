
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "bootstrap/dist/css/bootstrap.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import './App.css';
import SearchFilter from './SearchFilter';
import SortAndFilter from './SortFilter';


const APiFetchProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cart, setCart] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    title: "",
    category: "",
    price: "",
    discount: "",
  });
  const [sortCriteria, setSortCriteria] = useState({
    sortBy: "",
    sortDirection: "asc",
  });
  const [priceRange, setPriceRange] = useState("");

  

  useEffect(() => {
    ApiFetch();
  }, []);

  const ApiFetch = async () => {
    setLoading(true);
    const result = await axios.get("https://dummyjson.com/products");
    setData(result.data.products);
    setLoading(false);
  };

  const load = () => {
    setLoading(!loading);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const resetFilters = () => {
    setSearchCriteria({
      title: "",
      category: "",
      price: "",
      discount: "",
    });
    setSortCriteria({
      sortBy: "",
      sortDirection: "asc",
    });
    setPriceRange("");
  };

  const filteredData = data.filter((item) => {
    const titleMatch = item.title.toLowerCase().includes(searchCriteria.title.toLowerCase());
    const categoryMatch = searchCriteria.category ? item.category.toLowerCase() === searchCriteria.category.toLowerCase() : true;
    const priceMatch = searchCriteria.price ? item.price <= parseFloat(searchCriteria.price) : true;
    const discountMatch = searchCriteria.discount ? item.discountPercentage <= parseFloat(searchCriteria.discount) : true;

    let priceRangeMatch = true;
    if (priceRange === "under50") priceRangeMatch = item.price < 50;
    if (priceRange === "50-100") priceRangeMatch = item.price >= 50 && item.price <= 100;
    if (priceRange === "100-200") priceRangeMatch = item.price > 100 && item.price <= 200;
    if (priceRange === "over200") priceRangeMatch = item.price > 200;

    return titleMatch && categoryMatch && priceMatch && discountMatch && priceRangeMatch;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    const { sortBy, sortDirection } = sortCriteria;

    if (sortBy === "title") {
      return sortDirection === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    } else if (sortBy === "price") {
      return sortDirection === "asc" ? a.price - b.price : b.price - a.price;
    } else if (sortBy === "discountPercentage") {
      return sortDirection === "asc"
        ? a.discountPercentage - b.discountPercentage
        : b.discountPercentage - a.discountPercentage;
    } else {
      return 0;
    }
  });

  const addToCart = (item) => {
    const newCart = [...cart];
    const existingItem = newCart.find((product) => product.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1; // Increase quantity if already in cart
    } else {
      newCart.push({ ...item, quantity: 1 }); // Add new item with quantity 1
    }
    setCart(newCart);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <div>
      <Container className="mt-4">
        <h2 className="text-center">Product List</h2>

        {/* Search Filter Section */}
        <div className="d-flex justify-content-center mb-4">
          <SearchFilter
            searchCriteria={searchCriteria}
            setSearchCriteria={setSearchCriteria}
            cart={cart}
            setSelectedItem={setSelectedItem}
          />
        </div>

        <Row>
          {/* Filter Panel */}
          <Col md={3}>
            <div className="filter-panel mb-4">
              <SortAndFilter
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                resetFilters={resetFilters}
              />
            </div>
          </Col>

          {/* Product Cards Section */}
          <Col md={9}>
            <div className="product-list-container">
              {loading ? (
                <div className="d-flex justify-content-center">
                  <Spinner animation="border" variant="primary" />
                </div>
              ) : (
                <Row>
                  {sortedData.map((item) => (
                    <Col md={4} sm={6} xs={12} key={item.id} className="mb-4">
                      <Card className="product-card">
                        <LazyLoadImage
                          effect="blur"
                          src={item.thumbnail}
                          alt={item.title}
                          className="card-img-top product-image"
                          loading="lazy"
                        />
                        <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>Category: {item.category}</Card.Text>
                          <Card.Text>Price: ${item.price}</Card.Text>
                          <Card.Text>Discount: {item.discountPercentage}%</Card.Text>
                          <Button variant="success" className="mt-2" onClick={() => addToCart(item)}>
                            Add to Cart
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              )}
            </div>
          </Col>
        </Row>

        {/* Cart Modal */}
        {selectedItem && selectedItem.cart && (
          <Modal show onHide={closeModal} centered size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Shopping Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <ul>
                  {cart.map((item) => (
                    <li key={item.id}>
                      <div>
                        <h5>{item.title}</h5>
                        <p>Quantity: {item.quantity}</p>
                        <Button
                          variant="danger"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
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

export default APiFetchProduct;
