const mongoose = require('mongoose');
var ships=require('./models/ship')
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/ship",{useNewUrlParser: true}).then(db => {
    console.log("数据库连接成功");
});

module.exports = mongoose;