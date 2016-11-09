import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar'
import AddBookForm from './components/addBookForm'
import { Link } from "react-router"

const RouteHandler = require('react-router').RouteHandler


class OgApp extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <hr />
        <Link to="bye">Bye</Link>
        <Link to="stuff">Stuff</Link>
        <Link to="addbook">Add Book</Link>
        {this.props.children}
      </div>
    );
  }
}

export default OgApp;
