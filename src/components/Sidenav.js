import React from "react";
import logo from '../logo.svg';

export default class Header extends React.Component {
	render(){
		return(
			<sidenav>
			 	 <img src={logo} className="App-logo" alt="logo" />
	  			<a href="#">About</a>
	  			<a href="#">Services</a>
  				<a href="#">Clients</a>
  				<a href="#">Contact</a>
			</sidenav>
		);
	}
}