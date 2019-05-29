import React, {Component} from 'react';
import NavBar from './NavBar';

class Home extends Component {

  render() {
    return (<div>
      <div className='home-wrapper'>
      <img className='home-picture' src="https://res.cloudinary.com/dczipv49x/image/upload/v1558723854/websitetitle_qaq8co.jpg" alt='IZZY BUMP ART AND TATTOOS'/>
      </div>
      <NavBar currentPage='home'/>
    </div>);
  }

}

export default Home;
