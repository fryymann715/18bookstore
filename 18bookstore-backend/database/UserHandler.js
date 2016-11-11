const db = require('./db')
const User = require('./models/UserModel')

const UserHandler = {

  add: ( request, response, next ) => {
    console.log("Inserting new User to database.")

    const { name, email, password } = request.body
    const user = new User({ name: name, email: email, password: password })
    user.save()
    const currentdate = new Date()

    console.log("Success: Inserted new User to database.----- ", currentdate)

    response.status(200).json({ status: 'success', message: 'Inserted new user to database.' })

  },

    getAll: ( request, response, next ) => {
        // TODO: Get all customers from DB
    },

    getOne: ( request, response, next ) => {
        //TODO: Get customer by name or id
    },

    update: ( request, response, next ) => {
        //TODO: Update customer entry based on name or id
    },

    delete: ( request, response, next ) => {
        //TODO Delete customer account.
    },

}

module.exports = UserHandler
