import React from "react";
import "../index.css";
import {
  Row,
  Figure,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

// header for page
function Main({ children }) {
  return (
    <>
      <div className="header">
        <Row>
          <Col sm={2}>
            <Figure className="mt-2 ml-4 text-center">
              <Figure.Image
                width={141}
                height={160}
                alt="171x180"
                src={process.env.PUBLIC_URL + "/generic-logo.jpg"}
              />
            </Figure>
          </Col>
          <Col>
          {/* Navbar for looks only for overall presentation */}
            <Navbar className="position-absolute bottom-0 end-0 mr-3">
              <Nav className="text-white">
                <Nav.Link className="text-white" href="#home">
                  Home
                </Nav.Link>
                <Nav.Link className="text-white" href="#features">
                  Features
                </Nav.Link>
                <Nav.Link className="text-white" href="#pricing">
                  Pricing
                </Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button className="text-white" variant="outline-secondary">
                  Search
                </Button>
              </Form>
            </Navbar>
          </Col>
        </Row>
      </div>

      {children}
      
    </>
  );
}

export default Main;
