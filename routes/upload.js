var  Papa=require('papaparse')
var  mongodb = require('mongodb');
var lineReader = require('line-reader');
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
                            for()
                            //逐行读取csv文件
                            jason={
                                "shipinfo":, "发电机功率", '主机平均转速','增压器转速','气缸排气量',
                                '气缸冷却水温度','燃料油量','柴油量','活塞冷却水温度','机油温度',
                                '减速箱油压','增压器压强','海水温度','机舱温度', '更新时间'
                            }
                        }
                                //存入数据库
                            collection.insert(json,{safe:true},function(err,result){
                                console.log(result);
                            });
                        }
                    })
                }
                else{
                    console.log(err);
                }
            });
        }
}

