import React, {Component} from 'react';
import NavBar from './NavBar';

class Home extends Component {

  render() {
    return (<div>
      <h1>IZZY BUMP</h1>
      <h2>ART | TATTOOS | ETC</h2>
      <img src="https://res.cloudinary.com/dczipv49x/image/upload/v1556552692/tkeesnbpo5zuqandx9qi.png" alt='izzy bump'></img>
      <NavBar currentPage='home'/>
    </div>);
  }

}

export default Home;
