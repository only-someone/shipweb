const ship=require("./mongoose/models/ship");
let mogo_ship={
    findByname:(req,res)=>{
        let{shipname}=req.body
        let p =new Promise((resolve,reject)=>{
            ship.find({},(err,doc)=>{
                console.log(shipname);
                if(err){reject(err)}
                resolve(doc)
            })
        })
        return p;
    },
}
module.exports = mogo_ship;