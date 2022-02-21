const mongoose=require("mongoose")


mongoose.connect("mongodb://localhost:27017",{useUnifiedTopology:true,useNewUrlParser:true})
.then(()=>{
    console.log("connection to the data base succesful")
})
.catch((err)=>{
    console.log(`Connection to the data base ${err}`)
})



