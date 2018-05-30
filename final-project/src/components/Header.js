import React from 'react';
import { Link } from 'react-router-dom';
import {Nav, NavItem, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/Rank">
              PvP Rank
            </NavItem>
            <NavItem eventKey={2} href="/Character">
              Character Profile
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header;
