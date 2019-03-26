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

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ship', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.post('/ship', (req,res)=>{
    SHIP_SERVER.find(res,req);
});
app.get('/ship.html', (req,res)=>{
    //var shipinfo=SHIP_SERVER.findall(res,req);
    res.sendFile( __dirname  + "/views/ship.html" );
});
app.post('/shipdetail', (req,res)=>{
    SHIP_SERVER.finddetail(res,req);
});
app.post('/shiphis', (req,res)=>{
    SHIP_SERVER.findhis(res,req);
});
app.get('/all', (req,res)=>{
    console.log("all")
    SHIP_SERVER.findall(res,req);
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
