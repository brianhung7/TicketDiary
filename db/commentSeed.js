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
[
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