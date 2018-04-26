const express = require('express'),
 router = express.Router();

router.get('/', (req, res) => {
  res.send('test basic');
});

router.get('/check', (req, res) => {
  res.send('test check');
});
module.exports = router;