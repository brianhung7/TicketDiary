//Server info

/* SECTION External modules */
const express = require("express");
const methodOverride = require("method-override");
// const session = require("express-session");
// const MongoStore = require("connect-mongo");
// require("dotenv").config();

/* SECTION module instance */
const app = express();

/* SECTION PORT  */
const PORT = process.env.PORT || 4000;


/* SECTION Internal Modules */
//const controllers = require("./controllers");
const postCtrl = require("./controllers/postcontrollers.js");
//const usersCtrl = require("./controllers/")

/* SECTION App Config */

app.set("view engine", "ejs");

// session controller
// app.use(
//   session({
//     // this will store the cookies in the mongodb database
//     store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
//     // secret key will sign the cookie for validation
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false,
//     // cookie config
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 24 * 7 * 2, // two weeks
//     },
//   })
// );

/* SECTION Middleware */


// // NOTE this will add a variable called user to EVERY EJS file
// app.use((req, res, next) => {
//   res.locals.user = req.session.currentUser;
//   return next();
// });

// // create a location for our nav links
// app.use(require("./utils/navlinks"));

// app.use(express.static("public"));

// // NOTE allow body data for all routes
// app.use(express.urlencoded({ extended: true }));

// app.use(methodOverride("_method"));

// app.use(require("./utils/logger"));

// // auth required 
// if user is authenticated 
// do nothing 
// if not authenticated 
// redirect to login 

// const authRequired = (req,res,next) => {
//   if(!req.session.currentUser){
//     return res.redirect("/login");
//   }

//   next();
// }



/* !SECTION */
// app.get("/", (req, res) => res.redirect("/products"));


// /* SECTION Routes */
// app.use("/", controllers.auth);
app.use("/gallery", postCtrl);
//app.use("/users", usersCtrl);

// 404
app.get("/*", (req, res) => {
    const context = {
        error: req.error,
    };

    res.render("404", context);
});

app.listen(PORT, () =>
    console.log(`Listening for client requests on port ${PORT}`)
);