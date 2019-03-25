let mongo_find = require("./mongooseDeal");
const SHIP_SERVER={
    find_byid:(res,req)=>{
        mongo_find.findByname(req,res).then(doc=>{
            console.log(doc)
            res.json({
                code:1,
                res:doc
            })
        })
    }
}
module.exports =  SHIP_SERVER