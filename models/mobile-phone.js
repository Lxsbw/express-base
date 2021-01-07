/*
 * @Author: zhixiong.fu
 * @Date: 2020-12-22 12:09:21
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2020-12-26 10:28:59
 */

let { Schema } = require('mongoose');
let { mongoClient } = require('../utils/mongo');

const mobilePhoneSchema = new Schema(
  {
    model_name: { type: String },
    size: { type: String },
    spec: { type: String },
    ram: { type: Number },
    rom: { type: Number },
    seria_number: { type: String },
    deleted: { type: Boolean, default: false }
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created', updatedAt: 'updated' },
    // 查询时是否执行 setters
    runSettersOnQuery: true
  }
);

console.log('实体类mobilePhone', new Date().getTime());
let mobilePhone = mongoClient.model(
  'mobilePhone',
  mobilePhoneSchema,
  'mobile-phone'
);

class mobilePhoneDoc {
  _id;
  model_name;
  size;
  spec;
  ram;
  rom;
  seria_number;
  deleted = false;
}

module.exports = { mobilePhone, mobilePhoneDoc };
