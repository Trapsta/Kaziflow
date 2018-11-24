import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends Component {
	render () {
		return(
				<Navbar inverse collapseOnSelect>
				  <Navbar.Header>
				    <Navbar.Brand>
				      <a href="#brand">Kaziflow</a>
				    </Navbar.Brand>
				    <Navbar.Toggle />
				  </Navbar.Header>
				  <Navbar.Collapse>
				    <Nav>
				      <NavItem eventKey={1} href="#">
				        <Link to="/reviews">Company Reviews</Link>
				      </NavItem>
				      <NavItem eventKey={2} href="#">
				        <Link to="/interviews">Interviews</Link>
				      </NavItem>
				      <NavItem eventKey={3} href="#">
				      	<Link to="/salaries">Salaries</Link>				        
				      </NavItem>				      
				    </Nav>
				    <Nav pullRight>
				      <NavItem eventKey={1} href="#">
				       Sign in
				      </NavItem>
				      <NavItem eventKey={2} href="#">
				       Sign Up
				      </NavItem>
				    </Nav>
				  </Navbar.Collapse>
				</Navbar>
			);
	}
}

export default Header;
