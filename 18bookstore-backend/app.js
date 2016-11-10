var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const cors = require( 'cors' )

var index = require('./routes/index');

var app = express();


app.options('*', cors())
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// const whitelist = [
//     'http://0.0.0.0:3000',
// ]
// const corsOptions = {
//     origin: (origin, callback) => {
//         const originIsWhitelisted = whitelist.indexOf(origin) !== -1;
//         callback(null, originIsWhitelisted);
//     },
//     credentials: true
// }

app.use( (request, response, next ) => {
    if (request.method === "OPTIONS") {
      response.header('Access-Control-Allow-Origin', request.headers.origin);
    } else {
      response.header('Access-Control-Allow-Origin', '*');
    }

    next()
})
// 
// app.use(cors(corsOptions));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.put('/api/shows/:id', /*cors(issuesoption) ,*/function(req,res){
  res.json({
    data: 'Issue #2 is fixed.'
  });
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).json({ status: err.status,
                                       message: err })

});

module.exports = app;
