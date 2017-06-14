import React from "react";
import logo from '../logo.svg';
import BasicTools from './sidenavComps/BasicTools';
import ThreeDTools from './sidenavComps/3DTools';
import Settings from './sidenavComps/sideNavSettings';

export default class Header extends React.Component {
	render(){
		return(
			<sidenav> 
				<img src={logo} className="App-logo" alt="logo" />
			 	<BasicTools/>
			 	<hr/>
			 	<ThreeDTools/>
			 	
			</sidenav>
		);
	}
}