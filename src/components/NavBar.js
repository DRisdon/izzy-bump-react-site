import React, {Component} from "react";
import {Link} from "react-router-dom";

class NavBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (<header>
      <nav>
        <li className={(this.props.currentPage === 'home') && 'active'}>
          <Link to='/'>
            HOME
          </Link>
        </li>
        <li className={(this.props.currentPage === 'about') && 'active'}>
          <Link to='/about'>
            ABOUT
          </Link>
        </li>
        <li className={(this.props.currentPage === 'artwork') && 'active'}>
          <Link to="/artwork">
            ARTWORK
          </Link>
        </li>
        <li className={(this.props.currentPage === 'tattoos') && 'active'}>
          <Link to="/tattoos">
            TATTOOS
          </Link>
        </li>
        <li>
          <a>SHOP</a>
        </li>
        <li className={(this.props.currentPage === 'contact') && 'active'}>
          <Link to="/contact">
            CONTACT
          </Link>
        </li>
      </nav>
    </header>);
  }
}

export default NavBar;
