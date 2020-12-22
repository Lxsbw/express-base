/*
 * @Author: zhixiong.fu
 * @Date: 2020-12-21 21:10:13
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2020-12-22 14:43:33
 */

let { Schema } = require('mongoose');
let { mongoClient } = require('../utils/mongo');

/**
 * 操作 MongoDb 时需要创建两个文件 model.js 和 modelDao.js
 *
 * 一. 对于 Model.js 以下几部分：
 * 1. Schema 必要
 * 2. plugin 可选
 * 3. hook 可选
 * 4. 调用 mongoClient.model() 创建 Model，此处注意，Model 名称与 js 文件名一样，但首字母大写
 */

const usersSchema = new Schema(
  {
    user_id: { type: Number },
    user_name: { type: String },
    user_password: { type: String },
    // user_age:  {type: String},
    user_level: { type: String },
    create_time: { type: Date, default: Date.now }
  },
  { versionKey: false },
  {
    runSettersOnQuery: true // 查询时是否执行 setters
  }
);
// //建立索引  提高查询效率
// usersSchema.index({ user_id: 1 });

// var ObjectId = mongoose.Types.ObjectId;
// var id = new ObjectId;

/**
 * 参数一要求与 Model 名称一致
 * 参数二为 Schema
 * 参数三为映射到 MongoDB 的 Collection 名
 */
console.log('实体类users', new Date().getTime());
let users = mongoClient.model(`Users`, usersSchema, 'users');

module.exports = users;
