import React, { Component } from 'react';
import {Link} from 'react-router'

export default class GetBook extends Component {

  constructor( props ) {
      super( props )
      this.state = {
          bookLinks: []
      }
  }

  componentDidMount() {
    console.log('Loading Component, sending request to API')

    const fetchIsHappenning = {
      method: 'GET', mode: 'cors', headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }

    fetch( 'http://localhost:3001/books', fetchIsHappenning )
      .then( data => data.json() )
      .then( data => {
        const bookTitles = []
        const bookIds = []
        const bookLinks = []

        data.books.forEach( element => bookIds.push( element._id ))
        data.books.forEach( element=> bookTitles.push( element.title) )

        for( let i = 0; i<bookIds.length; i++) {
            bookLinks.push( <li key={bookIds[i]}><Link to={bookIds[i]}>{bookTitles[i]} </Link></li> )
        }

        this.setState({ bookLinks })
    })
  }

  render() {
      return (
          <div className="books-div">
            <ul>
              { this.state.bookLinks.map( book => book )}
            </ul>
          </div>
      )
  }
}
