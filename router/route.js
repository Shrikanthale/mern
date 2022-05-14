const express = require('express')

const router = express.Router()

require('../db')

const User = require('../model/userSchema')

router.get('/',(req, res)=>{
    console.log(req.query)
    console.log("getUser")

    User.find()
    .then((results) =>{
        res.send(results)
    })
    .catch((err) =>{
        res.send(err)
    })
    
})

router.get('/:id',(req,res)=>{

    User.findById(req.params.id)
    
    .then((results) =>{
        res.send(results)
    })
    .catch((err) =>{
        res.send(err)
    })

})

router.post('/register',async(req,res)=>{
    // console.log(req.body)
    // res.send("post method called")
    // res.json({message:req.body}) 

    const {name , email , phoneNumber} = req.body;

    if(!name || !email || !phoneNumber){
        return res.status(422).json({error:'Error occure'})
    }

    try{
       const response = await User.findOne({email:email})
       if(response){
           return res.status(422).json({error:'Duplicate vale occure'})
       } 
       const user = new User({name,email,phoneNumber})
       const userData = await user.save()

       res.status(200).json({message:'user successfully added'})
    }
    catch(err){
        console.log(err)
    }

    
})

router.delete('/:id',async(req,res)=>{

    console.log("delete data")
    
   const result = await User.findByIdAndDelete(req.params.id)
    if(result){
        return res.status(422).json({message:'delete user data'}) 
    }

})

router.put('/:id',(req,res)=>{

    console.log("update record")

    User.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
        email:req.body.email,
        phoneNumber:req.body.phoneNumber,
    })

    .then((results) =>{
        res.send(results)
    })
    .catch((err) =>{
        res.send(err)
    })

})

module.exports = router;