const express = require('express'),
 path = require('path'),
 logger = require('morgan'),
 mongoose = require('mongoose'),
 bodyParser = require('body-parser'),
 test = require('./routes/test'),
 user = require('./routes/user'),
 app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', express.static(path.join(__dirname, 'dist')));
app.use('/test', test);
app.use('/users', user);

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/erste', {
  promiseLibrary: require('bluebird')
}).then(() =>  console.log('db connected'))
  .catch((err) => console.error(err));

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
