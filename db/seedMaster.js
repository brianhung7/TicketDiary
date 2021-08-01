const { ObjectId } = require('mongodb');
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const Like = require("../models/Like");

const posterArr = [
    {img: "https://i.imgur.com/e2vTyGY.jpeg",title:"Bridge to Terabithia"},
    {img: "https://i.imgur.com/dJ6RuXM.jpeg",title:"Clockwork Orange"},
    {img: "https://i.imgur.com/TGXlwTX.jpeg",title:"Belleville Rendez-vous"},
    {img: "https://i.imgur.com/28PaivW.jpeg",title:"Indiana Jones"},
    {img: "https://i.imgur.com/nYuRuq7.jpeg",title:"Full Metal Jacket"},
    {img: "https://i.imgur.com/HMckwPg.jpeg",title:"The Prestige"},
    {img: "https://i.imgur.com/q6qPIx5.jpeg",title:"Tron"},
    {img: "https://i.imgur.com/moLl4EL.jpeg",title:"Jurassic Park"},
    {img: "https://i.imgur.com/iz7NzLA.jpeg",title:"Life of Brian"},
    {img: "https://i.imgur.com/mHieWsx.jpeg",title:"From Dusk Till Dawn"},
    {img: "https://i.imgur.com/mHGX7GQ.jpeg",title:"The Living Daylights"},
    {img: "https://i.imgur.com/JFS6rfm.jpeg",title:"Licence to Kill"},
    {img: "https://i.imgur.com/tLv7mLH.jpeg",title:"The Evil Dead"},
    {img: "https://i.imgur.com/zFjPkGE.jpeg",title:"Star Wars Episode III"},
    {img: "https://i.imgur.com/nDnKNZw.jpeg",title:"Casino Royale"},
    {img: "https://i.imgur.com/TaVDf2s.jpeg",title:"Logan's Run"},
    {img: "https://i.imgur.com/RJ1mG6D.jpeg",title:"The Wall"},
    {img: "https://i.imgur.com/5jLA3P4.jpeg",title:"9"},
    {img: "https://i.imgur.com/Q8n6Djw.jpeg",title:"Ghost in the Shell"},
    {img: "https://i.imgur.com/4X3cilw.jpeg",title:"The Matrix"},
    {img: "https://i.imgur.com/0A9eAvh.jpeg",title:"From Paris with Love"},
    {img: "https://i.imgur.com/mQSNTqm.jpeg",title:"Ponyo"},
    {img: "https://i.imgur.com/nbIMoWS.jpeg",title:"Crank: High Voltage"},
    {img: "https://i.imgur.com/TushU6a.jpeg",title:"Up"},
    {img: "https://i.imgur.com/F6sTJ1g.jpeg",title:"Love and Death"},
    {img: "https://i.imgur.com/xM9pZmE.jpeg",title:"The Shining"},
    {img: "https://i.imgur.com/LzVn4XU.jpeg",title:"District 9"},
    {img: "https://i.imgur.com/LKvPyv8.jpeg",title:"Alice in Wonderland"},
    {img: "https://i.imgur.com/PiSsFRv.jpeg",title:"Falling Down"},
    {img: "https://i.imgur.com/jjY0sHK.jpeg",title:"Watchmen"},
    {img: "https://i.imgur.com/mXTL9dp.jpeg",title:"Lord of War"},
    {img: "https://i.imgur.com/XWid1W4.jpeg",title:"Ratatouille"},
    {img: "https://i.imgur.com/XV3PJJX.jpeg",title:"The Dark Knight"},
    {img: "https://i.imgur.com/wLdqcSp.jpeg",title:"Planet Terror"},
    {img: "https://i.imgur.com/kxNEx8a.jpeg",title:"The Clone Wars"},
    {img: "https://i.imgur.com/YK7BX4e.jpeg",title:"Zombieland"},
    {img: "https://i.imgur.com/NgnOSvm.jpeg",title:"The Incredible Hulk"},
    {img: "https://i.imgur.com/6FsjOkQ.png",title:"Futurama"},
]

usernameArr = ["Brian44", "Arnav45", "Pham94", "Singh55", "MovieGuy33"];
userIdArr = ['220569a838391314d541f1fd', '230569a838391314d541f1fd', '240569a838391314d541f1fd', '250569a838391314d541f1fd', '260569a838391314d541f1fd'];
bioArr = ["I spend most of my time watching movies, so much that I sometimes start making films in my head.",
"I love movies so much I sometimes don't know the boundary between imagination and reality.",
"Lover of film, I live to enrich myself and learn through film, they are art and I am the curator."]

const seedUsers = async () => {
    await User.deleteMany();
    await User.insertMany([
        {
            username: "Anonymous",
            email: `anonymous@yahoo.com`,
            password: 'sdf',
            avatar: 'lajsf',
            biography: "We are those who haven't logged in",
            _id: ObjectId('120569a838391314d541f1fd'),

        },
    ],
        function (error, createdUsers) {
            if (error) return console.log(error);
            //console.log("Anonymous made:", createdUsers);
        }
    )
    for (let i = 0; i < usernameArr.length; i++) {
        await User.insertMany([
            {
                username: usernameArr[i],
                email: `${usernameArr[i]}@yahoo.com`,
                password: 'sdf',
                avatar: 'lajsf',
                biography: bioArr[Math.floor(Math.random() * (bioArr.length - 1))],
                _id: ObjectId(userIdArr[i]),

            },
        ],
            function (error, createdUsers) {
                if (error) return console.log(error);
                //console.log("User seed made:", createdUsers);
            }
        )
    }
}

postTitleArr = ["Amazing Film!", "My Favorite Movie", "My Favorite Flick", "Best Picture Ever!", "A Pleasure To Watch!", "A Masterpiece!", "5 Stars All The Way", "A Great Date Movie!", "A Great Family Movie!"];
postDescriptionArr = ["I can't believe how great it was!", "I can't watch to watch it again", "I have to tell you about this amazing film", "I hope they make a sequel very soon", "I brought my friends and family to see this and they loved it!", "This movie has so many great actors and actresses", "I absolutely loved this film!","This film was truly art in motion, a delight to the senses."];
const seedPosts = async () => {
    try {
        await Post.deleteMany();
        for (let i = 0; i < posterArr.length; i++) {
            const newPosts = await Post.insertMany(
                [
                    {
                        //title: postTitleArr[Math.floor(Math.random() * (postTitleArr.length - 1))],
                        title: posterArr[i].title,
                        image: posterArr[i].img,
                        description: postDescriptionArr[Math.floor(Math.random() * (postDescriptionArr.length - 1))],
                        user: userIdArr[Math.floor(Math.random() * (userIdArr.length - 1))],
                    },

                ],
                function (error, createdPosts) {
                    if (error) return console.log(error);
                    //console.log("SEED COMPLETE");
                    //console.log("Post seed made:", createdPosts);

                }
            )
        }
    } catch (error) {
        console.log(error);
    }
}




commentArr = ["It's lovely to hear your thoughts on this movie!", "Hey what movie are you going to watch next?", "Hey let's catch a movie sometime!", "Nice review, great work", "Amazing job sharing this with us!", "I'm so excited to hear your thoughts!", "Can't wait to see what else happens in the series", "Nice to hear your thoughts!", "Wow, great info!", "Yo let's catch a film sometime!", "Simpsons did it first", "Excellent thoughts!", "This was my favorite film as a child", "Hey cousin, let's go bowling!","Wow I remember watching this when I was young."];
const commentsPerPost = 3;
const seedComments = async () => {
    try {
        await Comment.deleteMany();
        let idAllPosts = await Post.find({}, { _id: 1 });
        let postIdArr = await idAllPosts.map(a => a._id);
        for (let i = 0; i < commentsPerPost; i++) {
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
        }
    } catch (error) {
        console.log(error);
    }
}

const seedLikes = async()=>{
    try{
        await  Like.deleteMany();
        let idAllPosts = await Post.find({}, { _id: 1 });
        let postIdArr = await idAllPosts.map(a => a._id);
        for (let i = 0; i<posterArr.length;i++){
            await Like.insertMany(
                [
                    {
                        numLikes: 5,
                        post: postIdArr[i],
                        userArr: userIdArr[Math.floor(Math.random() * (userIdArr.length - 1))],
                    }
                ]
            )
        }

    } catch (error) {
        console.log(error);
    }
}

const seed = async () => {
    try {
        await seedUsers();
        await seedPosts();
        await seedComments();
        await seedLikes();
    } catch (error) {
        console.log(error);
    }
}

seed();