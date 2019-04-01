import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import ArtworkIndex from './ArtworkIndex'
import Home from './Home'
import Admin from './Admin'
import NavBar from './NavBar'

class Router  extends Component {

  render() {
    return (
      <div>
      <NavBar/>
      <Switch>
      <Route exact path="/" render={props => (
					<Home
					 	{...props}  {...this.props}
							/>
						)} />
      <Route exact path="/artwork" render={props => (
					<ArtworkIndex artType='artwork'
					 	{...props}  {...this.props}
							/>
						)} />
      <Route exact path="/tattoos" render={props => (
					<ArtworkIndex artType='tattoos'
					 	{...props}  {...this.props}
							/>
						)} />
      <Route exact path="/admin" render={props => (
					<Admin
					 	{...props}  {...this.props}
							/>
						)} />
      </Switch>
      </div>
    );
  }

}

export default Router;
