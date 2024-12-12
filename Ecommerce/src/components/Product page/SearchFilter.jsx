import React from "react";
import { Form, FormControl, Button, InputGroup } from "react-bootstrap";

const SearchFilter = ({ searchCriteria, setSearchCriteria }) => {
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

      {/* Discount Range */}
      <FormControl
        type="number"
        name="discount"
        placeholder="Max Discount"
        value={searchCriteria.discount}
        onChange={handleInputChange}
        className="me-2 mb-3 mb-md-0"
      />

      <Button 
        variant="outline-secondary" 
        onClick={() => setSearchCriteria({ title: "", category: "", price: "", discount: "" })} 
        className="mt-3 mt-md-0"
      >
        Clear Filters
      </Button>
    </Form>
  );
};

export default SearchFilter;
