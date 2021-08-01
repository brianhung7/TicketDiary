const express = require("express");
const router = express.Router();

const Post = require("../models/Post");
const Comment = require("../models/Comment");

// == Base route "/reviews"

// index route
// "/" - GET - Presentational
// router.get("/", (req, res) => {
//     Review.find({}).populate('post user').exec((error, allComments) => {
//         if (error) {
//             console.log(error);
//             req.error = error;
//             return next();
//         }

//         Post.find({}, (error, allPosts) => {

//             if (error) {
//                 console.log(error);
//                 req.error = error;
//                 return next();
//             }

//             const context = {
//                 comments: allComments,
//                 posts: allProducts
//             };

//             return res.render("comments/index", context);
//         })
//     });
// });


// create 
// "/" - POST - functional

router.post("/", (req, res) => {
    //If user is logged in, use their id, otherwise use anonymous user
    if (req.session.currentUser) {
        req.body.user = req.session.currentUser.id;
    } else {
        req.body.user = "120569a838391314d541f1fd";
    }
    Comment.create(req.body, (error, createdComment) => {
        if (error) {
            console.log(error);
            req.error = error;
            return next();
        }
        return res.redirect(`/gallery/${req.body.post}`);
    });
});


// remove review 

// router.delete("/:id", async (req, res) => {
//     try {
//         const foundReview = await Review.findById(req.params.id);
//         if (foundReview.user == req.session.currentUser.id) {
//             await foundReview.delete();
//             return res.redirect("/gallery");
//         } else {
//             return res.send("You are not allowed");
//         }

//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// })

module.exports = router;
