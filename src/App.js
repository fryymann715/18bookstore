import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <hr />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
