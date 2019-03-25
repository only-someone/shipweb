var express=require('express');
var router=express.Router();
module.exports = router;
var MongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/ship';


var find=function(res,db,col,docs,size,callback){
    var obj={};
    try{
        var collection=db.collection('shipinfo');
        var cursor=collection.find(docs);
        cursor.limit(parseInt(size)).toArray(function (err,result) {
            if(err){
                obj.msg=err;
                console.log(err);
            }else{
                obj.data==result;
                obj.suc=true;
            }
            db.close();
            res.end(obj);
        });
    }catch (e) {
        obj.msg=e.toString();
        console.log("find 错误");
        console.log(e);
        res.end(obj);
    }
}

var find_byid=function(res,id){
    var obj={};
    try{
        var collection=db.collection('shipinfo');
        var cursor=collection.find({_id:id});
        cursor.limit(parseInt(size)).toArray(function (err,result) {
            if(err){
                obj.msg=err;
                console.log(err);
            }else{
                obj.data==result;
                obj.suc=true;
            }
            db.close();
            res.json(obj);
        });
    }catch (e) {
        obj.msg=e.toString();
        console.log("find 错误");
        console.log(e);
        res.end(obj);
    }
}
router.get('/ship',function(req,res,next){
    res.render('shipSearch',{title:'shipSearch'});
    console.log(req.body.col);
    console.log(req.body.docs);
    var size=req.body["size"];
    console.log(size);
    var docs={};
    if(req.body.docs){
        try{
            docs=eval("("+req.body.docs+")");
        }catch(e){
            console.log(e);
        }
    }
    MongoClient.connect(url,function (err,db) {
        find(res,db,req.body.col,docs,size);
    });
}).post("/ship",function(req,res,next){
    var docs={};
    if(req.body.docs){
        try{
            docs=eval("("+req.body.docs+")");
        }catch(e){
            console.log(e);
        }
    }
    MongoClient.connect(url,function (err,db) {
        var updateDocs={};
        if(req.body.updateDocs){
            try{
                updateDocs=eval("("+req.body.updateDocs+")");
            }catch(e){
                console.log(e);
            }
        }
        update(res,db,req.body.col,docs,updateDocs);
    })
    put("/ship",function (req,res,next) {
        var docs={};
        if(req.body.docs){
            try{
                docs=eval("("+req.body.docs+")");
            }catch(e){
                console.log(e);
            }
        }
        MongoClient.connect(url,function (err,db) {
            del(res,db,req.body.col,docs);
        })
    })
})

