import React from "react";
import text from '../../images/text.png';
import cube from '../../images/cube.png';
import mic from '../../images/microphone.png';
import addImage from '../../images/add-image.png';

export default class ThreeDTools extends React.Component {
	render(){
		return(
			<div>
	  			<a href="#"><img src={text} className="App-logo" alt="text" /></a>
	  			<a href="#"><img src={addImage} className="App-logo" alt="addImage" /></a>
	  			<a href="#"><img src={mic} className="App-logo" alt="mic" /></a>
	  			<a href="#"><img src={cube} className="App-logo" alt="cube" /></a>
			</div>
		);
	}
}