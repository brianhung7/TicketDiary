const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { User } = require("../models");

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
        // if password !== passwordTwo
        // res.send(passwords do not match )

        if (req.body.password !== req.body.passwordTwo) {
            return res.send("passwords do not match");
        }

        // check if user exists
        const foundUser = await User.exists({
            $or: [{ email: req.body.email }, { username: req.body.username }, { avatar: req.body.avatar }, { biography: req.body.biography }],
        });
        // if user does exist
        // redirect to login
        if (foundUser) {
            return res.redirect("/login");
        }

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
