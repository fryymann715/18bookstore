const db  = require('./db')
const Book = require('./models/BookModel')

const BookHandler = {

  add: ( request, response, next ) => {
    const { title, author, price } = request.body
    console.log(`Creating new book entry: ${title}`)
    const book = new Book({ title: title, author: author, price: price })
    book.save()
    const currentdate = new Date()
    console.log(`Book entry saved to database ---- ${currentdate}`)
    response.redirect('http://localhost:3000')
  },

  getAll: ( request, response, next ) => {
      const currentdate = new Date()
    console.log(`Getting ALL books from database...`)
    Book.find( {}, ( error, data ) => { (error) ? console.log( error ) : console.log('Success') })
    .then( data => {
        console.log(`Retrieved ALL books from database: ${data.length} items ---- ${currentdate}`)
      response.status( 200 ).json({ status: 'success', books: data, message: 'Hoorah' })
    })
  },

  getOne: ( request, response, next ) => {
    const { title } = request.params
    console.log(`Getting book by title: ${title}`)
    Book.find({ title: title }, ( error, data ) =>{ console.error( error ) })
    .then( data => response.status(200).json({ status: 'success', data: data, message: 'Retrieved book.' }))
  },

  update: ( request, response, next ) => {
      const { title } = request.params
      console.log( `Updating book entry with title: ${title}` )
      //Book.remove({ title: title })
      //Book.save

  },

  delete: ( request, response, next ) => {

  }
}


module.exports = BookHandler
