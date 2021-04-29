import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";


function SearchForm ({ handleInputChange }) {
  return (<InputGroup className="container mb-3">
  <Form.Control
    placeholder="Employee's Name"
    aria-label="Recipient's username"
    aria-describedby="basic-addon2"
    onChange={handleInputChange}
  />
</InputGroup>)
}
export default SearchForm;