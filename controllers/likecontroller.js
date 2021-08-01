const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");
const Like = require("../models/Like");

router.get("/",(req,res,next)=>{
    res.send("hi");
})


router.put("/:id", async (req,res,next)=>{
    console.log("LIke put route");
    const foundPost = await Post.findById(req.params.id);
    console.log(foundPost);
})
module.exports = router;