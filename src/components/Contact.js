import React, {Component} from 'react';
import NavBar from './NavBar';
import mailgun from 'mailgun-js'
import axios from 'axios'

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      subject: '',
      message: '',
      mode: 'writing'
    };

    this.changeEmail = this.changeEmail.bind(this);
    this.changeSubject = this.changeSubject.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }

  changeEmail(e) {
    this.setState({email: e.target.value})
  }

  changeSubject(e) {
    this.setState({subject: e.target.value})
  }
changeMessage(e) {
  this.setState({
    message: e.target.value
  })
}

onSubmit(e) {
  e.preventDefault();
  const data = {
    from: this.state.email,
    to: 'drisdon07@gmail.com',
    subject: this.state.subject,
    text: this.state.message
  }
  axios.post(`https://izzy-bump-api.herokuapp.com/mailer`, data).then(response => {
    console.log(response);
    if (response.data.message === 'Queued. Thank you.') {
      this.setState({mode: 'sent'})
    }
  }).catch(err => {
    console.log('error');
    this.setState({mode: 'error'})
  })
}


  render() {
    return (<div>
      <NavBar currentPage='contact'/>
      <h1>CONTACT</h1>
      {this.state.mode === 'error' && <p className='error-message'>Something went wrong! Please make sure all fields are filled and try again.</p>}
      {(this.state.mode === 'writing' || this.state.mode === 'error') && <form className='contact-form' onSubmit={this.onSubmit}>
      <label>
          Your Email:
      </label>
      <input name="email" type='text' value={this.state.name} onChange={this.changeEmail}/>
      <label>
          Subject:
      </label>
      <input type='text' value={this.state.name} onChange={this.changeSubject}/>
      <label>
          Message:
      </label>
      <textarea name="message" type='text' rows="20" value={this.state.name} onChange={this.changeMessage}/>
      <br/>
      <button type="submit">Send</button>
      <br/>
      </form>}
      {this.state.mode === 'sent' && <p className='message-sent'>Your message has been sent!</p>}
    </div>);
  }

}

export default Contact;
