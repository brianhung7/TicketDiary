/* SECTION External modules */
const express = require("express");
const methodOverride = require("method-override");

/* SECTION module instance */
const app = express();

/* SECTION PORT  */
const PORT = 4000;

/* SECTION Internal Modules */
const controllers = require("./controllers");

/* SECTION App Config */

app.set("view engine", "ejs");


/* SECTION Middleware */


// create a location for our nav links
app.use(require("./utils/navlinks"));

app.use(express.static("public"));

// NOTE allow body data for all routes
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

app.use(require("./utils/logger"));


/* !SECTION */
//app.get("/", (req, res) => res.redirect("/gallery"));
app.get("/",(req, res)=>{
    res.send("Hello");
})


/* SECTION Routes 
app.use("/", controllers.auth);
app.use("/products", controllers.product);
app.use("/reviews", authRequired, controllers.review);
*/

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
