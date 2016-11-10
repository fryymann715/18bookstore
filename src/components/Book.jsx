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

    render() {
        return <span><h4 className="h4">{this.state.title}</h4></span>
    }

}
