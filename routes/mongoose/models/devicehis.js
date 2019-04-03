const mongoose = require('../mongooseConfig');
const DevicehisSchema = require("../schemas/devicehis");
//model封装数据库操作函数
const devicehis = mongoose.model('devicehis',DevicehisSchema); //创建model的时候
module.exports  = devicehis;