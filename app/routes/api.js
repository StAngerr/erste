const express = require('express'),
 router = express.Router();

router.get('/', (req, res) => {
  res.send('test basic');
});
module.exports = router;
