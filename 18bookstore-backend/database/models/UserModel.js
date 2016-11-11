const db = require("../db")
const BookModel = require('./BookModel')
const Schema = db.Schema
const passportLocalMongoose = require( 'passport-local-mongoose' )

const UserModel = db.model( 'Customer', {
  name: { type: String },
  email: { type: String },
  password: { type: String },
    cart_collection:
      { cart:
        { id: { type: Number },
        books: [ BookModel.schema ]
    }
  }
})

//UserModel.plugin( passportLocalMongoose )

module.exports = UserModel
