const db  = require('./db')
const Book = require('./models/BookModel')

const BookHandler = {

//   getAll: ( request, response, next ) => {
//     const books = Book.findOne({ author: 'El Dood' }, function (err, docs) {
//   // docs is an array
// })
//       response.status( 200 ).json({ books: books, message: 'Hoorah' })
//   },

  add: ( request, response, next ) => {
    const { title, author, price } = request.body
    const book = new Book({ title: title, author: author, price: price })
    book.save()
    response.redirect('http://localhost:3000')
  }

}

module.exports = BookHandler
