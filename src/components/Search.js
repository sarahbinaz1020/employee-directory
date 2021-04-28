import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";
import Users from "./Users"
// import Users from "./Users";

class Search extends Component {
    state = {
        employees: [],
        search: ""
      };
    
      componentDidMount() {
        this.getEmployees();
      }
    
      getEmployees = async () => {
        const { data } = await API.getUsers();
        // name
        // email
        // image
        // phone
        // DOB
        const employees = data.results.map((item) => ({
          name: `${item.name.first} ${item.name.last}`,
          email: item.email,
          phone: item.cell,
          dob: item.dob.date,
          image: item.picture.thumbnail,
        }));
        this.setState({ employees });
      };
    
      filterEmployees = (employee) => {

        const filteredArray = this.state.employees.filter((employee) => {
            let values = Object.values(employee).join("").toLowerCase();
            return values.indexOf(employee.toLowerCase()) !== -1;
        });
        this.setState({ employees: filteredArray })
        // if (employee.name.includes(this.state.search)) {
        //   return true;
        // }
        // if (employee.phone.includes(this.state.search)) {
        //   return true;
        // }
        // if (employee.email.includes(this.state.search)) {
        //   return true;
        // }
        // if (employee.dob.includes(this.state.search)) {
        //   return true;
        // }
        // return false;
      };
  
    handleInputChange = event => {
      this.setState({ search: event.target.value }, console.log(this.state.search));
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
        this.filterEmployees(this.state.search);
    };
    render() {
        const { employees } = this.state;
      return (
    
        <div>
        <SearchForm
        value={this.state.search}
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}
        />
        <Users
          employees = { employees }
          />
      </div>
      );
    }
  }
  
  export default Search;
  