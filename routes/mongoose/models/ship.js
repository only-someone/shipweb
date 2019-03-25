const mongoose = require('../mongooseConfig');
const Shipschema = require("../schemas/ship");
//model封装数据库操作函数
const Ship = mongoose.model('shipinfo',Shipschema); //创建model的时候
module.exports  = Ship;