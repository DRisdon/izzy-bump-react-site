import React, { Component } from 'react';

class ImageUpload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: []
    };

    this.closeImageUpload = this.closeImageUpload.bind(this);
  }

  closeImageUpload() {
    this.props.closeImageUpload();
  }

  render() {
    return (
      <div className="image-upload-wrapper">
          <div className='image-upload'>
            Uploading {this.props.uploadType}
            <button className='close' onClick={this.closeImageUpload}>close</button>
          </div>
        </div>
    );
  }

}

export default ImageUpload;
