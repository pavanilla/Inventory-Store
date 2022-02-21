const mongoose=require("mongoose")
const Schema=mongoose.Schema
const StoreSchema=new Schema({
      Repaired:[{
            type:mongoose.Types.ObjectId,
            ref:"Repaired"
      }],
      Damaged:[{
            type:mongoose.Types.ObjectId,
            ref:"Damaged"
      }],
      Ready:[{
            type:mongoose.Types.ObjectId,
            ref:"Ready"
      }],
})
const Store=mongoose.model("store",StoreSchema)
module.exports=Store




