import React, { Component } from 'react';
import ArtworkIndex from './ArtworkIndex'

class Tattoos extends Component {

  render() {
    return (
      <div>
        <ArtworkIndex artType='tattoos' {...this.props}/>
      </div>
    );
  }
}

export default Tattoos;
