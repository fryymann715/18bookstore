const db = require("../db")
const BookModel = require('./BookModel')

const CustomerModel = db.model( 'Customer', {
  name:                     { type: String },
  email:                    { type: String },
  password:                 { type: String },

  cart_collection:          { cart:   {
                                        id:   { type: Number },
                                        books: [ BookModel.schema ]
                              }
                            }
})

module.exports = CustomerModel
