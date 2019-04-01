import React, { Component } from 'react';
import { BrowserRouter} from "react-router-dom";


class Homepage extends Component {

	// render routes for react router
	render() {
	  	return (

		    <div><button onClick={this.props.logout}>logout</button></div>
		);
	}

}

export default Homepage;
