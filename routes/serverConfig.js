const express = require('express')
const app = express();
const path = require('path');
const bodyparser = require('body-parser');

//开发环境跨域测试
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.sendStatus(200);
    }
    else {
        next();
    }
});
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ //处理form格式提交的post请求
    extended: true
}));
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static("dist/uploadcache"));

module.exports = app;