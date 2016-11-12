import React, { Component } from 'react'

export default class Book extends Component {

  constructor( props ) {
      super( props )
      this.state = {

          title: this.props.title,
          author: this.props.author,
          price: this.props.price
      }
  }

  componentDidMount() {

    console.log(this.props.params.id)
    console.log('Loading Component, sending request to API')

    const fetchIsHappenning = {
    method: 'GET', mode: 'cors', headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      })
    }

    fetch( `http://localhost:3001/books/${this.props.params.id}`, fetchIsHappenning )
      .then( data => data.json() )
      .then( data => {

          console.log(data.data[0].title)
          const book = data.data[0]
          this.setState({ title: book.title })
          this.setState({ author: book.author })
          this.setState({ price: book.price })

      })

 }

    render() {
        return (
          <div className="book-container">
            <div><h2 className="book-item">{this.state.title}</h2></div>
            <div className="row">
              <div><h4 className="book-item">{this.state.author}</h4></div>
            </div>
            <div className="row">{this.state.price}</div>
          </div>
            )
    }

}
