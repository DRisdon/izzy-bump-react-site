import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import Close from '../images/close.png'

class ImageCarousel extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.closeCarousel = this.closeCarousel.bind(this)
    this.handleInnerClick = this.handleInnerClick.bind(this)
  }

  closeCarousel(e) {
    this.props.closeCarousel();
  }

  handleInnerClick(e) {
    e.stopPropagation();
  }

render() {
  return (<div className="image-upload-wrapper" onClick={this.props.closeCarousel}>
    <div className='image-carousel' onClick={this.handleInnerClick}>
      <img className='close' src={Close} onClick={this.closeCarousel} alt='close'/>
      <Carousel selectedItem={parseInt(this.props.focus)} showStatus={false} showIndicators={false} dynamicHeight={true} infiniteLoop={true} showThumbs={false}>
        {this.props.pictures.map((picture, i) =>
          <div>
          <img key={picture.id} data-index={i} src={picture.url} alt={picture.name}/>
          {picture.pictureType === 'artwork' && <p className="legend">
            <span className='carousel-title'>{picture.name}</span>
            <br/>
            {picture.description}
          </p>}
        </div>
        )}
      </Carousel>
    </div>
  </div>);
}

}

export default ImageCarousel;
