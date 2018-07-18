const express = require('express'),
  Article = require('../models/articleModel'),
  router = express.Router();

/*
*  Get all articles
* */
router.get('/', (req, res) => {
  Article.find({}, { _id: 0 }, (err, articles) => {
    if (err) return next(err);
    res.json(articles);
  });
});

module.exports = router;
