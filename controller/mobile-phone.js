/*
 * @Author: zhixiong.fu
 * @Date: 2020-12-22 12:00:52
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-03-08 23:49:38
 */

const BaseController = require('../utils/base-controller');
const MobilePhoneService = require('../service/mobile-phone');
// const MobilePhoneDoc = require('../models/mobile-phone').mobilePhoneDoc;
const _ = require('lodash');
const jslinq = require('jslinq');

class MobilePhoneController extends BaseController {
  /**
   * id查找
   * @route GET /api/mobile-phone/findone
   * @group MobilePhone - Operations about mobile phone
   * @summary id查找
   * @param {string} _id.query.required - id
   * @returns {object} 200 - mobile phone info
   * @returns {Error} default - Unexpected error
   */
  async findOne(req, res, next) {
    console.log('controller : ' + JSON.stringify(req.query._id));

    // console.log('clone : ' + JSON.stringify(_.cloneDeep(req.body)));

    res.json(await MobilePhoneService.findOne({ _id: req.query._id }));
  }

  /**
   * 查找
   * @route GET /api/mobile-phone/findall
   * @group MobilePhone - Operations about mobile phone
   * @summary 查找
   * @param {string} _id.query - id
   * @param {string} model_name.query - model_name
   * @returns {object} 200 - mobile phone info
   * @returns {Error} default - Unexpected error
   */
  async findall(req, res, next) {
    // console.log('controller : ' + req.query._id + '|' + req.query.model_name);

    res.json(
      await MobilePhoneService.findall({
        _id: req.query._id,
        model_name: req.query.model_name
      })
    );
  }

  /**
   * 添加手机
   * @route POST /api/mobile-phone/create
   * @group MobilePhone - Operations about mobile phone
   * @summary 添加手机
   * @param {MobilePhone.model} MobilePhone.body.required - 手机信息
   * @returns {object} 200 - mobile phone _id
   * @returns {Error} default - Unexpected error
   */
  async create(req, res, next) {
    console.log('controller : ' + JSON.stringify(req.body));

    // console.log('clone : ' + JSON.stringify(_.cloneDeep(req.body)));

    res.json(await MobilePhoneService.create(req.body));
  }

  /**
   * 更新
   * @route PUT /api/mobile-phone/update
   * @group MobilePhone - Operations about mobile phone
   * @summary 更新
   * @param {MobilePhoneUpd.model} MobilePhoneUpd.body.required - 手机信息
   * @returns {object} 200 - mobile phone
   * @returns {Error} default - Unexpected error
   */
  async update(req, res, next) {
    console.log('controller : ' + JSON.stringify(req.body));

    res.json(await MobilePhoneService.update(req.body));
  }

  /**
   * 删除
   * @route DELETE /api/mobile-phone/delete
   * @group MobilePhone - Operations about mobile phone
   * @summary 删除
   * @param {MobilePhoneDel.model} MobilePhoneDel.body.required - 手机信息
   * @returns {object} 200 - mobile phone info
   * @returns {Error} default - Unexpected error
   */
  async delete(req, res, next) {
    console.log('controller : ' + JSON.stringify(req.body));

    res.json(await MobilePhoneService.delete(req.body));
  }

  /**
   * js linq
   * @route GET /api/linq
   * @group Home - js linq demo
   * @summary jslinq
   * @returns {object} 200 - result info
   * @returns {Error} default - Unexpected error
   */
  async Linq(req, res, next) {
    const data = [
      {
        id: 1,
        name: 'one',
        category: 'fruits',
        countries: ['Italy', 'Austria']
      },
      {
        id: 2,
        name: 'two',
        category: 'vegetables',
        countries: ['Italy', 'Germany']
      },
      { id: 3, name: 'three', category: 'vegetables', countries: ['Germany'] },
      { id: 4, name: 'four', category: 'fruits', countries: ['Japan'] },
      { id: 5, name: 'five', category: 'fruits', countries: ['Japan', 'Italy'] }
    ];

    const queryObj = jslinq(data);

    const result = queryObj.singleOrDefault(function (el) {
      return el.name == 'one';
    });

    res.json(result);
  }
}

module.exports = new MobilePhoneController();
