import React from "react";

function SearchForm () {
    return (
        <div className="searchbox container">
        <input type="search" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        {/* <span class="input-group-text" id="basic-addon2">@example.com</span> */}
      </div>
    )
}

export default SearchForm;