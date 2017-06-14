import React from "react";
import move from '../../images/move.png';
import zoomin from '../../images/zoom-in.png';
import zoomout from '../../images/zoom-out.png';
import select from '../../images/select.png';

export default class BasicTools extends React.Component {
	render(){
		return(
			<div>
	  			<a href="#"><img src={move} className="App-logo" alt="move" /></a>
	  			<a href="#"><img src={select} className="App-logo" alt="select" /></a>
  				<a href="#"><img src={zoomin} className="App-logo" alt="zoomin" /></a>
  				<a href="#"><img src={zoomout} className="App-logo" alt="zoomout" /></a>
			</div>
		);
	}
}