import React, {Component} from 'react';
import axios from 'axios'
import Close from '../images/close.png'

class ImageView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'default',
      featured: this.props.image.featured,
      name: null,
      description: null
    };

    this.toggleFeatured = this.toggleFeatured.bind(this)
    this.closeImageView = this.closeImageView.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
    this.cancelDelete = this.cancelDelete.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeName(e) {
    e.preventDefault();
    this.setState({name: e.target.value});
  }

  changeDescription(e) {
    e.preventDefault();
    this.setState({description: e.target.value});
  }

  onSubmit(e) {
    this.setState({uploading: true})
    e.preventDefault();
    const data = new FormData();
    const {name, description} = this.state
    data.append('name', (name ? name : this.props.image.name));
    data.append('description', (description ? description : this.props.image.description));
    console.log(data);
    axios.put(`https://izzy-bump-api.herokuapp.com/pictures/id/${this.props.image.id}?auth_token=${this.props.user.token}`, data).then(response => {
      this.props.closeImageView();
    });
  }

  toggleFeatured() {
    this.props.toggleFeatured(this.props.image.id, !(this.props.image.featured))
    this.setState({
      featured: !this.state.featured
    })
  }

  confirmDelete() {
    this.setState({mode: 'confirm'})
  }

  cancelDelete() {
    this.setState({mode: 'default'})
  }

  deleteImage() {
    this.props.deleteImage(this.props.image.id)
  }

  closeImageView() {
    this.props.closeImageView();
  }

  handleInnerClick(e) {
    e.stopPropagation();
  }

  render() {
    return (<div className="image-view-wrapper" onClick={this.closeImageView}>
      <div className='image-view' onClick={this.handleInnerClick}>
        <img className='close' src={Close} onClick={this.closeImageView} alt='close'/>
        <img src={this.props.image.thumbnail} className='admin-zoom' alt={this.props.image.name}></img>
        <button className='featured-toggle' onClick={this.toggleFeatured}>Featured: {this.state.featured.toString()}</button>
        <br/>
        <br/> {
          (this.props.image.pictureType === 'artwork') && <form className="image-form" onSubmit={this.onSubmit}>
              <label>
                Name:
              </label>
              <input type='text' value={this.state.name
                  ? this.state.name
                  : this.props.image.name} onChange={this.changeName}/> {
              <label>
                Description:
              </label>
              }
              <textarea className='description' rows="10" value={this.state.description
                  ? this.state.description
                  : this.props.image.description} onChange={this.changeDescription}/>
              {(this.state.name || this.state.description) && <button type='submit' value='Submit'>Save Changes</button>}
            </form>
        } <br/>
        {this.state.mode === 'default' && <button className='delete' onClick={this.confirmDelete}>delete</button>}
        {this.state.mode === 'confirm' && <p>Are you sure you want to delete this image?</p>}
        {this.state.mode === 'confirm' && <button className='delete' onClick={this.deleteImage}>yes</button>}
        {this.state.mode === 'confirm' && <button className='delete' onClick={this.cancelDelete}>no</button>}
      </div>
    </div>);
  }

}

export default ImageView;
