const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");
const Like = require("../models/Like");

//User profile route
router.get("/:id", async (req, res, next) => {
    try {
        const userPosts = await Post.find({ user: req.params.id }).populate("user");
        const foundUser = await User.findById(req.params.id);
        let allLikes = [];
        for (let i = 0; i < userPosts.length; i++) {
            let foundLike = await Like.findOne({ post: `${userPosts[i]._id}` });
            allLikes.push(foundLike);
        }
        const context = {
            posts: userPosts,
            userProfile: foundUser,
            likes: allLikes,
        };
        res.render("users/profile", context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

//User Favorites Route
router.get("/:id/favorites", async (req, res, next) => {
    try {
        const likedPosts = await Like.find({ userArr: req.params.id });
        const foundUser = await User.findById(req.params.id);
        const postArr = [];
        let allLikes = [];
        for (i = 0; i < likedPosts.length; i++) {
            postArr.push(await Post.findById(likedPosts[i].post));
        }
        context = {
            posts:postArr,
            userProfile:foundUser,
            likes: likedPosts,
        }
        res.render("users/profilefavorites",context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

//update get route
router.get("/:id/edit", async (req, res, next) => {
    try {
        const foundUser = await User.findById(req.params.id);
        if (!req.session.currentUser || foundUser._id != req.session.currentUser.id) {
            const context = {
                error: { message: "These are not the droids (profiles) you are looking for (should be editing)" },
            };
            return res.render("404", context);
        }
        const context = {
            user: foundUser,
        }
        //return res.render("posts/edit", context);
        res.send("Updated User");
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

//update put route

module.exports = router;

