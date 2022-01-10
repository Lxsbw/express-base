/*
 * @Author: zhixiong.fu
 * @Date: 2020-12-22 12:00:52
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2022-01-10 03:07:31
 */

import BaseController from '../utils/base-controller';
import MobilePhoneService from '../service/mobile-phone';

class MobilePhoneController extends BaseController {
  /**
   * OPTIONS
   * @route OPTIONS /
   * @group Home - Public
   * @summary Method OPTIONS
   */

  /**
   * HEAD
   * @route HEAD /
   * @group Home - Public
   * @summary Method HEAD
   * 生成的请求，要像下面一样带 -I 才能正常，但是目前还没有找到方法让其上
   * curl -X HEAD "http://localhost:3000/" -H "accept: application/json" -I
   */

  /**
   * id查找
   * @route GET /api/mobile-phone/findone/{_id}
   * @group MobilePhone - Operations about mobile phone
   * @summary id查找
   * @param {string} _id.path.required - id
   * @returns {object} 200 - mobile phone info
   * @returns {Error} default - Unexpected error
   */
  async findOne(req, res, next) {
    console.log('controller : ' + JSON.stringify(req.params));

    res.json(await MobilePhoneService.findOne({ _id: req.params._id }));
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
  /**
   * 查找 OPTIONS
   * @route OPTIONS /api/mobile-phone/findall
   * @group MobilePhone - Operations about mobile phone
   * @summary 查找 Method OPTIONS
   */
  /**
   * 查找 HEAD
   * @route HEAD /api/mobile-phone/findall
   * @group MobilePhone - Operations about mobile phone
   * @summary 查找 Method HEAD
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
   * 更新
   * @route PATCH /api/mobile-phone/patch
   * @group MobilePhone - Operations about mobile phone
   * @summary 更新
   * @param {MobilePhoneUpdPatch.model} MobilePhoneUpdPatch.body.required - 手机信息
   * @returns {object} 200 - mobile phone
   * @returns {Error} default - Unexpected error
   */
  async updateByPatch(req, res, next) {
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
}

export default new MobilePhoneController();
