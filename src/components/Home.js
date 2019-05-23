import React, {Component} from 'react';
import NavBar from './NavBar';

class Home extends Component {

  render() {
    return (<div>
      <h1 className='home-logo'>IZZY BUMP</h1>
      <h2>TATTOOS & FINE ART</h2>
      <div className='home-wrapper'>
      <img className='home-picture' src="https://res.cloudinary.com/dczipv49x/image/upload/v1558388280/FullSizeRender_wxewcj.jpg" alt='izzy bump'/>
      </div>
      <NavBar currentPage='home'/>
    </div>);
  }

}

export default Home;
