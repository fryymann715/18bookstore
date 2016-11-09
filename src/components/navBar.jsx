import React, { Component } from 'react'
// import HomeLink from './NavBar/HomeLink'
// import BrowseLink from './NavBar/BrowseLink'
// import Search from './NavBar/Search'
// import CartLink from './NavBar/CartLink'
// import AboutLink from './NavBar/AboutLink'
import {Link} from 'react-router'

export default class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <Link to="home">Home</Link>
        <Link to="browse">Browse</Link>
        <Link to="cart">Cart</Link>
        <Link to="search">Search</Link>
        <Link to="about">About</Link>
      </div>
    )
  }
}
