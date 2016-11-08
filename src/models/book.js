const db = require("../database/db")

const Book = db.model( 'Book', {
    title: { type: String },
    author: { type: String },
    price: { type:String }
  })

module.exports = Book
