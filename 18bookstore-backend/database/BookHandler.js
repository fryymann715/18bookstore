const db  = require('./db')
const Book = require('./models/BookModel')

const BookHandler = {

  add: ( request, response, next ) => {
    const { title, author, price } = request.body
    const book = new Book({ title: title, author: author, price: price })
    book.save()
    response.redirect('http://localhost:3000')
  },

  getAll: ( request, response, next ) => {
    console.log("Inside get all yo")
    Book.find( {}, ( error, data ) => { console.log( error ) })
    .then( data => {
      response.status( 200 ).json({ books: data, message: 'Hoorah' })
    })
  },

  getOne: ( request, response, next ) => {
    const { title } = request.params
    console.log(title)
    Book.find({ title: title }, ( error, data ) =>{ console.log( error ) })
    .then( data => response.status(200).json({ status: 'success', book: data, message: 'Retrieved book.' }))
  },

  update: ( request, response, next ) => {

  },

  delete: ( request, response, next ) => {

  }
}

module.exports = BookHandler
