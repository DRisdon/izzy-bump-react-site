import React, {Component} from "react";
import {Link} from "react-router-dom";

class NavBar extends Component {

  render() {

    return (<header>
      {(this.props.currentPage !== 'home') &&
      <h2 className='logo'>
        <Link to='/'>
          IZZY BUMP
        </Link>
      </h2>}
      <nav className={(this.props.currentPage === 'home') && 'home-nav'}>
        <li key='about' className={(this.props.currentPage === 'about') && 'active'}>
          <Link to='/about'>
            ABOUT
          </Link>
        </li>
        <li key='artwork' className={(this.props.currentPage === 'artwork') && 'active'}>
          <Link to="/artwork">
            ARTWORK
          </Link>
        </li>
        <li key='tattoos' className={(this.props.currentPage === 'tattoos') && 'active'}>
          <Link to="/tattoos">
            TATTOOS
          </Link>
        </li>
        <li key='shop'>
          <a href='https://www.etsy.com/shop/IsabelBumpArtObjects' target='blank'>SHOP</a>
        </li>
        <li key='contact' className={(this.props.currentPage === 'contact') && 'active'}>
          <Link to="/contact">
            CONTACT
          </Link>
        </li>
      </nav>
    </header>);
  }
}

export default NavBar;
