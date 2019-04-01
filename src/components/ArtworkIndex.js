import React, { Component } from 'react';

class ArtworkIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artType: ''
    };
  }

  componentDidMount() {
    this.setState({
      artType: this.props.artType
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const artType = this.props.artType;
    if (artType !== prevProps.artType) {
      this.setState({
        artType: this.props.artType
      });
    }
  }

  render() {
    return (
      <div>{this.state.artType}</div>
    );
  }

}

export default ArtworkIndex;
