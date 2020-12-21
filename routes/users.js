var express = require('express');
var router = express.Router();
const Users = require('../controller/users');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/info', Users.info);

router.post('/adduser', Users.adduser);

module.exports = router;
