var mongoose = require('mongoose');
var Shipschema=new mongoose.Schema({
    MMSI:String,
    GPS:{
        lon:Number ,
        lat:Number ,
    },
    nation:String,
    status:String,
    speed:String,
    port:String,
    direction:String,
    updatetime:String,
    arrivetime:String,
});
module.exports=Shipschema;