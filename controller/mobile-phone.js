/*
 * @Author: zhixiong.fu
 * @Date: 2020-12-22 15:09:18
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2020-12-22 16:00:46
 */

/*
 * @Author: zhixiong.fu
 * @Date: 2020-12-22 12:00:52
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2020-12-22 15:05:25
 */

const BaseController = require('../utils/base-controller');
const MobilePhoneService = require('../service/mobile-phone');
const MobilePhoneDoc = require('../models/mobile-phone').mobilePhoneDoc;
const _ = require('lodash');

class MobilePhoneController extends BaseController {
  /**
   * 添加手机
   * @route POST /api/mobile-phone/create
   * @group MobilePhone - Operations about mobile phone
   * @param {MobilePhone.model} MobilePhone.body.required - 手机信息
   * @returns {object} 200 - An array of user info
   * @returns {Error} default - Unexpected error
   */
  async create(req, res, next) {
    console.log('controller : ' + JSON.stringify(req.body));

    // console.log('clone : ' + JSON.stringify(_.cloneDeep(req.body)));

    res.json(await MobilePhoneService.create(req.body));
  }
}

module.exports = new MobilePhoneController();
