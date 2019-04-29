import React, {Component} from 'react';
import axios from 'axios'
import ImageUpload from './ImageUpload'

class AdminPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      artwork: [],
      tattoos: [],
      mode: 'default',
      uploadType: ''
    };

    this.openImageUpload = this.openImageUpload.bind(this);
    this.closeImageUpload = this.closeImageUpload.bind(this);
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

  componentDidUpdate(prevProps, prevState) {
    if ((this.state.mode === 'default') && (prevState.mode !== 'default')) {
      axios.get(`http://localhost:8080/pictures/artwork`).then(response => {
        console.log('response', response);
        this.setState({artwork: response.data})
      });
      axios.get(`http://localhost:8080/pictures/tattoos`).then(response => {
        console.log('response', response);
        this.setState({tattoos: response.data})
      });
    }
  }

  openImageUpload(event) {
    this.setState({mode: 'imageUpload', uploadType: event.target.dataset.type})
  }

  closeImageUpload() {
    this.setState({mode: 'default', uploadType: ''})
  }

  render() {
    return (<div>
      <button className='logout-button' onClick={this.props.logout}>logout</button>
      <h2>ARTWORK</h2>
      <button onClick={this.openImageUpload} data-type='artwork'>Upload</button>
      <div className="art-wrapper">
        {this.state.artwork.map((picture) => <img key={picture.id} className='admin-image' src={picture.url} alt={picture.name}></img>)}
      </div>

      <h2>TATTOOS</h2>
      <button onClick={this.openImageUpload} data-type='tattoo'>Upload</button>
      <div className="art-wrapper">
        {this.state.tattoos.map((picture) => <img key={picture.id} className='admin-image' src={picture.url} alt={picture.name}></img>)}
      </div>
      {(this.state.mode === 'imageUpload') && <ImageUpload closeImageUpload={this.closeImageUpload} uploadType={this.state.uploadType} {...this.props}/>}
    </div>);
  }

}

export default AdminPage;
