const mongoose=require("mongoose")
const Schema=mongoose.Schema

const UserSchema=new Schema({
    name:String,
    phoneNumber:Number,
    password:String,
    email:String,
    stores:[{
        type:mongoose.Types.ObjectId,
        ref:"Store"
    }]
})

const User=mongoose.model("User",UserSchema)


module.exports=User