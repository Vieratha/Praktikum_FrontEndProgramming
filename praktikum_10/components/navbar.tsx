"use client";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

export default function NavBar() {
  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
      className="shadow-sm"
    >
      <Container fluid="lg">
        <Navbar.Brand href="#home" className="fw-bold">
          Navbar Scroll
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-navbar"
          aria-label="Buka menu navigasi"
        />

        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>

            <NavDropdown title="Link" id="navbar-dropdown">
              <NavDropdown.Item href="#action-1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action-2">
                Another Action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action-3">
                Something Else
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          <Form
            className="d-flex mt-3 mt-lg-0 mb-3 mb-lg-0"
            role="search"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="me-2"
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
