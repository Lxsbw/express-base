var express = require('express');
var router = express.Router();
const MobilePhone = require('../controller/mobile-phone');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* 模块 MobilePhone */
router.get('/api/mobile-phone/findone', MobilePhone.findOne);
router.get('/api/mobile-phone/findall', MobilePhone.findall);
router.post('/api/mobile-phone/create', MobilePhone.create);
router.put('/api/mobile-phone/update', MobilePhone.update);
router.delete('/api/mobile-phone/delete', MobilePhone.delete);

router.get('/api/linq', MobilePhone.Linq);

module.exports = router;
