import React, {Component} from 'react';
import Login from './Login';

class UserAuth extends Component {
  render() {
    return <Login {...this.props}/>
  }
}
export default UserAuth;
