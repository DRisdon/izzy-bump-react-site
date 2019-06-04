import React, {Component} from 'react';
import axios from 'axios'
import NavBar from './NavBar';
import ImageCarousel from './ImageCarousel'

class ArtworkIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      artType: null,
      focus: null,
      mode: 'default'
    };

    this.changeTattooType = this.changeTattooType.bind(this)
    this.openCarousel = this.openCarousel.bind(this)
    this.closeCarousel = this.closeCarousel.bind(this)
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/pictures/${this.props.artType}`).then(response => {
      console.log('response', response);
      this.setState({pictures: response.data, artType: this.props.artType})
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const artTypeProp = this.props.artType;
    const artTypeState = this.state.artType
    if ((artTypeProp !== prevProps.artType)) {
      axios.get(`http://localhost:8080/pictures/${artTypeProp}`).then(response => {
        console.log('response', response);
        this.setState({pictures: response.data, artType: artTypeProp})
      });
    } else if ((artTypeState!== prevState.artType)) {
      axios.get(`http://localhost:8080/pictures/${artTypeState}`).then(response => {
        console.log('response', response);
        this.setState({pictures: response.data, artType: artTypeState})
      });
    }
  }

  changeTattooType(e) {
    this.setState({artType: e.target.dataset.type})
  }

  openCarousel(e) {
    this.setState({
      mode: 'carousel',
      focus: e.target.dataset.index
    })
  }

  closeCarousel(e) {
    this.setState({
      mode: 'default',
      focus: null
    })
  }

  render() {
    return (<div>
      <NavBar currentPage={this.props.artType}/>
      <h1>{this.props.artType.toUpperCase()}</h1>
      {((this.state.artType === 'tattoos') || (this.state.artType === 'designs')) && <nav className='tattoo-nav'>
        <button key='tattoos' className={(this.state.artType === 'tattoos') ? 'active' : undefined}>
          <div data-type='tattoos' onClick={this.changeTattooType}>
            COMPLETED
          </div>
        </button>
        <button key='designs' className={(this.state.artType === 'designs') ? 'active' : undefined}>
          <div data-type='designs' onClick={this.changeTattooType}>
            AVAILABLE
          </div>
        </button>
      </nav>}
      <div className="art-wrapper">
        {this.state.pictures.map((picture, i) => <img key={picture.id} data-index={i} className='art-image' src={picture.thumbnail} alt={picture.name} onClick={this.openCarousel}/>)}
      </div>
      <br/>
      {(this.state.mode === 'carousel') && <ImageCarousel closeCarousel={this.closeCarousel} pictures={this.state.pictures} focus={this.state.focus} {...this.props}/>}
    </div>);
  }

}

export default ArtworkIndex;
