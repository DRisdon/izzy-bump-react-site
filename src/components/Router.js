import React, {Component} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import ArtworkIndex from './ArtworkIndex'
import Home from './Home'
import Admin from './Admin'
import NavBar from './NavBar'
import AboutPage from './AboutPage'
import Contact from './Contact'

class Router extends Component {

  render() {
    return (<div>
      <Switch>
        <Route exact="exact" path="/" render={props => (<Home {...props} {...this.props}/>)}/>
        <Route exact="exact" path="/about" render={props => (<AboutPage {...props} {...this.props}/>)}/>
        <Route exact="exact" path="/artwork" render={props => (<ArtworkIndex artType='artwork' {...props} {...this.props}/>)}/>
        <Route exact="exact" path="/tattoos" render={props => (<ArtworkIndex artType='tattoos' {...props} {...this.props}/>)}/>
        <Route exact="exact" path="/contact" render={props => (<Contact {...props} {...this.props}/>)}/>
        <Route exact="exact" path="/admin" render={props => (<Admin {...props} {...this.props}/>)}/>
        <Route exact="exact" path="/admin/add-picture" render={props => (<Admin {...props} {...this.props}/>)}/>
      </Switch>
    </div>);
  }
}

export default Router;
