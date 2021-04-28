import React from "react";

function SearchForm ( { handleFormSubmit, handleInputChange }) {
    return (
        <div className="searchbox container">
        <input type="text"
        name="search" 
        value
        className="form-control" 
        placeholder="Search" 
        aria-label="Recipient's username" 
        aria-describedby="basic-addon2"
        onChange={handleInputChange}
        />
        <div>
        <button onClick={handleFormSubmit} className="btn btn-secondary">Search</button>

        </div>
        
        </div>
    )
}

export default SearchForm;