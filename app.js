var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs=require('ejs');
var MongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/ship';
const SHIP_SERVER = require('./routes/shipserver')
var bodyParser = require('body-parser');
var fs = require('fs');
var multer  = require('multer')

const mongoose = require('mongoose');
//mongoose.connect('mongodb://admin:djw@www.shipdata.tk:27017/admin',{useNewUrlParser: true});
mongoose.connect('mongodb://localhost:27017/ship', {useNewUrlParser: true});//本地
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});

var app = express();
app.use(express.static("./www"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var upload = multer({ dest: './csvfile' });
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//var publicRouter = require('./public');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/', indexRouter);
app.use('/users', usersRouter);


app.post('/ship', (req,res)=>{
    console.log("ship")
    SHIP_SERVER.find(res,req);
});
app.get('/ship.png', (req,res)=>{
    //var shipinfo=SHIP_SERVER.findall(res,req);
    res.sendFile( __dirname  + "/public/images/ship.png" );
});
app.get('/ships', (req,res)=>{
    //var shipinfo=SHIP_SERVER.findall(res,req);
    res.sendFile( __dirname  + "/views/ship(2).html" );
});
app.get('/shipsea', (req,res)=>{
    //var shipinfo=SHIP_SERVER.findall(res,req);
    res.sendFile( __dirname  + "/views/shipsea.html" );
});
app.get('/shipregin', (req,res)=>{
    //var shipinfo=SHIP_SERVER.findall(res,req);
    res.sendFile( __dirname  + "/views/shipregin.html" );
});
app.get('/trace', (req,res)=>{
    res.sendFile( __dirname  + "/views/track.html" );
});
app.post('/shipdetail', (req,res)=>{
    SHIP_SERVER.finddetail(res,req);
});
app.post('/shiphis', (req,res)=>{
    SHIP_SERVER.findhis(res,req);
});

app.post('/device', (req,res)=>{
    SHIP_SERVER.finddevice(res,req);
});
app.post('/devicehis_coldwater', (req,res)=>{
    console.log("devicehis")
    SHIP_SERVER.finddevicehis_coldwater(res,req);
});
app.post('/devicehis_Supercharger', (req,res)=>{
    console.log("devicehis")
    SHIP_SERVER.finddevicehis_Supercharger(res,req);
});
app.post('/devicehis_dieseloil', (req,res)=>{
    console.log("devicehis")
    SHIP_SERVER.finddevicehis_dieseloil(res,req);
});
app.post('/id', (req,res)=>{
    console.log("devicehis")
    SHIP_SERVER.findid(res,req);
});
app.get('/all', (req,res)=>{
    console.log("all")
    SHIP_SERVER.findall(res,req);
});
app.get('/upload', (req,res)=>{
    console.log("upload")
    res.sendFile( __dirname  + "/views/upload2.html" );
});
app.get('/device.csv', (req,res)=>{
    console.log("下载")
    res.sendFile( __dirname  + "/devicedata/device_data.csv" );
});
app.get('/download', (req,res)=>{
    console.log("devicehis")
    res.sendFile( __dirname  + "/views/download.html" );
});
app.get('/devicehis', (req,res)=>{
    console.log("devicehis")
    res.sendFile( __dirname  + "/views/device.html" );
});
app.post('/file_upload',upload.array('files',100),function (req, res) {
    console.log(req.files[0].originalname);
    var newName=req.files[0].path+path.parse(req.files[0].originalname).ext;
    fs.rename(req.files[0].path,newName,function(err){
        if(err){
            res.send(err);
        }else{
            res.send('成功');
        }
    });
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
//计算平均值
