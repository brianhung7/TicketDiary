const express = require("express");
const router = express.Router();

const Post = require("../models/Post");
const Comment = require("../models/Comment");

// create 
// "/" - POST - functional

router.post("/", async (req, res, next) => {
    try {
        //If user is logged in, use their id, otherwise use anonymous user
        if (req.session.currentUser) {
            req.body.user = req.session.currentUser.id;
        } else {
            req.body.user = "120569a838391314d541f1fd";
        }
        let foundPost = await Post.findById(req.body.post);
        let addPostCount = ++foundPost.numComments;
        foundPost = await Post.findByIdAndUpdate(req.body.post,
            { numComments:addPostCount },
            { new: true },
        );
        
        await Comment.create(req.body, (error, createdComment) => {
            if (error) {
                console.log(error);
                req.error = error;
                return next();
            }
            return res.redirect(`/gallery/${req.body.post}`);
        });
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});


// remove comment
router.delete("/:id", async (req, res, next) => {
    try {
        const foundComment = await Comment.findById(req.params.id);
        postId = foundComment.post;
        if (foundComment.user == req.session.currentUser.id || req.session.currentUser.id == '120569a838391314d541f1f1') {
            await foundComment.delete();
            return res.redirect(`/gallery/${postId}`);
        } else {
            return res.send("You are not allowed");
        }

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

module.exports = router;
