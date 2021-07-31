const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//gallery route
router.get("/", (req, res, next) => {
    Post.find({}, (error, allPosts) => {
        const context = {
            posts: allPosts,
        }
        res.render("posts/gallery", context);
    })
})

router.get("/", async (req, res, next) => {
    try {
        const allPosts = await Post.find();
        const context = {
            posts: allPosts,
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
    const context = {};
    return res.render("posts/new", context);
});


//create route
router.post("/", async (req, res, next) => {
    try {
        const newPost = await Post.create(req.body);
        console.log("new post MADE", newPost);
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
        const foundPost = await Post.findById(req.params.id);
        //const allComments = await Review.find({post: req.params.id});
        const context = {
            post: foundPost,
        }
        //console.log(context);
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
        //const allComments = await Review.find({post: req.params.id});
        const context = {
            post: foundPost,
        }
        //console.log("EDIT GET ROUTE", context);
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
            //console.log("Success update", updatedPost);
            return res.redirect(`/gallery/${updatedPost.id}`);
        }
    );
})

//delete route
module.exports = router;