const  Comment  = require("../models/Comment");


Comment.insertMany(
    [
        {
            content: "This is a comment",
            post: "6104be0ab8d8a85685ad01e4",
            user: "610486878cda7b49430d20c2",
        },
        {
            content: "This is a comment",
            post: "6104be0ab8d8a85685ad01e4",
            user: "610486878cda7b49430d20c2",
        },
        {
            content: "This is a comment",
            post: "6104be0ab8d8a85685ad01e4",
            user: "610486878cda7b49430d20c2",
        },
    ],
    function(error, createdComments){
        if (error) return console.log(error);
        console.log("SEED COMPLETE");
        console.log(createdComments);
    
    }
)