import React from "react";
import "./App.css";
import API from "./utils/API";
import Main from "./components/Main";
import Search from "./components/Search";
import Users from "./components/Users";

class App extends React.Component {
  state = {
    employees: [],
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
    if (employee.name.includes(this.state.search)) {
      return true;
    }
    if (employee.phone.includes(this.state.search)) {
      return true;
    }
    if (employee.email.includes(this.state.search)) {
      return true;
    }
    if (employee.dob.includes(this.state.search)) {
      return true;
    }
    return false;
  };
  // const employees = [{ name: abc, phone: 1234 }, { name: def, phone: 567}]
  render() {
    const { employees } = this.state;
    return (
      <>
        <Main />
        <Search />
        <Users
          employees = { employees }
        />
      </>
    );
  }
}
export default App;
