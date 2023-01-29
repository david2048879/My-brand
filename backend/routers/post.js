const router = require('express').Router();
const { create } = require('../models/users');
const blog = require('../models/post');
const { Route } = require('express');
const post = require('../models/post');
const postcontroller  = require('../controllers/postcontroller');





router.post('/', postcontroller.createPost);

//UPDATE Post

router.put('/:id', async (req, res)=>{
    if(blog.id=== req.paramsid ){
        try{

            const updateblog = await blog.findByIdAndUpdate(req.params.id, {
                $set: req.body
            })
           res.status(200).json(updateblog)
        }catch(err){
            res.status(500).json(err)
        }
            
    }else{
        res.status(401).json("no blog found!")
    }
   
});

// delete post
router.delete('/:id', async (req, res)=>{
    try{
       const posts = await blog.findById(req.params.id);
       if(blog.id == req.id){
        try{
           await posts.delete();
           res.status(200).json('Post has been deleted...'); 

        }catch(err){
            res.status(500).json(err)
        }
       }else{res.status(404).json('you can delete only your post')}
    
}catch(err){
    res.status(404).json(err)
}

});


//get post
router.get('/:id', async (req, res)=>{
    try{
        const posts = await blog.findById(req.params.id);
        res.status(200).json(posts)
    }catch(err){
        res.status(500).json(err)
    }
   
});

//get all post
router.get('/', async (req, res)=>{
    const username = req.body.username;
    const catName = req.query.cat;
    try{
        let posts;
        if(username){
            posts = await post.find({username});
        }else if(catName){
            posts= await post.find({categories:{$sin:[catName]}})
        }else{
            posts = await post.find()
        }
        res.status(200).json(posts)
    }catch(err){
        res.status(500).json(err)
    }
   
});


module.exports= router