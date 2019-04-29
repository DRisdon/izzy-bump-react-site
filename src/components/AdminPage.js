import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import axios from 'axios'

class Homepage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      artwork: [],
      tattoos: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/pictures/artwork`).then(response => {
      console.log('response', response);
      this.setState({artwork: response.data})
    });
    axios.get(`http://localhost:8080/pictures/tattoos`).then(response => {
      console.log('response', response);
      this.setState({tattoos: response.data})
    });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const artType = this.props.artType;
  //   if (artType !== prevProps.artType) {
  //     axios.get(`http://localhost:8080/pictures/tatoos`).then(response => {
  //       console.log('response', response);
  //       this.setState({tatoos: response.data})
  //     });
  //   }
  // }

  render() {
    return (<div>
      <button onClick={this.props.logout}>logout</button>
      <h2>ARTWORK</h2>
      {this.state.artwork.map((picture) => <img className='admin-image' src={picture.url}></img>) }
      <h2>TATTOOS</h2>
      {this.state.tattoos.map((picture) => <img className='admin-image' src={picture.url}></img>) }
    </div>);
  }

}

export default Homepage;
