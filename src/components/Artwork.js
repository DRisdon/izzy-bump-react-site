import React, { Component } from 'react';
import ArtworkIndex from './ArtworkIndex'

class Artwork extends Component {

  render() {
    return (
      <div>
        <ArtworkIndex artType='artwork' {...this.props}/>
      </div>
    );
  }
}

export default Artwork;
