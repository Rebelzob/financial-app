import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoIosArrowBack, IoIosCog } from 'react-icons/io';
import './navBar.css';

const NavBar = () => (
  <Navbar variant="dark" expand="lg">
    <Container>
      <div className="ml-auto">
        <Nav>
          <Nav.Link as={Link} to="/">
            <IoIosArrowBack />
          </Nav.Link>
        </Nav>
      </div>
      <div className="mr-auto">
        <Navbar.Brand as={Link} to="/" className="mx-auto">
          Stock Tracker
        </Navbar.Brand>
      </div>
      <div className="ml-auto">
        <Nav>
          <Nav.Link>
            <IoIosCog />
          </Nav.Link>
        </Nav>
      </div>
    </Container>
  </Navbar>
);

export default NavBar;
