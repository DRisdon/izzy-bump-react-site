import React, {Component} from 'react';
import logo from '../logo.svg';
import {BrowserRouter} from "react-router-dom";
import '../App.css';
import Router from './Router'

class App extends Component {
  render() {
    return (<div className="App">
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>);
  }
}

export default App;
