import React, { Component } from "react";
import API from "../utils/API";
// import Users from "./Users";

class Search extends Component {
    state = {
      search: "",
      breeds: [],
      results: [],
      error: ""
    };
  
    // When the component mounts, get a list of all available base breeds and update this.state.breeds
    componentDidMount() {
      API.getUsers()
        .then(res => this.setState({ breeds: res.data.message }))
        .catch(err => console.log(err));
    }
  
    handleInputChange = event => {
      this.setState({ search: event.target.value });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      API.getUsers(this.state.search)
        .then(res => {
          if (res.data.status === "error") {
            throw new Error(res.data.message);
          }
          this.setState({ results: res.data.message, error: "" });
        })
        .catch(err => this.setState({ error: err.message }));
    };
    render() {
      return (
          <>
        <div className="searchbox">
        <input type="search" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        {/* <span class="input-group-text" id="basic-addon2">@example.com</span> */}
      </div>
      </>
      );
    }
  }
  
  export default Search;
  