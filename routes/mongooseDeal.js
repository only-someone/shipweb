const ship=require("./mongoose/models/ship");
let mogo_ship={
    findByname:(req,res)=>{
        let{shipname}=req.body
        console.log(shipname);
        let p =new Promise((resolve,reject)=>{
            ship.find({},(err,doc)=>{
                if(err){reject(err)}
                resolve(doc)
            })
        })
        return p;
    },
}
module.exports = mogo_ship;