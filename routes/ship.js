var mongoose = require('mongoose');
var ShipBasicSchema=new mongoose.Schema({
    MMSI:String,
    GPS:{
        lon:double,
        lat:double,
    },
    nation:String,
    status:String,
    speed:String,
    port:String,
    direction:String,
    updatetime:String,
    arrivetime:String,
});

ShipBasicSchema.statics={
    fetch:function(id,cb){
        return this.findOne({_id:id}).exec(cb)
    }
}
module.exports=ShipBasicSchema;
var ship_basic = mongoose.model('ship_basic', ShipBasicSchema);