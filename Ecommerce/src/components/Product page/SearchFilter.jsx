

import React from "react";
import { Form, FormControl, Button, InputGroup, Badge } from "react-bootstrap";
import { FaShoppingCart } from 'react-icons/fa'; // You can use any icon library (react-icons is recommended)

const SearchFilter = ({ searchCriteria, setSearchCriteria, cart, setSelectedItem }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Form className="d-flex flex-column flex-md-row align-items-center">
      {/* Title Search */}
      <InputGroup className="me-2 mb-3 mb-md-0" style={{ maxWidth: "300px" }}>
        <InputGroup.Text><i className="bi bi-search"></i></InputGroup.Text>
        <FormControl
          type="search"
          placeholder="Search by title"
          name="title"
          value={searchCriteria.title}
          onChange={handleInputChange}
        />
      </InputGroup>

      {/* Category Search */}
      <FormControl
        as="select"
        name="category"
        className="me-2 mb-3 mb-md-0"
        value={searchCriteria.category}
        onChange={handleInputChange}
      >
        <option value="">Category</option>
        <option value="beauty">Beauty</option>
        <option value="furniture">Furniture</option>
        <option value="groceries">Groceries</option>
        <option value="fragrances">Fragrances</option>
        {/* More categories */}
      </FormControl>

      {/* Price Range */}
      <FormControl
        type="number"
        name="price"
        placeholder="Max Price"
        value={searchCriteria.price}
        onChange={handleInputChange}
        className="me-2 mb-3 mb-md-0"
      />

      {/* Clear Filters Button */}
      <Button 
        variant="outline-secondary" 
        onClick={() => setSearchCriteria({ title: "", category: "", price: "", discount: "" })} 
        className="mt-3 mt-md-0"
        style={{ minWidth: "150px", padding: "10px 20px" }}
      >
        Clear Filters
      </Button>

      {/* View Cart Button */}
      <div className="cart-summary mt-3 mt-md-0 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <FaShoppingCart size={24} className="me-2" />
          <h5 className="mb-0">Cart</h5>
          {cart.length > 0 && (
            <Badge bg="danger" pill className="ms-2">
              {cart.length}
            </Badge>
          )}
        </div>
        <Button 
          variant="info" 
          onClick={() => setSelectedItem({ cart })} 
          style={{ padding: "8px 16px", minWidth: "120px" }}
          className="d-flex align-items-center"
        >
          <i className="bi bi-cart-check me-2"></i>
          View Cart
        </Button>
      </div>
    </Form>
  );
};

export default SearchFilter;
