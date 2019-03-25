const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/ship",{useNewUrlParser: true},(err)=> {
    if (err) {
        console.log("连接失败");
    } else {
        console.log("连接成功");
    }
})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});
module.exports = mongoose;