import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar'
import AddBookForm from './components/addBookForm'
import { Link } from "react-router"

const RouteHandler = require('react-router').RouteHandler


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <hr />
        {this.props.children}
      </div>
    );
  }
}

export default App;
