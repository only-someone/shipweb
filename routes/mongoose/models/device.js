const mongoose = require('../mongooseConfig');
const DeviceSchema = require("../schemas/device");
//model封装数据库操作函数
const device = mongoose.model('device',DeviceSchema); //创建model的时候
module.exports  = device;