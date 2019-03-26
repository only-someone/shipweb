const mongoose = require('../mongooseConfig');
const Shipdynahisschema = require("../schemas/shipdynahis");
//model封装数据库操作函数
const shipdynahis = mongoose.model('shipdynahis',Shipdynahisschema); //创建model的时候
module.exports  = shipdynahis;