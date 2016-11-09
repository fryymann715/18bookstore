import React, { Component } from 'react'
import HomeLink from './NavBar/HomeLink'
import BrowseLink from './NavBar/BrowseLink'
import Search from './NavBar/Search'
import CartLink from './NavBar/CartLink'
import AboutLink from './NavBar/AboutLink'
import {Link} from 'react-router'

export default class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <HomeLink />
        <BrowseLink />
        <Search />
        <CartLink />
        <Link to="about">About</Link>
      </div>
    )
  }
}
