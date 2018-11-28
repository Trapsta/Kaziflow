import React, { Component } from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends Component {
	render () {
		return(
				<Navbar inverse collapseOnSelect>
				  <Navbar.Header>
				    <Navbar.Brand>
				      <Link to="/">Kaziflow</Link>
				    </Navbar.Brand>
				    <Navbar.Toggle />
				  </Navbar.Header>
				  <Navbar.Collapse>
				    <Nav>
				    	<LinkContainer to="/reviews">
				      		<NavItem eventKey={1}>Reviews</NavItem>
				      	</LinkContainer>

				      	<LinkContainer to="/interviews">
				      		<NavItem eventKey={2}>Interviews</NavItem>
				      	</LinkContainer>

				      	<LinkContainer to="/salaries">
				      		<NavItem eventKey={3}>Salaries</NavItem>
				      	</LinkContainer>			      
				    </Nav>
				    <Nav pullRight>
				    	<LinkContainer to="/login">
					      <NavItem eventKey={1}>
					       Sign in
					      </NavItem>
					    </LinkContainer>
					    <LinkContainer to="/signup">
					      <NavItem eventKey={2} href="#">
					       Sign Up
					      </NavItem>
					    </LinkContainer>
				    </Nav>
				  </Navbar.Collapse>
				</Navbar>
			);
	}
}

export default Header;
