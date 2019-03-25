let mongo_ship = require("./mongooseDeal");
const SHIP_SERVER={
    find_byname:(res,req)=>{
        mongo_ship.findByname(req,res).then(doc=>{
            
            res.json({
                res:doc
            })
        })
    }
}
module.exports =  SHIP_SERVER