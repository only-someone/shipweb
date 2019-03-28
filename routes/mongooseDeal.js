const ship=require("./mongoose/models/ship");
const shipdyna=require("./mongoose/models/shipdyna");
const shipdynahis=require("./mongoose/models/shipdynahis");
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
    findshiphis:(req,res)=> {
        let id = req.body.id;
        console.log(id);
        let p = new Promise((resolve, reject) => {
            shipdynahis.find({"MMSI": id},{"_id":0,"GPS":1,"船首向":1,"船迹向":1,"航速":1,"？2nav_status":1},{limit:50}, (err, doc) => {
                if (err) {
                    reject(err)
                }
                //console.log(doc)
                resolve(doc);
                res.json({"res":doc});
            })
        })
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
}
module.exports = mogo_ship;
//Copy from NoSQLBooster for MongoDB free edition. This message does not appear if you are using a registered version.
