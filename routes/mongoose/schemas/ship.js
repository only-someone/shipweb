var mongoose = require('mongoose');
var Shipschema=new mongoose.Schema({
    'MMSI':String,
    /*
    GPS:{
        lon:Number ,
        lat:Number ,
    },
    */
    'IMO':String,
    '船长':String,
    '船宽':String,
    '呼号':String,
    '中文名':String,
    '公司':String,

},{collection: 'student'
})
module.exports=Shipschema;