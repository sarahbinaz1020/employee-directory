import React from "react";
import "../index.css";
import { Row, Figure, Col } from "react-bootstrap";

// header for page
function Main({ children }) {
  return (
    <>
      <div className="header pt-2 pb-2 text-center">
        <Row>
          <Col>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={process.env.PUBLIC_URL + "/generic-logo.jpg"}
              />
            </Figure>
          </Col>
          <Col>
            <h1 className="title">Employee Directory</h1>
            <p className="subtitle">
              Search below for employees in the company
            </p>
          </Col>
        </Row>
      </div>

      {children}
      <footer>Est. 2021</footer>
    </>
  );
}

export default Main;
