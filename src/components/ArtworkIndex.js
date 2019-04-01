import React, {Component} from 'react';
import axios from 'axios'

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
      <h1>{this.state.artType.toUpperCase()}</h1>
      {this.state.pictures.length > 0 && this.state.pictures[0].url}
    </div>);
  }

}

export default ArtworkIndex;
