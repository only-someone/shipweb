const mongoose = require('../mongooseConfig');
const ShipPathschema = require("../schemas/shippath");
//model封装数据库操作函数
const shippath = mongoose.model('shippath',ShipPathschema); //创建model的时候
module.exports  = shippath;