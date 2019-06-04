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
      <nav className={(this.props.currentPage === 'home') ? 'home-nav' : undefined}>
          <Link to='/about' className={(this.props.currentPage === 'about') ? 'active' : undefined}>
            ABOUT
          </Link>
          <Link to="/artwork" key='artwork' className={(this.props.currentPage === 'artwork') ? 'active' : undefined}>
            ARTWORK
          </Link>
          <Link to="/tattoos" key='tattoos' className={(this.props.currentPage === 'tattoos') ? 'active' : undefined}>
            TATTOOS
          </Link>
          <a href='https://www.etsy.com/shop/IsabelBumpArtObjects' target='blank'>SHOP</a>
          <Link to="/contact" key='contact' className={(this.props.currentPage === 'contact') ? 'active' : undefined}>
            CONTACT
          </Link>
      </nav>
    </header>);
  }
}

export default NavBar;
