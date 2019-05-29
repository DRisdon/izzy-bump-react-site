import React, {Component} from 'react';
import axios from 'axios'
import NavBar from './NavBar';

class ArtworkIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      featured: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/pictures/${this.props.artType}`).then(response => {
      console.log('response', response);
      this.setState({pictures: response.data})
    });
    axios.get(`http://localhost:8080/pictures/${this.props.artType}/featured`).then(response => {
      console.log('response', response);
      this.setState({featured: response.data})
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const artType = this.props.artType;
    if (artType !== prevProps.artType) {
      axios.get(`http://localhost:8080/pictures/${this.props.artType}`).then(response => {
        console.log('response', response);
        this.setState({pictures: response.data})
      });
      axios.get(`http://localhost:8080/pictures/${this.props.artType}/featured`).then(response => {
        console.log('response', response);
        this.setState({featured: response.data})
      });
    }
  }

  render() {
    return (<div>
      <NavBar currentPage={this.props.artType}/>
      <h1>{this.props.artType.toUpperCase()}</h1>
      <div className="art-wrapper">
        {this.state.featured.map((picture) => <img key={picture.id} className='art-image' src={picture.thumbnail} alt={picture.name}></img>)}
        {this.state.pictures.map((picture) => <img key={picture.id} className='art-image' src={picture.thumbnail} alt={picture.name}></img>)}
      </div>
      {/* <button className='show-more'>show more</button> */}
      <br/>
    </div>);
  }

}

export default ArtworkIndex;
