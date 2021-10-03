import express from 'express';
const router = express.Router();
import MobilePhone from '../controller/mobile-phone.js';

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

// router.head('/', (req, res, next) => res.sendStatus(200));
// router.options('/', (req, res, next) => res.sendStatus(200));
router.get('/api/linq', MobilePhone.Linq);

export default router;
// module.exports = router;
