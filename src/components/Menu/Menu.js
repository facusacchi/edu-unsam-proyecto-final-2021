import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <Navbar collapseOnSelect bg="dark" variant={"dark"} expand="md">
              <Container>
                <Navbar.Brand>Appcess</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link to={"/home"} as={Link} >Home</Nav.Link>
                    <Nav.Link to={"/logs"} as={Link}>Logs</Nav.Link>
                    <Nav.Link to={"/contacto"} as={Link}>Contacto</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
          </Navbar>
    );
}

export default Menu;