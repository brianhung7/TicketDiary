const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");
const Like = require("../models/Like");

router.get("/:id", async (req, res, next) => {
    try {
        const userPosts = await Post.find({ user: req.params.id });
        const foundUser = await User.findById(req.params.id);
        const context = { 
            posts:userPosts, 
            userProfile:foundUser,
        };
        //console.log(context);
        res.render("users/profile", context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

router.get("/:id/favorites", async (req, res, next)=>{
    try{
        const likedPosts = await Like.find({userArr:req.params.id});
        console.log(likedPosts);

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})


module.exports = router;

