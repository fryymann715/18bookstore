import React, { Component } from 'react';

export default class AddBookForm extends Component {
  render() {
    return (
       <div className="add-book-form">
         <h3 className="h3">Add A Book</h3>
         <form className="form-group" action="http://localhost:3001/books" method="post">
           <input className="form-control form-group" name="title" placeholder="Title"></input>
           <input className="form-control form-group" name="author" placeholder="Author"></input>
           <input className="form-control form-group" name="price" placeholder="Price"></input>
           <input className="form-control form-group" type='submit' value='Send'></input>
         </form>
       </div>
     )
  }
}
