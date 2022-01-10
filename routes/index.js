const express = require('express');
const router = express.Router();
const MobilePhone = require('../controller/mobile-phone');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* 模块 MobilePhone */
router.get('/api/mobile-phone/findone/:_id', MobilePhone.findOne);
router.get('/api/mobile-phone/findall', MobilePhone.findall);
router.post('/api/mobile-phone/create', MobilePhone.create);
router.put('/api/mobile-phone/update', MobilePhone.update);
router.patch('/api/mobile-phone/patch', MobilePhone.updateByPatch);
router.delete('/api/mobile-phone/delete', MobilePhone.delete);

router.get('/api/linq', MobilePhone.Linq);
router.get('/api/linqtojs', MobilePhone.LinqToJs);
// router.head('/', (req, res, next) => res.sendStatus(200));
// router.options('/', (req, res, next) => res.sendStatus(200));

module.exports = router;
