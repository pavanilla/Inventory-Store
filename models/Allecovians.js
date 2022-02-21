const mongoose=require("mongoose")


const Schema=mongoose.Schema

const AllEcovians=new Schema({
    available:[{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }]
})

const allecovians=mongoose.model("AlEcoviansModel",AllEcovians)

module.exports=allecovians