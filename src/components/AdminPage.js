import React, {Component} from 'react';
import axios from 'axios'
import ImageUpload from './ImageUpload'
import ImageView from './ImageView'
import Loading from '../images/loading.gif'

class AdminPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      artwork: [],
      tattoos: [],
      mode: 'loading',
      uploadType: '',
      selectedImage: null
    };

    this.openImageUpload = this.openImageUpload.bind(this);
    this.closeImageUpload = this.closeImageUpload.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
    this.openImageView = this.openImageView.bind(this);
    this.closeImageView = this.closeImageView.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/pictures/artwork`).then(response => {
      console.log('response', response);
      this.setState({artwork: response.data, mode: 'default'})
    });
    axios.get(`http://localhost:8080/pictures/tattoos`).then(response => {
      console.log('response', response);
      this.setState({tattoos: response.data, mode: 'default'})
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

  deleteImage(id) {
    axios.delete(`http://localhost:8080/pictures/id/${id}?auth_token=${this.props.user.token}`).then(response => {
      console.log('response', response);
      this.setState({mode: 'default', selectedImage: null})
    });
  }

  openImageUpload(e) {
    this.setState({mode: 'imageUpload', uploadType: e.target.dataset.type});
  }

  closeImageUpload(e) {
    this.setState({mode: 'default', uploadType: ''});
  }

  openImageView(e) {
    console.log(e.target);
    axios.get(`http://localhost:8080/pictures/id/${e.target.dataset.key}`).then(response => {
      console.log('response', response);
      this.setState({mode: 'imageView', selectedImage: response.data});
    })
  }

  closeImageView(e) {
    this.setState({mode: 'default', selectedImage: null});
  }

  render() {
    return (<div>
      <button className='logout-button' onClick={this.props.logout}>logout</button>
      <h2>ARTWORK</h2>
      <button onClick={this.openImageUpload} data-type='artwork'>Upload</button>
      <div className="art-wrapper">
        {this.state.mode === 'loading' && <img src={Loading} alt="loading"/>}
        {this.state.artwork.map((picture) => <img key={picture.id} data-key={picture.id} className='admin-image' src={picture.thumbnail} alt={picture.name} onClick={this.openImageView}></img>)}
      </div>

      <h2>TATTOOS</h2>
      <button onClick={this.openImageUpload} data-type='tattoo'>Upload</button>
      <div className="art-wrapper">
        {this.state.mode === 'loading' && <img src={Loading} alt="loading"/>}
        {this.state.tattoos.map((picture) => <img key={picture.id} data-key={picture.id} className='admin-image' src={picture.thumbnail} alt={picture.name} onClick={this.openImageView}></img>)}
      </div>
      {(this.state.mode === 'imageUpload') && <ImageUpload closeImageUpload={this.closeImageUpload} uploadType={this.state.uploadType} {...this.props}/>}
      {(this.state.mode === 'imageView') && <ImageView closeImageView={this.closeImageView} deleteImage={this.deleteImage} image={this.state.selectedImage} {...this.props}/>}
      <br/>
    </div>);
  }

}

export default AdminPage;
