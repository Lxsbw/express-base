/*
 * @Author: zhixiong.fu
 * @Date: 2020-12-22 15:21:06
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-10-02 21:13:43
 */
'use strict';

/**
 * @typedef MobilePhone
 * @property {string} model_name.required - 手机型号 - eg: xx
 * @property {string} size.required - 尺寸 - eg: 4.7
 * @property {string} spec.required - 规格 - eg: black
 * @property {number} ram - 内存 - eg: 4
 * @property {number} rom - 空间 - eg: 64
 * @property {string} seria_number - 序列号 - eg: 00010
 */

/**
 * @typedef MobilePhoneUpd
 * @property {string} _id.required - id - eg: xx
 * @property {string} model_name.required - 手机型号 - eg: xx
 * @property {string} size - 尺寸 - eg: 4.7
 * @property {string} spec - 规格 - eg: black
 * @property {number} ram - 内存 - eg: 4
 * @property {number} rom - 空间 - eg: 64
 * @property {string} seria_number - 序列号 - eg: 00010
 */

/**
 * @typedef MobilePhoneUpdPatch
 * @property {string} _id.required - id - eg: xx
 * @property {string} model_name.required - 手机型号 - eg: xx
 */

/**
 * @typedef MobilePhoneDel
 * @property {string} _id.required - id - eg: xx
 */
