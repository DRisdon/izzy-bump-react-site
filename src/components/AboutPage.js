import React, {Component} from 'react';
import NavBar from './NavBar'

class AboutPage extends Component {

  render() {
    return (<div><NavBar currentPage='about'/>
      <h1>ABOUT ME</h1>
    </div>);
  }

}

export default AboutPage;
