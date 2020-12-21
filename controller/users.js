/*
 * @Author: zhixiong.fu
 * @Date: 2020-12-21 21:15:56
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2020-12-21 22:08:29
 */

const UserModel = require('../models/users');

/**
 * 用户controller（例如登录、注册等操作逻辑在此实现）
 */

class users {
  /**
   * 测试方法
   * @route GET /api/users/info
   * @group user - Operations about user
   * @returns {object} 200 - An array of user info
   * @returns {Error}  default - Unexpected error
   */
  async info(req, res, next) {
    res.json({
      name: 'Lxsbw',
      id: 'l01',
      envs: '1'
    });
  }

  /**
   * 测试方法
   * @route POST /api/users/adduser
   * @group user - Operations about user
   * @param {PointLx.model} point.body.required - the new point
   * @returns {object} 200 - An array of user info
   * @returns {Error}  default - Unexpected error
   */
  async adduser(req, res, next) {
    console.log(req.body);

    let username = 'john';
    let userpassword = '654321';

    const userinfo = {
      user_id: '1010',
      user_name: username,
      user_password: userpassword,
      user_level: '10',
      create_time: new Date()
    };
    await UserModel.create(userinfo);

    const result = {
      user_id: userinfo.user_id,
      user_name: userinfo.user_name,
      user_password: userinfo.user_password,
      user_level: userinfo.user_level,
      create_time: userinfo.create_time
    };

    res.json(result);
  }
}

module.exports = new users();
