const  Post  = require("../models/Post");


Post.insertMany(
    [
        {
            title: "Howdy",
            image: "https://i.imgur.com/L68FtMA.jpeg",
            description: "Good movie",
            user: "210569a838391314d541f1fd",
        },
        {
            title: "Howdy",
            image: "https://i.imgur.com/L68FtMA.jpeg",
            description: "Good movie",
            user: "210569a838391314d541f1fd",
        },  
        {
            title: "Howdy",
            image: "https://i.imgur.com/L68FtMA.jpeg",
            description: "Good movie",
            user: "210569a838391314d541f1fd",
        },
    ],
    function(error, createdPosts){
        if (error) return console.log(error);
        console.log("SEED COMPLETE");
        console.log(createdPosts);
    
    }
)