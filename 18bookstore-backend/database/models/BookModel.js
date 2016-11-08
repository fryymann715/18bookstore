const db = require("../db")

const BookModel = db.model( 'Book', {
  title: { type: String },
  author: { type: String },
  price: { type:String }
})

module.exports = BookModel
