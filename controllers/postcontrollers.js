const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const Like = require("../models/Like");

//gallery/search post route
router.get("/", async (req, res, next) => {
    try {
        let foundPosts = [];
        let allLikes = [];
        if (req.query.q) {
            const query = { $text: { $search: `${req.query.q}` } };
            foundPosts = await Post.find(query).populate("user");
            for (let i = 0; i < foundPosts.length; i++) {
                let foundLike = await Like.findOne({ post: `${foundPosts[i]._id}` });
                allLikes.push(foundLike);
            }
        } else {
            foundPosts = await Post.find().populate("user");
            allLikes = await Like.find();
        }
        const context = {
            posts: foundPosts,
            searchTerm: req.query.q,
            likes: allLikes,
        }
        res.render("posts/gallery", context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});


//new route
router.get("/new", (req, res) => {
    let context = {};
    if (!req.session.currentUser) {
        context = {
            error: { message: "Nice try buddy, but you SHALL NOT PASS. Why don't you try signing up for an account?" },
        };
        return res.render("404", context);
    }
    return res.render("posts/new", context);
});


//create route
router.post("/", async (req, res, next) => {
    try {
        req.body.user = req.session.currentUser.id;
        const newPost = await Post.create(req.body);
        const newLike = await Like.create({ post: newPost._id });
        return res.redirect(`/gallery/${newPost.id}`);
    } catch (error) {
        const context = {
            error,
        };
        return res.render("posts/new", context);
    }
});


//show single post route
router.get("/:id", async (req, res, next) => {
    try {
        const foundPost = await Post.findById(req.params.id).populate("user");
        const allComments = await Comment.find({ post: req.params.id }).populate("post user");
        const foundLikes = await Like.findOne({ post: req.params.id });
        const context = {
            post: foundPost,
            comments: allComments,
            likes: foundLikes,
        }

        return res.render("posts/show", context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

//update route
router.get("/:id/edit", async (req, res, next) => {
    try {
        const foundPost = await Post.findById(req.params.id);
        const context = {
            post: foundPost,
        }
        
        if (req.session.currentUser && req.session.currentUser.id == '120569a838391314d541f1f1') {
            return res.render("posts/edit", context);
        } else if (!req.session.currentUser || foundPost.user != req.session.currentUser.id) {
            const context = {
                error: { message: "Nice try buddy, but you SHALL NOT PASS" },
            };
            return res.render("404", context);
        }



        return res.render("posts/edit", context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

//update put route
router.put("/:id", (req, res, next) => {
    Post.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        {
            new: true,
        },
        (error, updatedPost) => {
            if (error) {
                console.log(error);
                req.error = error;
                return next();
            }
            return res.redirect(`/gallery/${updatedPost.id}`);
        }
    );
})

//delete route
router.delete("/:id", async (req, res, next) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        await Comment.deleteMany({ post: req.params.id });
        await Like.deleteMany({post:req.params.id});
        return res.redirect("/gallery");
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

module.exports = router;