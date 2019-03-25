const ship=require("./mongoose/models/ship");
let mongo_find={
    findByname:(req,res)=>{
        let{shipname}=req.body
        let p =Promise((resolve,reject)=>{
            ship.find({'中文名':shipname},(ree,doc)=>{
                if(err){reject(err)}
                resolve(doc)
            })
        })
        return p;
    },

}
module.exports = {mongo_find}