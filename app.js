var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index.js');
var users = require('./routes/users');

var app = express();

var contentful = require('contentful')
var client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'First Project',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: '5a3f12262a5b6da43ee8b8dd3e4d24a299122cc58fe164b4b0f58ad351e30602'
})
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
client.getEntry('78rg6aNOgHtPXbfnPeFyad')
.then((entry) => console.log(entry)).catch(function (error){
  console.log(error)
}
);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
