const passport = require( 'passport' )
const LocalStrategy = require( 'passport-local' ).Strategy

const UserModel = require( '../database/models/UserModel' )

// passport.use( new LocalStrategy( UserModel.authenticate()))
// passport.serializeUser( UserModel.serializeUser() )
// passport.deserializeUser( UserModel.deserializeUser() )

module.exports = passport
