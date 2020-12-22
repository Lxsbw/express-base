/*
 * @Author: zhixiong.fu
 * @Date: 2020-12-22 12:00:52
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2020-12-22 15:48:02
 */

const BaseService = require('../utils/base-service');
const mobilePhoneModel = require('../models/mobile-phone').mobilePhone;
const mobilePhoneDoc = require('../models/mobile-phone').mobilePhoneDoc;

class MobilePhoneService extends BaseService {
  async create(param) {
    console.log('service : ' + JSON.stringify(param));

    const result = await mobilePhoneModel.create(param);

    console.log('service result: ' + result);

    return result;
  }
}

module.exports = new MobilePhoneService();
