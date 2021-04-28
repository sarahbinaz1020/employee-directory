import React from "react";
import "./App.css";
import Main from "./components/Main";
import Search from "./components/Search";
// import Users from "./components/Users";

class App extends React.Component {
  
  // const employees = [{ name: abc, phone: 1234 }, { name: def, phone: 567}]
  render() {
    
    return (
      <>
        <Main>
        <Search />
        {/* <Users /> */}
        </Main>
      </>
    );
  }
}
export default App;
