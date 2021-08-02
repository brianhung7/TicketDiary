const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// register GET
router.get("/register", (req, res) => {
    return res.render("auth/register");
});

// login GET
router.get("/login", (req, res) => {
    return res.render("auth/login");
});

// register POST
router.post("/register", async (req, res) => {
    try {
        // check if user exists
        const foundUser = await User.exists({
            $or: [{ email: req.body.email }, { username: req.body.username }],
        });
        // if user does exist redirect to login
        if (foundUser) {
            console.log("user exists already");
            return res.redirect("/login");
        }
        //console.log("register body info", req.body);
        //encryption
        const salt = await bcrypt.genSalt(10);

        const hash = await bcrypt.hash(req.body.password, salt);

        req.body.password = hash;


        const createdUser = await User.create(req.body);


        return res.redirect("/login");
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
});


router.post("/login", async (req, res) => {
    try {

        const foundUser = await User.findOne({ email: req.body.email });

        if (!foundUser) {
            console.log("User not found");
            return res.redirect("/register");
        }
        // NOTE Authentication
        const match = await bcrypt.compare(req.body.password, foundUser.password);
        // if passwords do not match
        // send password invalid
        if (!match) {
            return res.send("Password Invalid");
        }
        // NOTE Credentials
        req.session.currentUser = {
            id: foundUser._id,
            username: foundUser.username,
        };
        console.log("Logged in!");
        return res.redirect("/gallery");
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
});

// logout GET
router.get("/logout", async (req, res) => {
    try {
        await req.session.destroy();
        return res.redirect("/login");
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
});

module.exports = router;
