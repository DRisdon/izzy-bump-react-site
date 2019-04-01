import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {

	render(){

		return(
			<header>
        <nav>
          <li>
          <Link to='/'> HOME </Link>
          </li>
          <li>
            <Link to="/artwork" > ARTWORK </Link>
          </li>
					<li>
            <Link to="/tattoos" > TATTOOS </Link>
          </li>
        </nav>
      </header>
		);
	}
}

export default NavBar;
