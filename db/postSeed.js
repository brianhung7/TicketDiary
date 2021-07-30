const { Post } = require("../models/Post");

Post.insertMany(
    [
        {
            title: "Howdy",
            image: "https://i.imgur.com/L68FtMA.jpeg",
            description: "Good movie",
        }
    ],
    function(error, createdPosts){
        if (error) return console.log(error);
        console.log("SEED COMPLETE");
        console.log("createdPosts");
    
    }
)