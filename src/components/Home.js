import React, {Component} from 'react';
import NavBar from './NavBar';

class Home extends Component {

  render() {
    return (<div>
      <NavBar currentPage='home'/>
      <h1>IZZY BUMP</h1>
    </div>);
  }

}

export default Home;
