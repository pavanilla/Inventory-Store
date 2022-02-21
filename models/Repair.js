const mongoose=require("mongoose")


const Schema=mongoose.Schema

const RepairedSchema=new Schema({
    bag:[{
        type:mongoose.Types.ObjectId,
        ref:"Bag"
    }]
})

const Repaired=mongoose.model("Repaired",RepairedSchema)


module.exports=Repaired