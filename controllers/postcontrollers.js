const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const Comment = require("../models/Comment");

//gallery/search post route
router.get("/", async (req, res, next) => {
    try {
        let foundPosts = [];
        if (req.query.q) {
            const query = { $text: { $search: `${req.query.q}` } };
            foundPosts = await Post.find(query);
            console.log(foundPosts);
        } else {
            foundPosts = await Post.find();
            //$(".search__message").css("display", "none");
            //document.getElementsByClassName("search__message").style.display = "none";
        }
        const context = {
            posts: foundPosts,
            searchTerm: req.query.q,
        }
        console.log(context);
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
        req.body.user = req.session.currentUser.id;
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
        const foundPost = await Post.findById(req.params.id).populate("user");
        const allComments = await Comment.find({ post: req.params.id }).populate("post user");
        const context = {
            post: foundPost,
            comments: allComments,
        }
        //console.log(context);
        return res.render("posts/show", context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// router.get("/:id", (req, res) => {
//     Comment.find({post:req.params.id})
//       .populate("post user")
//       .exec((error, allComments) => {
//         if (error) {
//           console.log(error);
//           req.error = error;
//           return next();
//         }
//         Post.findById(req.params.id).populate("user").exec((error, foundPost) => {
//           if (error) {
//             console.log(error);
//             req.error = error;
//             return next();
//           }
//           const context = {
//             post:foundPost,
//             comments:allComments,
//           };
//           return res.render("posts/show", context);
//         });
//       });
//   });

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
router.delete("/:id", async (req, res, next) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        await Comment.deleteMany({ post: req.params.id });
        //console.log("Deleted item");
        return res.redirect("/gallery");
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

module.exports = router;