import React, { Component } from 'react';

class ImageView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'default',
      featured: this.props.image.featured
    };

    this.toggleFeatured = this.toggleFeatured.bind(this)
    this.closeImageView = this.closeImageView.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
    this.cancelDelete = this.cancelDelete.bind(this);
  }

  toggleFeatured() {
    this.props.toggleFeatured(this.props.image.id, !(this.props.image.featured))
    this.setState({featured: !this.state.featured})
  }

  confirmDelete() {
    this.setState({mode: 'confirm'})
  }

  cancelDelete() {
    this.setState({mode: 'default'})
  }

  deleteImage() {
    this.props.deleteImage(this.props.image.id)
  }

  closeImageView() {
    this.props.closeImageView();
  }

  render() {
    return (
      <div className="image-view-wrapper">
        <div className='image-view'>
          <button className='close' onClick={this.closeImageView}>close</button>
          <img src={this.props.image.thumbnail} className='admin-zoom'></img>
          <button className='featured-toggle' onClick={this.toggleFeatured}>Featured: {this.state.featured.toString()}</button>
          <br/>
          <br/>
          {this.state.mode === 'default' && <button className='delete' onClick={this.confirmDelete}>delete</button>}
          {this.state.mode === 'confirm' && <p>Are you sure you want to delete this image?</p>}
          {this.state.mode === 'confirm' && <button className='delete' onClick={this.deleteImage}>yes</button>}
        </div>
        </div>
    );
  }

}

export default ImageView;
