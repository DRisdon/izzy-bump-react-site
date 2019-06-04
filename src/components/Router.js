import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import Artwork from './Artwork'
import Tattoos from './Tattoos'
import Home from './Home'
import Admin from './Admin'
import AboutPage from './AboutPage'
import Contact from './Contact'

class Router extends Component {

  render() {
    return (<div>
      <Switch>
        <Route exact={true} path="/" render={props => (<Home {...props} {...this.props}/>)}/>
        <Route exact={true} path="/about" render={props => (<AboutPage {...props} {...this.props}/>)}/>
        <Route exact={true} path="/artwork" render={props => (<Artwork {...props} {...this.props}/>)}/>
        <Route exact={true} path="/tattoos" render={props => (<Tattoos {...props} {...this.props}/>)}/>
        <Route exact={true} path="/contact" render={props => (<Contact {...props} {...this.props}/>)}/>
        <Route exact={true} path="/admin" render={props => (<Admin {...props} {...this.props}/>)}/>
        <Route exact={true} path="/admin/add-picture" render={props => (<Admin {...props} {...this.props}/>)}/>
      </Switch>
    </div>);
  }
}

export default Router;
