const express = require('express')
const router = express.Router()
const BookHandler = require('../database/BookHandler')
const UserHandler = require('../database/UserHandler')

router.get('/', ( request, response, next ) => {
  response.status( 200 ).json({ status: 'Yesh', message: 'More Shtuff' })
})

router.post( '/books', BookHandler.add )
router.get( '/books', BookHandler.getAll )
router.get( '/books/:id', BookHandler.getOne )
// router.put( '/books/:title', BookHandler.update )
// router.delete( '/books/:title', BookHandler.delete )

router.post( '/user', UserHandler.add )
// router.get( '/user/', UserHandler )
// router.get( '/user/', UserHandler )
// router.get( '/user/', UserHandler )
// router.get( '/user/', UserHandler )

module.exports = router
