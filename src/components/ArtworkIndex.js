import React, {Component} from 'react';
import axios from 'axios'
import NavBar from './NavBar';

class ArtworkIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artType: '',
      pictures: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/pictures/${this.props.artType}`).then(response => {
      console.log('response', response);
      this.setState({pictures: response.data, artType: this.props.artType})
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const artType = this.props.artType;
    if (artType !== prevProps.artType) {
      axios.get(`http://localhost:8080/pictures/${this.props.artType}`).then(response => {
        console.log('response', response);
        this.setState({pictures: response.data, artType: this.props.artType})
      });
    }
  }

  render() {
    return (<div>
      <NavBar currentPage={this.state.artType}/>
      <h1>{this.state.artType.toUpperCase()}</h1>
      <p>(click for full size image)</p>
      <div className="art-wrapper">
        {this.state.pictures.map((picture) => <img className='art-image' src={picture.url} alt={picture.name}></img>)}
      </div>
      {/* <button className='show-more'>show more</button> */}
    </div>);
  }

}

export default ArtworkIndex;
