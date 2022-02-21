const mongoose=require("mongoose")


const Schema=mongoose.Schema

const BagSchema=new Schema({
    Size:Number,
    Weight:Number,
    FlapColor:String
})

const Bag=mongoose.model("Bag",BagSchema)

mongoose.exports=Bag