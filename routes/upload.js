var  Papa=require('papaparse')
var  mongodb = require('mongodb');
var  server  = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
//连接的数据库为stock
var  db = new mongodb.Db('ship', server, {safe:true});


var file_upload=function () {
    var data=Papa.parse(csv);
    Papa.parse(file,{
        complete:function (results) {
            devices=resuls.data();//1002
            console.log(devices);
            db.open(function(err, db){
                if(!err){
                    console.log('connect successful');
                    db.createCollection('device', {safe:true}, function(err, collection){
                        if(err){
                            console.log(err);
                        }else{
                            for(var i=0;i<devices.length();i++){
                                device={
                                    "shipinfo":devices[i][0],
                                    "发电机功率":devices[i][1],
                                    '主机平均转速':devices[i][2],
                                    '增压器转速':devices[i][3],
                                    '气缸排气量':devices[i][4],
                                    '气缸冷却水温度':devices[i][5],
                                    '燃料油量':devices[i][6],
                                    '柴油量':devices[i][7],
                                    '活塞冷却水温度':devices[i][8],
                                    '机油温度':devices[i][9],
                                    '减速箱油压':devices[i][10],
                                    '增压器压强':devices[i][11],
                                    '海水温度':devices[i][12],
                                    '机舱温度':devices[i][13],
                                    '更新时间':devices[i][14],
                                }
                                collection.insert(json,{safe:true},function(err,result){
                                    console.log(result);
                                });
                            }
                        }
                    })
                }
                else{
                    console.log(err);
                }
            });
        }
}

