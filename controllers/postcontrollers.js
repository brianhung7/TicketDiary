const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//gallery route
router.get("/",  (req, res, next) => {
    Post.find({}, (error,allPosts)=>{
        const context = {
            posts:allPosts,
        }
        res.render("posts/gallery",context);
    })
})

router.get("/:id", async(req,res,next)=>{
    try{
        const foundPost = await Post.findById(req.params.id);
        //const allComments = await Review.find({post: req.params.id});
        const context = {
            post: foundPost,
        }
        console.log(context);
        return res.render("posts/show",context);
    } catch(error){
        console.log(error);
    req.error = error;
    return next();
    }
})

module.exports = router;