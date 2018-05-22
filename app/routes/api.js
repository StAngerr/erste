const express = require('express'),
 router = express.Router(),
 User = require('../models/user.model'),
 passport = require('passport'),
 passportConfig = require('../config/passport'),
 dbConfig = require('../config/database'),
 jwt = require('jsonwebtoken');

passportConfig(passport);

router.post('/signup', (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.json({
      success: false,
      msg: 'Failed registration'
    });
  } else {
    const newUser = new User({
      username: req.body.username,
      password: req.body.password
    });

    newUser.save((err) => {
      if (err) {
        return res.json({
          success: false,
          err,
          msg: 'Username already exists.'
        });
      }
      res.json({
        success: true,
        msg: 'Successful created new user.'
      });
    });
  }
});

router.post('/login', (req, res) => {
  User.findOne({
    username: req.body.username
  }, (err, user) => {
    if (err) throw err;
    if (!user) {
      res.status(401).send({
        success: false,
        msg: 'Bad username'
      });
    } else {
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
          const token = jwt.sign(user.toJSON(), dbConfig.secret);
          res.json({
            success: true,
            token: 'JWT ' + token
          });
        } else {
          res.status(401).send({
            success: false,
            msg: 'Wrong password'
          });
        }
      });
    }
  });
});

module.exports = router;
