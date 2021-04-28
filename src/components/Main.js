import React from "react";
// import Search from "./Search";
// import Users from "./Users";


function Main({children}) {
    return (
        <>
        <div className="jumbotron bg-info  text-center">
        <h1>Employee Directory</h1>
        <p className="text-center">
          Search below for employees in the company
        </p>
      </div>
      {children}
      <footer>
          Est. 2021
      </footer>
      </>
    )
}

export default Main

