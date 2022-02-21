const express=require("express")
const res = require("express/lib/response")
const router=express.Router()
const db=require("../models/index")
const { findByIdAndUpdate } = require("../models/User")


/***
 * @action ADD a New Bag into inventory store
 * @route http://localhost:3000/inventory/:id
 * @method:Get
 */
router.get("/inventory/:id",async (req,res)=>{
    const stores=db.User.findById({_id:req.body._id}).populate("stores")

    if(stores.length){
        res.json({
            "status":"success",
            "store_id":stores
        })
    }
    else{
        res.json({
            "status":"error while fetching the data"
        })
    }
})



/***
 * @action ADD a New Bag into inventory store
 * @route http://localhost:3000/inventory/:id
 * @method:Get
 */


function UpdateEcovian(newUpdate_id,target_id){
    return db.AllEcovians.findById(newUpdate_id).then((data)=>{
        $push:{store:{target_id}}
    })

}
router.put("/inventory/:id",async(req,res)=>{
    const {target_id,newUpdate_id}=req.body
    const id=req.params.id
    const stores=db.User.findById({_id:id}).populate("stores")
    // remove the store id here and need to send to another 
    for(var i=0;i<stores.length;i++){
        if(db.User[i].id.equals(target_id)){
            db.User.slice(i,1);
            db.User.save()
        }
    }

    const data=UpdateEcovian(newUpdate_id)


})



/***
 * @action ADD a New Bag into inventory store
 * @route http://localhost:3000/inventory/:id/store
 * @method:get
 */
function getStoreData(store_id,){

    var stores_id=[]
     const Ready=db.Store.findById(store_id).populate("Ready")
     const Repaired=db.Store.findById(store_id).populate("Repaired")
     const Damaged=db.Store.findById(store_id).populate("Damaged")
      try{
          stores_id=Promise.all([Ready,Repaired,Damaged]).then((data)=>{
              return data
          })
      }catch(err){
          res.send("Error occured while fetching the data ")
      }
}

router.get("/inventory/:id/store",async(req,res)=>{
    const store_id=req.params.id
    const data=await getStoreData(store_id)
    if(data.length>=1){
        res.json({
            status:"success",
            data
        })
    }
    else{
        res.json({
            error:"while fetching the data "
        })
    }

})

/***
 * @action ADD a New Bag into inventory store
 * @route http://localhost:3000/inventory/:id/:type
 * @method:post
 */
router.post("/inventory/:id/:type",async (req,res)=>{
    const store_id=req.params.id
    const Type=req.params.type
    try{
        const data=await db.Bag.create(req.body).then((data)=>{
            return db.Type.findByIdAndUpdate(
                store_id,
                { $push: { bag: data._id } },
                { new: true, useFindAndModify: false }
              );
        })
        res.send(data)
    }catch(err){
        res.send(err)
    }
})


/***
 * @action ADD a update step  into inventory store
 * @route http://localhost:3000/inventory/:id/:old_cat/:new_cat
 * @method:post
 */
router.put("/inventory/:category_id/:old_cat:/:new_cat",async(req,res)=>{
    const {old_id}=req.body
    const oldCategory=req.params.old_cat
    const newCategory=req.params.new_cat
   try{
       const finding=await db.oldCategory.bag.findOne({_id:old_id})
       for(var i=0;i<db.oldCategory.bag.length;i++){
           if(db.oldCategory.bag[i].equals(finding_.id)){
               db.oldCategory.bag[i].slice(i,1)
               db.oldCategory.bag.save()
           }
       }
       const updating=await db.newCategory.bag.push(finding._id).then((data)=>data.save())
       res.send({
           status:"successfully update the item"
       })
   }
   catch(err){
       res.send(err)
    }
})



/***
 * @action ADD a delete step into the store
 * @route http://localhost:3000/inventory/:category_id/:type
 * @method:delete
 */

router.delete("/inventory/:category_id/:type",async(req,res)=>{
    const category_id=req.params.id
    const {category}=req.body
    try{
        const data=await db.category.bag.findOne({_id:category_id})
        for(var i=0;i<db.category.bag.length;i++){
            if(db.category.bag[i].equals(data._id)){
                db.category.bag.slice(i,1)
                db.category.bag.save()
            }
        }
        res.json({status:"Success"})
    }
    catch(err){
      res.send(err)
    } 
}) 




