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
            <NavItem eventKey={1} >
              <Link to='/Rank'>PvP Rank</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to='/Character'>Character Profile</Link>
            </NavItem>
            <NavItem eventKey={3}>
              <Link to='/RealmStatus'>Realm Status</Link>
            </NavItem>
            <NavItem eventKey={4} >
              <Link to='/Pets'>Pets</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header;
