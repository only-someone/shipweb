let mongo_ship = require("./mongooseDeal");
const SHIP_SERVER={
    find:(res,req)=>{
        mongo_ship.findship(req,res).then(doc=>{
            res.json({res:doc})
        })
    },
    finddetail:(res,req)=>{
        mongo_ship.findshipdetail(req,res).then(doc=>{
            res.json({res:doc})
        })
    },
    findhis:(res,req)=>{
        mongo_ship.findshiphis(req,res)
    },
    findall:(res,req)=>{
        mongo_ship.findallhip(req,res).then(doc=>{
            res.json({res:doc})
        })
    },
    finddevice:(res,req)=>{
        mongo_ship.finddevice(req,res).then(doc=>{
        res.json({res:doc})
        })
    },
    finddevicehis:(res,req)=>{
        mongo_ship.finddevicehis(req,res).then(doc=>{
            res.json({res:doc})
        })
    },
    findid:(res,req)=>{
        mongo_ship.findidbyname(req,res).then(doc=>{
            res.json({res:doc})
        })
    },
}
module.exports =  SHIP_SERVER