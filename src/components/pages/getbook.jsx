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

        axios({
          method: 'get',
          url: 'http://localhost:3001/books',
        })
        .then( result => {
            const books = result.data.children.map( obj => obj.data )
            this.setState({ books: books })
            console.log("Result Data:" + result)
        })
        console.log("Results: ")
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
