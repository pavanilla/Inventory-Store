const mongoose=require("mongoose")


const Schema=mongoose.Schema

const ReadySchema=new Schema({
    bag:[{
        type:mongoose.Types.ObjectId,
        ref:"Bag"
    }]
})

const Ready=mongoose.model("Ready",DamagedSchema)


module.exports=Ready