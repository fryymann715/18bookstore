import React, { Component } from 'react';

export default class AddBookForm extends Component {
  render() {
    return (
       <div className="add-book-form">
         <form action="http://localhost:3001/books" method="post">
           <input name="title" placeholder="Title"></input>
           <input name="author" placeholder="Author"></input>
           <input name="price" placeholder="Price"></input>
           <input type='submit' value='Send'></input>
         </form>
       </div>
     )
  }
}
