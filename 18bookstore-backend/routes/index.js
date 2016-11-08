const express = require('express')
const router = express.Router()
const BookHandler = require('../database/BookHandler')

router.get('/', ( request, response, next ) => {
  response.status( 200 ).json({ status: 'Yesh', message: 'More Shtuff' })
})

//router.get( '/books', BookHandler.getAll )
router.post( '/books', BookHandler.add )


module.exports = router
