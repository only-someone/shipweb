const mongoose = require('../mongooseConfig');
const Shipdynaschema = require("../schemas/shipdyna");
//model封装数据库操作函数
const Shipdyna = mongoose.model('shipdyna',Shipdynaschema); //创建model的时候
module.exports  = Shipdyna;