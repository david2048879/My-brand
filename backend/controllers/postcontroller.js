
const { json } = require('express');
const blog = require('../models/post');





//create new post

exports.createPost = async (req, res)=>{
    const newPost = new blog(req.body);
    try{
     const savedPost = await newPost.save();
     res.status(200).json(savedPost)
    }catch(err){
     res.status(500).json(err)
    }
 }