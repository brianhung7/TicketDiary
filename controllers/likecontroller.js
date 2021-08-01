const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");
const Comment = require("../models/Comment");
const Like = require("../models/Like");

router.get("/", (req, res, next) => {
    res.send("hi");
})


router.put("/:id", async (req, res, next) => {
    try {
        const foundPost = await Post.findById(req.params.id).populate("user");
        const allComments = await Comment.find({ post: req.params.id }).populate("post user");
        const foundLikes = await Like.findOne({post: req.params.id});
        console.log("BEFORE UPDATE", foundLikes);
        foundLikes.numLikes++;
        await Like.findByIdAndUpdate(
            foundLikes._id,
            {numLikes: foundLikes.numLikes},
            {new:true},
        )
        const context = {
            post: foundPost,
            comments: allComments,
            likes: foundLikes,
        }
        return res.redirect(`/gallery/${req.params.id}`);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});
module.exports = router;