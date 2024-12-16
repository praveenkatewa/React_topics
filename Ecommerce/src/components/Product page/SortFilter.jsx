import React from "react";
import { Form, Button } from "react-bootstrap";

const SortAndFilter = ({ priceRange, setPriceRange, resetFilters }) => {
  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  return (
    <div className="filter-panel">
      <Form>
        <Form.Label className="fs-5">Price Range</Form.Label>
        <div className="d-flex flex-column mb-4">
          <Form.Check
            type="radio"
            label="Under $50"
            value="under50"
            checked={priceRange === "under50"}
            onChange={handlePriceRangeChange}
            name="priceRange"
          />
          <Form.Check
            type="radio"
            label="$50 - $100"
            value="50-100"
            checked={priceRange === "50-100"}
            onChange={handlePriceRangeChange}
            name="priceRange"
          />
          <Form.Check
            type="radio"
            label="$100 - $200"
            value="100-200"
            checked={priceRange === "100-200"}
            onChange={handlePriceRangeChange}
            name="priceRange"
          />
          <Form.Check
            type="radio"
            label="Over $200"
            value="over200"
            checked={priceRange === "over200"}
            onChange={handlePriceRangeChange}
            name="priceRange"
          />
        </div>
        

        <Button variant="outline-secondary" onClick={resetFilters} className="w-100 mt-4">
          Clear Filters
        </Button>
      </Form>
    </div>
  );
};

export default SortAndFilter;
