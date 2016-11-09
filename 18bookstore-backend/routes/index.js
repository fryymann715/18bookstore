const express = require('express')
const router = express.Router()
const BookHandler = require('../database/BookHandler')

router.get('/', ( request, response, next ) => {
  response.status( 200 ).json({ status: 'Yesh', message: 'More Shtuff' })
})

router.post( '/books', BookHandler.add )
router.get( '/books', BookHandler.getAll )
router.get( '/books/:title', BookHandler.getOne )
// router.put( '/books/:title', BookHandler.update )
// router.delete( '/books/:title', BookHandler.delete )

module.exports = router
