/*
 * @Author: zhixiong.fu
 * @Date: 2020-12-21 21:15:56
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2020-12-22 15:43:21
 */

const UserModel = require('../models/users');

/**
 * 用户controller（例如登录、注册等操作逻辑在此实现）
 */

class users {
  /**
   * 测试方法
   * @route GET /api/users/info
   * @group User - Operations about user
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
   * @group User - Operations about user
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

    const result = await UserModel.create(userinfo);

    console.log(result);
    res.json(result);
  }
}

module.exports = new users();
