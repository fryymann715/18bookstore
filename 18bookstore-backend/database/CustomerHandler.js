const db = require('./db')

const CustomerHanlder = {

    add: ( request, response, next ) => {
        const { name } = request.body

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
