const router = require('express').Router();
const message = require('../models/message');

//send message

router.post('/', async (req, res)=>{
    const newmessage = new message(req.body);
    try{
     const sentmessage = await newmessage.save();
     res.status(200).json(sentmessage)
    }catch(err){
     res.status(500).json(err)
    }
 });


//get message
router.get('/', async (req, res)=>{
    try{
        
        const messages = await message.find();
        res.status(200).json(messages)
    }catch(err){
        res.status(500).json(err)
    }
   
});



 module.exports= router