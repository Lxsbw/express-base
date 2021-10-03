/*
 * @Author: zhixiong.fu
 * @Date: 2020-12-22 12:00:52
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-10-03 15:50:53
 */

import BaseService from '../utils/base-service.js';
import mobilePhoneModel from '../models/mobile-phone.js';

class MobilePhoneService extends BaseService {
  /**
   * 查找一个
   */
  async findOne(param) {
    const result = mobilePhoneModel
      .findOne({ _id: param._id })
      .exec()
      .then(data => {
        return data;
      })
      .catch(err => {
        return { state: 'Fail', mess: err };
      });

    return result;
  }

  /**
   * 查找
   */
  async findall(param) {
    let conditions = {};
    if (param._id) {
      conditions = { ...conditions, _id: param._id };
    }
    if (param.model_name) {
      conditions = { ...conditions, model_name: param.model_name };
    }

    const result = await mobilePhoneModel.find(conditions);

    return result;
  }

  /**
   * 添加手机
   */
  async create(param) {
    console.log('service : ' + JSON.stringify(param));

    const result = await mobilePhoneModel.create(param);

    console.log('service result: ' + result);

    return { _id: result._id };
  }

  /**
   * 更新
   */
  async update(param) {
    console.log('service : ' + JSON.stringify(param));

    let conditions = {};

    if (param.model_name) {
      conditions = { ...conditions, model_name: param.model_name };
    }
    if (param.size) {
      conditions = { ...conditions, size: param.size };
    }
    if (param.spec) {
      conditions = { ...conditions, spec: param.spec };
    }
    if (param.ram) {
      conditions = { ...conditions, ram: param.ram };
    }
    if (param.rom) {
      conditions = { ...conditions, rom: param.rom };
    }
    if (param.seria_number) {
      conditions = { ...conditions, seria_number: param.seria_number };
    }

    const result = await mobilePhoneModel
      .updateOne({ _id: param._id }, conditions)
      .then(data => {
        return { ...data, state: 'Success' };
      })
      .catch(err => {
        return { state: 'Fail', mess: err };
      });

    console.log('service result: ' + result);

    return result;
  }

  /**
   * 删除
   */
  async delete(param) {
    console.log('service : ' + JSON.stringify(param));

    const result = await mobilePhoneModel
      .deleteOne({ _id: param._id })
      .then(data => {
        return { ...data, state: 'Success' };
      })
      .catch(err => {
        return { state: 'Fail', mess: err };
      });

    console.log('service result: ' + JSON.stringify(result));

    return result;
  }
}

export default new MobilePhoneService();
// module.exports = new MobilePhoneService();
