import React, {Component} from 'react';
import axios from 'axios'
import NavBar from './NavBar';

class ArtworkIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      artType: null
    };

    this.changeTattooType = this.changeTattooType.bind(this)
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/pictures/${this.state.artType ? this.state.artType : this.props.artType}`).then(response => {
      console.log('response', response);
      this.setState({pictures: response.data, artType: this.props.artType})
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const artType = this.state.artType ? this.state.artType : this.props.artType;
    if (artType !== prevState.artType) {
      console.log(artType)
      axios.get(`http://localhost:8080/pictures/${this.state.artType}`).then(response => {
        console.log('response', response);
        this.setState({pictures: response.data})
      });
    }
  }

  changeTattooType(e) {
    this.setState({artType: e.target.dataset.type})
  }

  render() {
    return (<div>
      <NavBar currentPage={this.props.artType}/>
      <h1>{this.props.artType.toUpperCase()}</h1>
      {((this.state.artType === 'tattoos') || (this.state.artType === 'designs')) && <nav className='tattoo-nav'>
        <li key='tattoos' className={(this.state.artType === 'tattoos') ? 'active' : undefined}>
          <div data-type='tattoos' onClick={this.changeTattooType}>
            COMPLETED
          </div>
        </li>
        <li key='designs' className={(this.state.artType === 'designs') ? 'active' : undefined}>
          <div data-type='designs' onClick={this.changeTattooType}>
            AVAILABLE
          </div>
        </li>
      </nav>}
      <div className="art-wrapper">
        {this.state.pictures.map((picture) => <img key={picture.id} className='art-image' src={picture.thumbnail} alt={picture.name}></img>)}
      </div>
      {/* <button className='show-more'>show more</button> */}
      <br/>
    </div>);
  }

}

export default ArtworkIndex;
