const mongoose=require("mongoose")


const Schema=mongoose.Schema

const DamagedSchema=new Schema({
    bag:[{
        type:mongoose.Types.ObjectId,
        ref:"Bag"
    }]
})

const Damaged=mongoose.model("Damaged",DamagedSchema)


module.exports=Damaged