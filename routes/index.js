var express = require('express');
var router = express.Router();
const MobilePhone = require('../controller/mobile-phone');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* 模块 MobilePhone */
router.post('/api/mobile-phone/create', MobilePhone.create);

module.exports = router;
