/**
 * 用户controller（例如登录、注册等操作逻辑在此实现）
 */

class users {
  async info(req, res, next) {
    res.json({ name: 'Lxsbw', id: 'l01' });
  }
}

module.exports = new users();
