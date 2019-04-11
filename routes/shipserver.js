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
    finddevicehis_coldwater:(res,req)=>{
        mongo_ship.finddevicehis_coldwater(req,res).then(doc=>{
            compare=function(a,b){
               //property="更新时间";
                var value1 = a["更新时间"];
                console.log(value1)
                //var newDt1=new Date(value1.replace(/-/g,"/"));
                var value2 = b["更新时间"];
                //var newDt2=new Date(JSON.stringify(value2).replace(/-/g,"/"));
                return value1 - value2;
            };
            doc.sort(compare);

            res.json({res:doc})
        })
    },
    finddevicehis_dieseloil:(res,req)=>{
        mongo_ship.finddevicehis_dieseloil(req,res).then(doc=>{
            res.json({res:doc})
        })
    },
    finddevicehis_Supercharger:(res,req)=>{
        mongo_ship.finddevicehis_Supercharger(req,res).then(doc=>{
            res.json({res:doc})
        })
    },
    findid:(res,req)=>{
        mongo_ship.findidbyname(req,res).then(doc=>{
            res.json({res:doc})
        })
    },
}
module.exports =  SHIP_SERVER;
//排序 去重
