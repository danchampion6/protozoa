import React from "react";

import MenuItem from 'react-bootstrap/lib/MenuItem';
import Nav from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import Navbar from 'react-bootstrap/lib/Navbar';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Button from 'react-bootstrap/lib/Button';

export default class Header extends React.Component {
	render(){
		return(
			<Navbar bsStyle="default" fixedBottom="true">
			<Nav pullRight>
	
			<NavDropdown eventKey={3} title="Settings" id="basic-nav-dropdown">

        <MenuItem eventKey={3.1}>View Project</MenuItem>
        <MenuItem eventKey={3.2}>Export as VR</MenuItem>
        <MenuItem eventKey={3.3}>Share Project</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Save Project</MenuItem>
      </NavDropdown>
    
      </Nav>
      </Navbar>
		);
	}
}