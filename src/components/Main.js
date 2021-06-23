import React from "react";
import "../index.css";
import { Row, Figure, Col } from "react-bootstrap";

// header for page
function Main({ children }) {
  return (
    <>
      <div className="header pt-2 pb-2">
        <Row className="align-items-center">
          <Col sm={2} fluid>
            <Figure className="ml-4 text-center">
              <Figure.Image
                width={141}
                height={160}
                alt="171x180"
                src={process.env.PUBLIC_URL + "/generic-logo.jpg"}
              />
            </Figure>
          </Col>
          <Col sm={10} fluid>
            <h1 className="title fw-bolder">Employee Directory</h1>
          </Col>
        </Row>
      </div>

      {children}
      <footer className="footer text-center">Est. 2021</footer>
    </>
  );
}

export default Main;
