const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const User = require("../models/User");

router.get("/:id", async (req, res, next) => {
    try {
        const userPosts = await Post.find({ user: req.params.id });
        const foundUser = await User.findById(req.params.id);
        const context = { 
            posts:userPosts, 
            user:foundUser,
        };
        console.log(context);
        res.render("users/profile", context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});
module.exports = router;