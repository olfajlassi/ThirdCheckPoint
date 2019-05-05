import React, {Component} from 'react';
import './box.css'

class Box extends Component {

	render() {

		return(
			<div className="box" class='App-box'>
				<img src={require(`${this.props.image}`)} 
					class= 'App-img' alt="crew"/>
				<h2> {this.props.title} </h2>
				<p> {this.props.desc} </p>
			</div>	
		);
	}
}

export default Box;