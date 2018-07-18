const express = require('express'),
  config = require('./config/database'),
  path = require('path'),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  passport = require('passport'),
  api = require('./routes/api'),
  user = require('./routes/user'),
  articles = require('./routes/articles'),
  app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended' : 'false' }));
app.use(express.static(path.join(__dirname, 'dist/erste')));
app.use('/', express.static(path.join(__dirname, 'dist/erste')));
app.use(passport.initialize());
app.use('/api', api);
app.use('/users', user);
app.use('/articles', articles);
app.use('*', express.static(path.join(__dirname, 'dist/erste')));

mongoose.Promise = require('bluebird');
mongoose.connect(config.database, {
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
