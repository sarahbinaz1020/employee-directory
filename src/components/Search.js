import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";
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
    
        <div>
        <SearchForm
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}
        />
      </div>
      );
    }
  }
  
  export default Search;
  