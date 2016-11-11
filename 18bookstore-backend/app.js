const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session')
const cors = require('cors')
const accounts = require('./routes/accounts')
const passport = require( './auth/passport' )

const index = require('./routes/index');

const app = express();


app.options('*', cors())

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use( session({
   secret: 'keyboard cat',
   resave: false,
   saveUninitialized: false
}))
app.use(express.static(path.join(__dirname, 'public')));

app.use( passport.initialize() )
app.use( passport.session() )

app.use( '/accounts', accounts )

app.use( (request, response, next ) => {
    if (request.method === "OPTIONS") {
      response.header('Access-Control-Allow-Origin', request.headers.origin);
    } else {
      response.header('Access-Control-Allow-Origin', '*');
    }

    next()
})


app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.put('/api/shows/:id', (request, response) => {
  response.json({
    data: 'Issue #2 is fixed.'
  });
});

// error handler
app.use(function(err, request, response, next) {
  // set locals, only providing error in development
  response.locals.message = err.message;
  response.locals.error = request.app.get('env') === 'development' ? err : {};

  // render the error page
  response.status(err.status || 500).json({ status: err.status, message: err })

});

module.exports = app;
