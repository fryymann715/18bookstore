import React, { Component } from 'react'
import {Link} from 'react-router'
import Search from './search'

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Link to="home"><button className="btn btn-primary">Home</button></Link>
        <Link to="browse"><button className="btn btn-primary">Browse</button></Link>
        <Search />
        <Link to="cart"><button className="btn btn-primary">Cart</button></Link>
        <Link to="about"><button className="btn btn-primary">About</button></Link>
        <Link to="addbook"><button className="btn btn-primary">Add Book</button></Link>
      </div>
    )
  }
}
