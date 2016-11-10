import React, { Component } from 'react'
import {Link} from 'react-router'

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
          <Link to="home"><button className="btn nav-btn">Home</button></Link>
          <Link to="browse"><button className="btn nav-btn">Browse</button></Link>
          <Link to="cart"><button className="btn nav-btn">Cart</button></Link>
          <Link to="about"><button className="btn nav-btn">About</button></Link>
          <Link to="addbook"><button className="btn nav-btn">Add Book</button></Link>
          <Link to="getbook"><button className="btn nav-btn">Get Book</button></Link>
      </div>
    )
  }
}
