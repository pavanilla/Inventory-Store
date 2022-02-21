const express=require("express")



const router=express.Router()
const bcrypt=require("bcrypt")
const User=require("../models/User")
// const user = require("../models/User")

/***
 * @action ADD a New user into Allecovian account 
 * @route http://localhost:3000/signup
 * @method:post
 */

router.post("/signup",(req,res)=>{
    let {name,email,password}=req.body
    name=name.trim()
    email=email.trim()
    password=password.trim()

    if (name== " "|| email== " "||password== " "){
        res.send({
            status:"signup Failed",
            error:"Empty input fields"
        })
    }
    else if(!/^[a-zA-Z ]*$/.test(name)){
        res.send({
            status:"signup Failed",
            error:"please verify the name"
        })
    }
    else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.text(email)){
        res.json({
            status:"signup Failed",
            error:"please verify the emailId"
        })
    }
    else if(password.length<8){
        res.json({
            status:"signup Failed",
            error:"password should be minimum 8 characters"
        })
    }
    else{
        // check for the email is registered into our data or not 
      User.find({email}).then(data=>{
          if(data.length){
              res.json({
                  status:"user is already registered",
                  error:"please try login into your account"
              })
          }
          else{
              // create the new user 
            const saltRounds=10
            bcrypt.hash(password,saltRounds).then(hashedPassword=>{
                  const new_user=new User({
                      name,
                      password:hashedPassword,
                      email
                  })
                  new_user.save().then(result=>{
                      res.json({
                          status:"SignUp is successful"
                      })
                  })
            })
            .catch((err)=>{
                console.log(err)
            })

          }
      })
    }
})


/***
 * @action Making user to login into their account
 * @route http://localhost:3000/login
 * @method:post
 */


router.post("/login",(req,res)=>{
      const {email,password}=req.body
      email=email.trim()
      password=password.trim()
      if(name==" "||password==" "){
          res.json({
              status:"Login Failed",
              error:"Input fields cannot be empty"
          })
      }else {
          User.find({email}).then(data=>{
              if(data){
                  const hashedPassword=data[0].password
                  const compare=bcrypt.compare(hashedPassword,password)
                  compare.then((data)=>{
                      if(data){
                          res.redirect('/inventory')
                      }
                  }).catch((err)=>{
                      res.json({status:"login failed",
                      message:"please verify your username and password correctly"})
                  })
              }
              else{
                  res.json({
                      status:"login failed",
                      error:"please enter a valid email Id"
                  })
              }

          })
        }
})