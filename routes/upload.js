
function file_upload () {
    var file = document.getElementById("file-upload").files[0];
    //console.log(file.parse());
$("#file-upload").parse({
        config: {
            // base config to use for each file
        },
        before: function(file, inputElem)
        {
            // executed before parsing each file begins;
            // what you return here controls the flow
        },
        error: function(err, file, inputElem, reason)
        {
            // executed if an error occurs while loading the file,
            // or if before callback aborted for some reason
        },
        complete: function(results)
        {
            console.log(results.data)
            // executed after all files are complete
        }
    });
   /* var data=parse(csv);
    Papa.parse(file,{
        complete:function (results) {
            var devices=resuls.data();//1002
            console.log(devices);
            db.open(function(err, db){
                if(!err){
                    console.log('connect successful');
                    db.createCollection('device', {safe:true}, function(err, collection){
                        if(err){
                            console.log(err);
                        }else{
                            var i=0;
                            for(i;i<devices.length();i++){
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
                                };
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
        }});*/
}

