import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="about-div row">
          <div className="row">
              <h3 className="h3">About</h3>
          </div>
          <div className="row">
              <div className="col-3">
                  <p> This is the about page </p>
              </div>
          </div>
      </div>
    )
  }
}
