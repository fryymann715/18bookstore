import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <form action="#" method="post" className="form-group">
        <input type="text" name="Search" placeholder="Search" className="form-group"/>
        <input type="submit" value="Submit" className="form-group"/>
      </form>
        )
  }
}
