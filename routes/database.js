var MongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/ship';
var find_ship=function(db,shipID,callback){
    var obj={};
    try{
        var collection_info=db.collection("shipinfo");
        var collection_dyna=db.collection("shipdyna")
        var ship_info=collection.findOne({"_id":shipID});
        var ship_dyna=collection.findOne({"_id":shipID});
        ship_info.toArray(function(err,result){
            if(err){
                obj.msg=err;
                console.log(err);
            }else{
                obj.data+=result;
                obj.suc=true;
            }
            db.close();
            res.json(obj);
        });
        ship_dyna.toArray(function(err,result){
            if(err){
                obj.msg=err;
                console.log(err);
            }else{
                obj.data+=result;
                obj.suc=true;
            }
            db.close();
            res.json(obj);
        });

    }catch(e){
        obj.msg=e.toString();
        console.log("find异常")
        console.log(e);
        res.json(obj);
    }
}
MongoClient.connect(url, function(err, db) {
    console.log("连接成功！");
    //执行插入数据操作，调用自定义方法
    insertData(db, function(result) {
        //显示结果
        console.log(result);
        //关闭数据库
        db.close();
    });
});
/*
var find_allships=function(db,shipID,callback){//当前基本信息 位置，船迹向，预到港，船首向，国籍，中文名
    var obj={};
    try{
        var collection_info=db.collection("shipinfo");
        var collection_dyna=db.collection("shipdyna")
        var set=
        var cursor=collection_dyna.find({"_id":shipID});
        cursor.toArray(function(err,result){
            if(err){
                obj.msg=err;
                console.log(err);
            }else{
                obj.data=result;
                obj.suc=true;
            }
            db.close();
            res.json(obj);
        });

    }catch(e){
        obj.msg=e.toString();
        console.log("find异常")
        console.log(e);
        res.json(obj);
    }
}
var find_dynahis=function(db,shipID,callback){//基本信息 位置，船迹向，预到港，船首向，国籍，中文名
    var obj={};
    try{
        var collection_info=db.collection("shipinfo");
        var collection_dyna=db.collection("shipdyna")
        var cursor=collection.find(shipID);
        cursor.toArray(function(err,result){
            if(err){
                obj.msg=err;
                console.log(err);
            }else{
                obj.data=result;
                obj.suc=true;
            }
            db.close();
            res.json(obj);
        });

    }catch(e){
        obj.msg=e.toString();
        console.log("find异常")
        console.log(e);
        res.json(obj);
    }
}
*/