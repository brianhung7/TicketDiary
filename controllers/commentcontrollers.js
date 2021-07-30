const express = require("express");
const router = express.Router();

const { Comment, Post } = require("../models");

// == Base route "/reviews"

// index route
// "/" - GET - Presentational
router.get("/", (req, res) => {
    Review.find({}).populate('post user').exec((error, allComments) => {
        if (error) {
            console.log(error);
            req.error = error;
            return next();
        }

        Post.find({}, (error, allPosts) => {

            if (error) {
                console.log(error);
                req.error = error;
                return next();
            }

            const context = {
                comments: allComments,
                posts: allProducts
            };

            return res.render("comments/index", context);
        })
    });
});


// create 
// "/" - POST - functional

router.post("/", (req, res) => {
    req.body.user = req.session.currentUser.id;

    Review.create(req.body, (error, createdReview) => {
        if (error) {
            console.log(error);
            req.error = error;
            return next();
        }

        return res.redirect("/gallery");
    });
});


// remove review 

router.delete("/:id", async (req, res) => {
    try {
        const foundReview = await Review.findById(req.params.id);
        if (foundReview.user == req.session.currentUser.id) {
            await foundReview.delete();
            return res.redirect("/gallery");
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
