import React from "react";
import "../index.css"

function Main({ children }) {
  return (
    <>
      <div className="header pt-2 pb-2 text-center">
        <h1 className="title">Employee Directory</h1>
        <p className="subtitle">Search below for employees in the company</p>
      </div>
      {children}
      <footer>Est. 2021</footer>
    </>
  );
}

export default Main;
