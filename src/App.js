import React from "react";
import "./App.css";
import Main from "./components/Main";
import SearchForm from "./components/SearchForm";
import Users from "./components/Users";
import API from "./utils/API";
import "../src/App.css";

class App extends React.Component {
  state = {
    employees: [],
    search: "",
    filteredEmployees: [],
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
    this.setState({ employees, filteredEmployees: employees });
  };

  sortEmployees = (a, b) => {
    const sortedEmployees = this.state.filteredEmployees.sort((a, b) => {
      var nameA = a.name.split(" ")[1].toUpperCase();
      var nameB = b.name.split(" ")[1].toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    // this.setState ({ employees });
    this.setState({ filteredEmployees: sortedEmployees });
  };

  filterEmployees = (employee) => {
    for (const key in employee) {
      if (key === "image") continue;
      if (employee.name.includes(this.state.search)) {
        return true;
      }
    }
    return false;
  };

  handleInputChange = async (event) => {
    await this.setState({ search: event.target.value.toLowerCase() });
    const input = this.state.search;
    const newArray = this.state.employees.filter((item) => {
      console.log(item.name, input);
      return item.name.toLowerCase().includes(input);
    });
    console.log(newArray);
    this.setState({ filteredEmployees: newArray });
  };

  render() {
    const { filteredEmployees, employees } = this.state;

    return (
      <>
        <Main>
          <SearchForm handleInputChange={this.handleInputChange} />
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <button
              type="button"
              className="btn btn-primary text-center mb-2"
              id="sortlastbtn"
              data-bs-toggle="button"
              autocomplete="off"
              onClick={this.sortEmployees}
            >
              Sort A-Z by Last Name
            </button>
          </div>
          <div>
            {employees.length === 0 ? (
              <h2>No Employees!</h2>
            ) : (
              <Users employees={filteredEmployees} />
            )}{" "}
          </div>
        </Main>
      </>
    );
  }
}
export default App;
