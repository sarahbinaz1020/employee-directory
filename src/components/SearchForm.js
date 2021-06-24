import React from "react";
import { Form, InputGroup } from "react-bootstrap";

// search bar
function SearchForm({ handleInputChange }) {
  return (
    <InputGroup className="container mt-3 mb-3">
      
      <Form.Control
        placeholder="Search by name..."
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={handleInputChange}
      />
    </InputGroup>
  );
}
export default SearchForm;
