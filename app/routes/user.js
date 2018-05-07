const express = require('express'),
  User = require('../models/user.model'),
  router = express.Router();

/*
*  Get all users
* */
router.get('/', (req, res) => {
  User.find( (err, users) => {
    if (err) return next(err);
    res.json(users);
  });
});
/*
* Get single user by id
* */
router.get('/:id', (req, res, next) => {
  User.findById(req.params.id, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});
/*
* Create new user
* */
router.post('/', (req, res, next) => {
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/*
* Update user data by id
* */
router.put('/:id', (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});
/*
* Delete user
* */
router.delete('/:id', (req, res, next) => {
  User.findByIdAndRemove(req.params.id, req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
