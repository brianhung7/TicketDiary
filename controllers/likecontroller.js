const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");
const Comment = require("../models/Comment");
const Like = require("../models/Like");

router.get("/", (req, res, next) => {
    res.send("hi");
})


//Increase like counter for a post
router.put("/:id", async (req, res, next) => {
    try {
        const foundLikes = await Like.findOne({ post: req.params.id });

        let userInArray = false
        for (i = 0; i < foundLikes.userArr.length;i++) {
            if (foundLikes.userArr[i] == req.session.currentUser.id) {
                userInArray = true;
            }
        }
        if (!userInArray) {
            foundLikes.numLikes++;
            foundLikes.userArr.push(req.session.currentUser.id);
            await Like.findByIdAndUpdate(
                foundLikes._id,
                { numLikes: foundLikes.numLikes,
                 userArr: foundLikes.userArr,
                },
                { new: true },
            )
        }

        return res.redirect(`/gallery/${req.params.id}`);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});
module.exports = router;