const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/",  (req, res, next) => {
    Post.find({}, (error,allPosts)=>{
        const context = {
            posts:allPosts,
        }
        res.send(context);
    })
})

module.exports = router;