require('./config/db')


const express=require("express")
const app=express()
const bodyParser=require("express").json
app.use(bodyParser())


const useRouter=require("./User")
const useInventory=require("./Inventory")



// redirect the database calls to the useRouter function 
app.use("/user",useRouter)
app.use("/inventory",useInventory)



app.listen(5000,()=>{
    console.log("server is running on the port 3000")
})


