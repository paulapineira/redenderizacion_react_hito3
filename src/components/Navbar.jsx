import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; 

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <Nav className="navbar">
      <div className="d-flex align-items-center">
        <span className="navbar-title">Pizzería Mamma Mía!</span>
        <div className="nav-buttons d-flex">
          <Button variant="outline-light" className="mx-2" href="#home">🍕Home</Button>
          {token ? (
            <>
              <Button variant="outline-light" className="mx-2" href="#profile">Profile</Button>
              <Button variant="outline-light" className="mx-2" href="#logout">Logout</Button>
            </>
          ) : (
            <>
              <Button variant="outline-light" className="mx-2" href="#login">🔒Login</Button>
              <Button variant="outline-light" className="mx-2" href="#register">🔒Register</Button>
            </>
          )}
        </div>
      </div>
      <Button variant="outline-light" className="total-button">
        🛒 Total: {total.toLocaleString()}
      </Button>
    </Nav>
  );
};

export default Navbar;