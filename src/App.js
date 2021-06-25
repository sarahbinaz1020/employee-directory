import React from "react";
import "./App.css";
import Main from "./components/Main";
import SearchForm from "./components/SearchForm";
import Users from "./components/Users";
import API from "./utils/API";
import "../src/App.css";
import { Row, Col, Dropdown } from "react-bootstrap";
import { BsPeople } from "react-icons/bs";

class App extends React.Component {
  state = {
    employees: [],
    search: "",
    filteredEmployees: [],
  };

  componentDidMount() {
    this.getEmployees();
  }
  // pull data from API database
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

  // function to sort employees A-Z
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

  // function to sort employees Z-A
  sortEmployeesBackwards = (a, b) => {
    const sortedEmployeesBackwards = this.state.filteredEmployees.sort(
      (a, b) => {
        var nameA = a.name.split(" ")[1].toUpperCase();
        var nameB = b.name.split(" ")[1].toUpperCase();

        if (nameB < nameA) {
          return -1;
        }
        if (nameB > nameA) {
          return 1;
        }
        return 0;
      }
    );
    // this.setState ({ employees });
    this.setState({ filteredEmployees: sortedEmployeesBackwards });
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
        {/* generic logo and company placeholder company links*/}
        <Main>
          <Row className="mt-3">
            <Col sm={2}>
              <BsPeople className="employeeIcon position-absolute top-50 start-50 translate-middle"></BsPeople>
            </Col>
            <Col sm={3}>
              <h1 className="title fw-bolder">Employee Directory</h1>
            </Col>
            <Col sm={8}></Col>
          </Row>
          <Row>
            <Col sm={2} fluid>
              {/* search bar and filter button */}
              <SearchForm handleInputChange={this.handleInputChange} />
              <p className="mt-4 text-center">Sort by Last Name</p>
              <div
                key="button"
                className="d-grid gap-2 d-md-flex justify-content-md-center"
              >
                <button
                  type="button"
                  className="btn btn-primary text-center mb-2"
                  id="sortlastbtn"
                  data-bs-toggle="button"
                  autoComplete="off"
                  onClick={this.sortEmployees}
                >
                  A-Z
                </button>
                <button
                  type="button"
                  className="btn btn-primary text-center mb-2"
                  id="sortlastbtn"
                  data-bs-toggle="button"
                  autoComplete="off"
                  onClick={this.sortEmployeesBackwards}
                >
                  Z-A
                </button>
              </div>
              <Row className="mt-4 justify-content-md-center">
                <p className="text-center">Filter by DOB-Month</p>
                <Dropdown className="d-inline mx-2 justify-content-md-center">
                  <Dropdown.Toggle id="dropdown-autoclose-true">
                    Month
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">January</Dropdown.Item>
                    <Dropdown.Item href="#">February</Dropdown.Item>
                    <Dropdown.Item href="#">March</Dropdown.Item>
                    <Dropdown.Item href="#">April</Dropdown.Item>
                    <Dropdown.Item href="#">May</Dropdown.Item>
                    <Dropdown.Item href="#">June</Dropdown.Item>
                    <Dropdown.Item href="#">July</Dropdown.Item>
                    <Dropdown.Item href="#">August</Dropdown.Item>
                    <Dropdown.Item href="#">September</Dropdown.Item>
                    <Dropdown.Item href="#">October</Dropdown.Item>
                    <Dropdown.Item href="#">November</Dropdown.Item>
                    <Dropdown.Item href="#">December</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Row>
            </Col>
            <Col sm={10} fluid>
              {/* catch for errors */}
              <div>
                {employees.length === 0 ? (
                  <h2>No Employees!</h2>
                ) : (
                  // user table
                  <Users employees={filteredEmployees} />
                )}{" "}
              </div>
            </Col>
          </Row>
          <footer className="footer text-center position-fixed-bottom">
            Est. 2021
          </footer>
        </Main>
      </>
    );
  }
}
export default App;
