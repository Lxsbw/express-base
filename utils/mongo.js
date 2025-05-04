import mongoose from 'mongoose';
import { mongodbConfig, env } from '../config/config.default.js';

/**
 * 使用 Node 自带 Promise 代替 mongoose 的 Promise,否则会报错
 */
// mongoose.Promise = global.Promise;

/**
 * 配置 MongoDb options
 */
function getMongodbConfig() {
  let options = {
    // useCreateIndex: true,
    maxPoolSize: 5, // 连接池中维护的连接数
    // useNewUrlParser: true,
    autoIndex: false,
    // useUnifiedTopology: true
    // keepAlive: 120,
  };
  return options;
}

/**
 * 拼接 MongoDb Uri
 *
 */
function getMongoUrl() {
  let mongoUrl = 'mongodb://';
  let dbName = mongodbConfig.db;
  mongoUrl += `${mongodbConfig.user}:${mongodbConfig.pass}@${mongodbConfig.host}:${mongodbConfig.port}`;
  mongoUrl += `/${dbName}`;

  return mongoUrl;
}

/**
 * mongoose debug模式，语句跟踪
 */
mongoose.set('debug', env.DEBUG);

/**
 * 创建 Mongo 连接，内部维护了一个连接池，全局共享
 */
// console.log(new Date().getTime());
let mongoClient = mongoose.createConnection(getMongoUrl(), getMongodbConfig());

/**
 * Mongo 连接成功回调
 */
mongoClient.on('connected', function () {
  // console.log(new Date().getTime());
  console.log('Mongoose连接至 ：' + getMongoUrl());
});

/**
 * Mongo 连接失败回调
 */
mongoClient.on('error', function (err) {
  console.log('Mongoose 连接失败，原因: ' + err);
});
/**
 * Mongo 关闭连接回调
 */
mongoClient.on('disconnected', function () {
  console.log('Mongoose 连接关闭');
});

/**
 * 关闭 Mongo 连接
 */
function close() {
  mongoClient.close();
}

export { mongoClient, close };
