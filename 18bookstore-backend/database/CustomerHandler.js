const db = require('./db')
const Customer = require('./models/CustomerModel')

const CustomerHanlder = {

    add: ( request, response, next ) => {
        const { name, email, password } = request.body
        const customer = new Customer({ name: name, email: email, password: password })
        customer.save()
        

        response.status(200).json({ message: name })

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

module.exports = CustomerHanlder
