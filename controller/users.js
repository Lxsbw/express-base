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
    const result = {
      name: 'Lxsbw' + req.body.color,
      id: 'l01',
      envs: '1'
    };

    res.json(result);
  }
}

module.exports = new users();
