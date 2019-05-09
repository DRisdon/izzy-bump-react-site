import React, { Component } from 'react';

class ImageView extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.closeImageView = this.closeImageView.bind(this)
  }

  closeImageView() {
    this.props.closeImageView();
  }

  render() {
    return (
      <div className="image-view-wrapper" onClick={this.closeImageView}>
        <div className='image-view'>
          <button className='close' onClick={this.closeImageView}>close</button>
          <img src={this.props.image.url} className='admin-zoom'></img>
        </div>
        </div>
    );
  }

}

export default ImageView;
