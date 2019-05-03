const ship=require("./mongoose/models/ship");
const shipdyna=require("./mongoose/models/shipdyna");
const shipdynahis=require("./mongoose/models/shipdynahis");
const device=require("./mongoose/models/device");
const devicehis=require("./mongoose/models/devicehis");
const shippath=require("./mongoose/models/shippath");
let mogo_ship={
    findship:(req,res)=>{
        let{shipname,id}=req.body;
        let p =new Promise((resolve,reject)=>{
            if(id){
                ship.findOne({"MMSI":id},(err,doc)=>{
                    console.log(shipname);
                    console.log(id);
                    if(err){reject(err)}
                    resolve(doc);
                })
            }
            else if(shipname){
                ship.find({"英文名":{$regex:".*"+shipname+".*"}},(err,doc)=>{
                    console.log(shipname);
                    console.log(id);
                    if(err){reject(err)}
                    resolve(doc)
                })
            }
        })
        return p;
    },
    findshipdetail:(req,res)=>{
        let id=req.body.id;
        console.log(id);
        let p =new Promise((resolve,reject)=>{
            shipdyna.findOne({"MMSI":id},(err,doc)=>{
                if(err){reject(err)}
                resolve(doc);
            })
        })
        return p;
    },
    finddevice:(req,res)=>{
        let id=req.body.id;
        console.log(id);
        let p =new Promise((resolve,reject)=>{
            device.findOne({"shipinfo":id},(err,doc)=>{
                if(err){reject(err)}
                resolve(doc);
            })
        })
        return p;
    },
    finddevicehis_coldwater:(req,res)=>{
        let id=req.body.id;
        console.log(id);
        let p =new Promise((resolve,reject)=>{
            devicehis.find({"shipinfo":id},{"_id":0,"气缸冷却水温度":1,"更新时间":1},{limit:4032},(err,doc)=>{//24*60/5  *14
                if(err){reject(err)}
                resolve(doc);//需要去重，排序
            })
        })
        return p;
    },
    finddevicehis_dieseloil:(req,res)=>{
        let id=req.body.id;
        console.log(id);
        let p =new Promise((resolve,reject)=>{
            devicehis.find({"shipinfo":id},{"_id":0,"柴油量":1,"更新时间":1},{limit:4032},(err,doc)=>{//24*60/5  *14
                if(err){reject(err)}
                resolve(doc);//需要去重，排序
            })
        })
        return p;
    },
    finddevicehis_Supercharger:(req,res)=>{
        let id=req.body.id;
        console.log(id);
        let p =new Promise((resolve,reject)=>{
            devicehis.find({"shipinfo":id},{"_id":0,"增压器压强":1,"增压器转速":1,"更新时间":1},{limit:4032},(err,doc)=>{//24*60/5  *14
                if(err){reject(err)}
                resolve(doc);//需要去重，排序
            })
        })
        return p;
    },
    findidbyname:(req,res)=>{
    let p =new Promise((resolve,reject)=>{
        ship.find({"英文名":req.body.shipname},{"MMSI":1},(err,doc)=>{
            if(err){reject(err)}
            resolve(doc);
        })
    })
    return p;
},

    findshiphis:(req,res)=> {
        let id = req.body.id;
        let name = req.body.shipname;
        //console.log(id);
        console.log(name)
        if(id) {
            let p = new Promise((resolve, reject) => {
                shipdynahis.find({"MMSI": id}, {
                    "_id": 0,
                    "GPS": 1,
                    "船首向": 1,
                    "船迹向": 1,
                    "航速": 1,
                    "？2nav_status": 1
                }, (err, doc) => {//2个星期2*24*7/3
                    if (err) {
                        reject(err)
                    }
                    //console.log(doc)
                    resolve(doc);
                    res.json({"res": doc});
                })
            })
        }
        else if (name) {
            let p = new Promise((resolve, reject) => {

                shipdynahis.find({"英文名": name}, {
                    "_id": 0,
                    "GPS": 1,
                    "船首向": 1,
                    "船迹向": 1,
                    "航速": 1,
                    "？2nav_status": 1
                }, (err, doc) => {//2个星期2*24*7/3
                    if (err) {
                        reject(err)
                    }
                    //console.log(doc)
                    resolve(doc);
                    res.json({"res": doc});
                })
            })
        }
    },
    findallhip:(req,res)=>{
        let p =new Promise((resolve,reject)=>{
            shipdyna.find({},{"MMSI":1,"GPS":1,"船首向":1},(err,doc)=>{
                if(err){reject(err)}
                resolve(doc);
            })
        })
        return p;
    },
    findnear:(req,res)=>{
        let p =new Promise((resolve,reject)=>{
            shipdyna.find({},{"MMSI":1,"GPS":1,"船首向":1},(err,doc)=>{
                if(err){reject(err)}
                resolve(doc);
            })
        })
        return p;
    },
    findship:(req,res)=>{
        let{shipname,id}=req.body;
        let p =new Promise((resolve,reject)=>{
            if(id){
                ship.findOne({"MMSI":id},(err,doc)=>{
                    console.log(shipname);
                    console.log(id);
                    if(err){reject(err)}
                    resolve(doc);
                })
            }
            else if(shipname){
                ship.find({"中文名":{$regex:".*"+shipname+".*"}},(err,doc)=>{
                    console.log(shipname);
                    console.log(id);
                    if(err){reject(err)}
                    resolve(doc)
                })
            }
        })
        return p;
    },
    findshippath:(req,res)=>{
        let id=req.body.id;
        console.log(id);
        let p =new Promise((resolve,reject)=>{
            shippath.findOne({"MMSI":id},{"_id":0,"regular_path":1},(err,doc)=>{
                if(err){reject(err)}
                resolve(doc);
            })
        })
        return p;
    },
}
module.exports = mogo_ship;
//Copy from NoSQLBooster for MongoDB free edition. This message does not appear if you are using a registered version.
