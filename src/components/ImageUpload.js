import React, {Component} from 'react';
import axios from 'axios'
import Loading from '../images/loading.gif'
import Close from '../images/close.png'

class ImageUpload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      image: '',
      uploading: false
    };

    this.closeImageUpload = this.closeImageUpload.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
    this.handleInnerClick = this.handleInnerClick.bind(this)
  }

  closeImageUpload() {
    this.props.closeImageUpload();
  }

  onSubmit(e) {
    this.setState({uploading: true})
    e.preventDefault();
    const data = new FormData();
    const {name, description, image} = this.state
    data.append('name', name);
    data.append('description', description);
    data.append('image', image);
    data.append('pictureType', this.props.uploadType)
    console.log(data);
    axios.post(`https://izzy-bump-api.herokuapp.com/pictures?auth_token=${this.props.user.token}`, data).then(response => {
      this.closeImageUpload()
    });
  }

  changeName(e) {
    e.preventDefault();
    this.setState({name: e.target.value});
  }

  changeDescription(e) {
    e.preventDefault();
    this.setState({description: e.target.value});
  }

  changeImage(e) {
    e.preventDefault();
    this.setState({image: e.target.files[0]});
    console.log(e.target.files[0]);
  }

  handleInnerClick(e) {
    e.stopPropagation();
  }

  render() {
    return (<div className="image-upload-wrapper" onClick={this.closeImageUpload}>
      <div className='image-upload' onClick={this.handleInnerClick}>
        <img className='close' src={Close} onClick={this.closeImageUpload} alt='close'/>
        {
          !this.state.uploading && <form className="image-form" onSubmit={this.onSubmit}>
              <label>
                Uploading {this.props.uploadType}
              </label>
              <input type='file' name={this.state.image} onChange={this.changeImage} accept='image/gif, image/jpeg, image/png'/> {
                this.props.uploadType === 'artwork' && <label>
                    Name:
                  </label>
              }
              {this.props.uploadType === 'artwork' && <input type='text' value={this.state.name} onChange={this.changeName}/>}

              {
                this.props.uploadType === 'artwork' && <label>
                    Description:
                  </label>
              }
              {this.props.uploadType === 'artwork' && <textarea className='description' rows="10" value={this.state.description} onChange={this.changeDescription}/>}
              <button type='submit' value='Submit'>Submit</button>
            </form>
        }
        {this.state.uploading && <img src={Loading} alt="loading"/>}
      </div>
    </div>);
  }

}

export default ImageUpload;
