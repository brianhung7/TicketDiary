//user ids can be from a set array of ids
//comment ids | comment strings can be from a set array of comments
//post ids have to be unique
const { ObjectId } = require('mongodb');
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const posterArr = ["https://i.imgur.com/e2vTyGY.jpeg",
    "https://i.imgur.com/dJ6RuXM.jpeg",
    "https://i.imgur.com/TGXlwTX.jpeg",
    "https://i.imgur.com/28PaivW.jpeg",
    "https://i.imgur.com/nYuRuq7.jpeg",
    "https://i.imgur.com/HMckwPg.jpeg",
    "https://i.imgur.com/q6qPIx5.jpeg",
    "https://i.imgur.com/moLl4EL.jpeg",
    "https://i.imgur.com/iz7NzLA.jpeg",
    "https://i.imgur.com/mHieWsx.jpeg",
    "https://i.imgur.com/mHGX7GQ.jpeg",
    "https://i.imgur.com/JFS6rfm.jpeg",
    "https://i.imgur.com/tLv7mLH.jpeg",
    "https://i.imgur.com/zFjPkGE.jpeg",
    "https://i.imgur.com/nDnKNZw.jpeg",
    "https://i.imgur.com/TaVDf2s.jpeg",
    "https://i.imgur.com/RJ1mG6D.jpeg",
    "https://i.imgur.com/5jLA3P4.jpeg",
    "https://i.imgur.com/Q8n6Djw.jpeg",
    "https://i.imgur.com/4X3cilw.jpeg",
    "https://i.imgur.com/0A9eAvh.jpeg",
    "https://i.imgur.com/mQSNTqm.jpeg",
    "https://i.imgur.com/nbIMoWS.jpeg",
    "https://i.imgur.com/TushU6a.jpeg",
    "https://i.imgur.com/F6sTJ1g.jpeg",
    "https://i.imgur.com/xM9pZmE.jpeg",
    "https://i.imgur.com/LzVn4XU.jpeg",
    "https://i.imgur.com/LKvPyv8.jpeg",
    "https://i.imgur.com/PiSsFRv.jpeg",
    "https://i.imgur.com/jjY0sHK.jpeg",
    "https://i.imgur.com/mXTL9dp.jpeg",
    "https://i.imgur.com/XWid1W4.jpeg",
    "https://i.imgur.com/XV3PJJX.jpeg",
    "https://i.imgur.com/wLdqcSp.jpeg",
    "https://i.imgur.com/kxNEx8a.jpeg",
    "https://i.imgur.com/YK7BX4e.jpeg",
    "https://i.imgur.com/NgnOSvm.jpeg",
    "https://i.imgur.com/6FsjOkQ.png"];



usernameArr = ["Brian44", "Arnav45", "Pham94", "Singh55", "MovieGuy33"];
userIdArr = ['220569a838391314d541f1fd', '230569a838391314d541f1fd', '240569a838391314d541f1fd', '250569a838391314d541f1fd', '260569a838391314d541f1fd'];



/*
for (let i = 0; i < usernameArr.length; i++) {
    User.insertMany([
        {
            username: usernameArr[i],
            email: `${usernameArr[i]}@getMaxListeners.com`,
            password: 'sdf',
            avatar: 'lajsf',
            biography: 'asd',
            _id: ObjectId(userIdArr[i]),

        },
    ],
        function (error, createdUsers) {
            if (error) return console.log(error);
            console.log("SEED COMPLETE");
            console.log(createdUsers);
        }
    )
}
*/

/*
postTitleArr = ["Amazing Film!", "My Favorite Movie", "My Favorite Flick", "Best Picture Ever!", "A Pleasure To Watch!", "A Masterpiece!", "5 Stars All The Way", "A Great Date Movie!", "A Great Family Movie!"];
postDescriptionArr = ["I can't believe how great it was!", "I can't watch to watch it again", "I have to tell you about this amazing film", "I hope they make a sequel very soon", "I brought my friends and family to see this and they loved it!", "This movie has so many great actors and actresses", "I absolutely loved this film"];
const seedPosts = async () => {
    try {
        //await Post.deleteMany();
        for (let i = 0; i < posterArr.length; i++) {
            const newPosts = await Post.insertMany(
                [
                    {
                        title: postTitleArr[Math.floor(Math.random() * (postTitleArr.length - 1))],
                        image: posterArr[i],
                        description: postDescriptionArr[Math.floor(Math.random() * (postDescriptionArr.length - 1))],
                        user: userIdArr[Math.floor(Math.random() * (userIdArr.length - 1))],
                    },

                ],
                function (error, createdPosts) {
                    if (error) return console.log(error);
                    //console.log("SEED COMPLETE");
                    console.log(createdPosts);

                }
            )
        }
    } catch (error) {
        console.log(error);
    }
}

seedPosts();
*/



commentArr = ["It's lovely to hear your thoughts on this movie!", "Hey what movie are you going to watch next?", "Hey let's catch a movie sometime!", "Nice review, great work", "Amazing job sharing this with us!", "I'm so excited to hear your thoughts!", "Can't wait to see what else happens in the series"];
const seedComments = async () => {
    try {
        let idAllPosts = await Post.find({}, { _id: 1 });
        let postIdArr = idAllPosts.map(a => a._id);
        for (let i = 0; i < posterArr.length; i++) {
             await Comment.insertMany(
                [
                    {
                        content: commentArr[Math.floor(Math.random() * (commentArr.length - 1))],
                        post: postIdArr[i],
                        user: userIdArr[Math.floor(Math.random() * (userIdArr.length - 1))],
                    },
                ]
            )
        }
    } catch (error) {
        console.log(error);
    }
    console.log("Comment seed");
}

seedComments();