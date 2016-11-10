import React, { Component } from 'react';
import axios from 'axios'
import Book from '../Book'

export default class GetBook extends Component {

    constructor( props ) {
        super( props )
        this.state = {
            books: [],
            name: "Name Test"
        }
    }

    componentDidMount() {
        console.log('Loading Component, send request to API')

        const fetchIsHappenning = {
          method: 'GET', mode: 'cors', headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          })
        }

        fetch( 'http://localhost:3001/books', fetchIsHappenning )
          .then( data => data.json() )
          .then( data => {
              //console.log(data.books)
              const books = data.books.forEach( element => console.log(element))
              console.log(books)
            //   this.setState({ books })
          })
            this.setState({ name: "New Name" })



        // this.serverRequest = axios.get("http://localhost:3001/books")
        // .then(result =>{
        //     console.log("RESULT", result)
        //   this.setState({
        //     books: result.data
        //   });
        // })
    }

    render() {
        return (
            <div className="books-div">
                <p>Trying to use axios to access our api and display data.</p>
                <ul>
                    <li><Book title="Stuff" /></li>
                    <li>{ this.state.books }</li>
                    <li>{this.state.name}</li>
                </ul>
            </div>
        )
    }
}
